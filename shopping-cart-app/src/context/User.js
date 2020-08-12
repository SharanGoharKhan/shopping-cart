import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { useLazyQuery, useApolloClient, gql } from '@apollo/client'
import { profile } from '../apollo/server'

const PROFILE = gql`
  ${profile}
`

const UserContext = React.createContext({})

export const UserProvider = props => {
  const client = useApolloClient()
  const [token, setToken] = useState('')

  const [
    fetchProfile,
    {
      called: calledProfile,
      loading: loadingProfile,
      error: errorProfile,
      data: dataProfile
    }
  ] = useLazyQuery(PROFILE, {
    fetchPolicy: 'network-only',
    onCompleted,
    onError
  })


  useEffect(() => {
    let isSubscribed = true
    ;(async() => {
      const token = await AsyncStorage.getItem('token')
      isSubscribed && setToken(token)
    })()
    return () => {
      isSubscribed = false
    }
  }, [])

  useEffect(() => {
    if (!token) return
    let isSubscribed = true
    ;(async() => {
      isSubscribed && (await fetchProfile())
    })()
    return () => {
      isSubscribed = false
    }
  }, [token])


  function onCompleted({ profile }) {
    console.log('onCompleted')
  }
  function onError(error) {
    console.log('error context', error)
  }

  const setTokenAsync = async token => {
    await AsyncStorage.setItem('token', token)
    setToken(token)
  }

  const logout = async() => {
    try {
      await AsyncStorage.removeItem('token')
      setToken(null)
      await client.resetStore()
    } catch (error) {
      console.log('error on logout', error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: !!token && dataProfile && !!dataProfile.profile,
        loadingProfile: loadingProfile && calledProfile,
        errorProfile,
        profile:
          dataProfile && dataProfile.profile ? dataProfile.profile : null,
        setTokenAsync,
        logout
      }}>
      {props.children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}
export const UserConsumer = UserContext.Consumer
export default UserContext
