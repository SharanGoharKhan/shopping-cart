import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'

import AddressList from '../screens/AddressList/AddressList'
import AddToBag from '../screens/AddToBag/AddToBag'
import Checkout from '../screens/Checkout/Checkout'
import CheckoutPayment from '../screens/CheckoutPayment/CheckoutPayment'
import CheckoutReciept from '../screens/CheckoutReciept/CheckoutReciept'
import EditingAddress from '../screens/EditingAddress/EditingAddress'
import EditingProfile from '../screens/EditingProfile/EditingProfile'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'
import MainLanding from '../screens/MainLanding/MainLanding'
import OrderDetail from '../screens/OrderDetail/OrderDetail'
import Payment from '../screens/Payment/Payment'
import PreviousOrder from '../screens/PreviousOrders/PreviousOrders'
import ProductDescription from '../screens/ProductDescription/ProductDescription'
import ProductListing from '../screens/ProductsListing/ProductListing'
import ProfileDashboard from '../screens/ProfileDashboard/ProfileDashboard'
import Search from '../screens/Search/Search'
import SearchResult from '../screens/SearchResults/SearchResults'
import ShoppingCart from '../screens/ShoppingCart/ShoppingCart'
import SignIn from '../screens/SignIn/SignIn'
import SignUp from '../screens/SignUp/SignUp'
import TrackOrder from '../screens/TrackOrder/TrackOrder'
import Faq from '../screens/Faq/Faq'
import TermsAndConditions from '../screens/TermsAndConditions/TermsAndConditions'
import Settings from '../screens/Settings/Settings'
import MainMenu from '../components/MainMenu/MainMenu'
import AuthLoading from '../utils/authLoading'

const authenticationNavigator = createStackNavigator(
    {
        AddressList,
        AddToBag,
        Checkout,
        CheckoutPayment,
        CheckoutReciept,
        EditingAddress,
        EditingProfile,
        ForgotPassword,
        OrderDetail,
        Payment,
        PreviousOrder,
        ProductDescription,
        ProductListing,
        ProfileDashboard,
        SearchResult,
        ShoppingCart,
        SignIn,
        SignUp,
        TrackOrder
    }, {
        headerMode: 'none'
    })
const Drawer = createDrawerNavigator(
    {
        MainLanding: { screen: MainLanding },
        Search: { screen: Search },
        ProfileDashboard: { screen: ProfileDashboard },
        Faq: { screen: Faq },
        TermsAndConditions: { screen: TermsAndConditions },
        Settings: { screen: Settings }
    },
    {
        initialRouteName: 'MainLanding',
        contentComponent: MainMenu
    }
)
const AppNavigator = createSwitchNavigator(
    {
        AuthLoading,
        Auth: authenticationNavigator,
        Drawer
    },
    {
        initialRouteName: 'AuthLoading'
    }
)
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer