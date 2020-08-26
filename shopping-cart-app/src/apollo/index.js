import { AsyncStorage } from 'react-native'
import { ApolloClient, ApolloLink, split, concat, Observable, createHttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { InMemoryCache } from '@apollo/client/cache';
import { WebSocketLink } from '@apollo/client/link/ws'
import { persistCache } from 'apollo-cache-persist'
import getEnvVars from '../../environment'

const { GRAPHQL_URL, WS_GRAPHQL_URL } = getEnvVars()

const cache = new InMemoryCache({
  typePolicies: {
    Agenda: {
      fields: {
        orders: {
          merge(existing= [], incoming = [], { args }) {
            const merged = existing ? existing.slice(0) : [];
            // Insert the incoming elements in the right places, according to args.
            const end = args.offset + Math.min(args.limit, incoming.length);
            for (let i = args.offset; i < end; ++i) {
              merged[i] = incoming[i - args.offset];
            }
            return merged;
          },

          read(existing = [], { args }) {
            // If we read the field before any data has been written to the
            // cache, this function will return undefined, which correctly
            // indicates that the field is missing.
            const page = existing && existing.slice(
              args.offset,
              args.offset + args.limit,
            );
            // If we ask for a page outside the bounds of the existing array,
            // page.length will be 0, and we should return undefined instead of
            // the empty array.
            if (page && page.length > 0) {
              return page;
            }
          },
        },
      },
    },
  }
});

const httpLink = createHttpLink({
  uri: GRAPHQL_URL
})

const wsLink = new WebSocketLink({
  uri: WS_GRAPHQL_URL,
  options: {
    reconnect: true
  }
})

const request = async operation => {
  const token = await AsyncStorage.getItem('token')

  operation.setContext({
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
}

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      // console.log(observer)
      let handle
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const terminatingLink = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}, wsLink)

const setupApollo = async () => {
  // await persistCache({
  //   cache,
  //   storage: AsyncStorage
  // })
  const client = new ApolloClient({
    link: concat(ApolloLink.from([terminatingLink, requestLink]), httpLink),
    cache,
    resolvers: {}
  })

  // set ref for global use
  // eslint-disable-next-line no-undef
  clientRef = client

  return client
}

export default setupApollo
