import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as Screen from '../screens';
import MainMenu from '../components/MainMenu/MainMenu';
import AuthLoading from '../utils/authLoading';

const NavigationStack = createStackNavigator();
const MainStack = createStackNavigator();
const SideDrawer = createDrawerNavigator();

function Drawer() {
    return (
        <SideDrawer.Navigator initialRouteName='MainLanding' drawerContent={props => <MainMenu {...props} />}>
            <SideDrawer.Screen name='noDrawer' component={noDrawer} />
        </SideDrawer.Navigator>
    )
}
function noDrawer() {
    return (
        <NavigationStack.Navigator headerMode='none'>
            <NavigationStack.Screen name='MainLanding' component={Screen.MainLanding} />
            <NavigationStack.Screen name='AddressList' component={Screen.AddressList} />
            <NavigationStack.Screen name='Checkout' component={Screen.Checkout} />
            <NavigationStack.Screen name='Payment' component={Screen.Payment} />
            <NavigationStack.Screen name='Paypal' component={Screen.Paypal} />
            <NavigationStack.Screen name='StripeCheckout' component={Screen.StripeCheckout} />
            <NavigationStack.Screen name='EditAddress' component={Screen.EditAddress} />
            <NavigationStack.Screen name='NewAddress' component={Screen.NewAddress} />
            <NavigationStack.Screen name='FullMap' component={Screen.FullMap} />
            <NavigationStack.Screen name='EditingProfile' component={Screen.EditingProfile} />
            <NavigationStack.Screen name='OrderDetail' component={Screen.OrderDetail} />
            <NavigationStack.Screen name='PreviousOrders' component={Screen.PreviousOrders} />
            <NavigationStack.Screen name='ProductDescription' component={Screen.ProductDescription} />
            <NavigationStack.Screen name='ProductListing' component={Screen.ProductListing} />
            <NavigationStack.Screen name='ProfileDashboard' component={Screen.ProfileDashboard} />
            <NavigationStack.Screen name='SearchResult' component={Screen.SearchResults} />
            <NavigationStack.Screen name='ShoppingCart' component={Screen.ShoppingCart} />
            <NavigationStack.Screen name='Search' component={Screen.Search} />
            <NavigationStack.Screen name='TrackOrder' component={Screen.TrackOrder} />

            <NavigationStack.Screen name='SignIn' component={Screen.SignIn} />
            <NavigationStack.Screen name='SignUp' component={Screen.SignUp} />
        </NavigationStack.Navigator>
    )

}

function AppContainer() {
    return (
        <NavigationContainer>
            <MainStack.Navigator headerMode='none' initialRouteName='AuthLoading'>
                <MainStack.Screen name='AuthLoading' component={AuthLoading} />
                <MainStack.Screen name='Drawer' component={Drawer} />
            </MainStack.Navigator>
        </NavigationContainer>
    )

}

export default AppContainer;
