import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
} from 'react-navigation';

import AddressList from '../screens/AddressList/AddressList';
import Checkout from '../screens/Checkout/Checkout';
import CheckoutPayment from '../screens/CheckoutPayment/CheckoutPayment';
import EditingAddress from '../screens/EditingAddress/EditingAddress';
import EditingProfile from '../screens/EditingProfile/EditingProfile';
import MainLanding from '../screens/MainLanding/MainLanding';
import OrderDetail from '../screens/OrderDetail/OrderDetail';
import PreviousOrders from '../screens/PreviousOrders/PreviousOrders';
import ProductDescription from '../screens/ProductDescription/ProductDescription';
import ProductListing from '../screens/ProductsListing/ProductListing';
import ProfileDashboard from '../screens/ProfileDashboard/ProfileDashboard';
import Search from '../screens/Search/Search';
import SearchResult from '../screens/SearchResults/SearchResults';
import ShoppingCart from '../screens/ShoppingCart/ShoppingCart';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import TrackOrder from '../screens/TrackOrder/TrackOrder';
import MainMenu from '../components/MainMenu/MainMenu';
import AuthLoading from './authLoading';
import OtpValidation from '../screens/SignUp/OtpValidation/OtpValidation'

const authenticationNavigator = createStackNavigator(
    {
        SignIn,
        SignUp,
    }, {
        headerMode: 'none',
    },
);
const Drawer = createDrawerNavigator(
    {
        MainLanding: { screen: MainLanding },
        ProfileDashboard: { screen: ProfileDashboard },
    },
    {
        initialRouteName: 'MainLanding',
        contentComponent: MainMenu,
    },
);
const noDrawer = createStackNavigator({
    Drawer,
    AddressList,
    Checkout,
    CheckoutPayment,
    EditingAddress,
    EditingProfile,
    OrderDetail,
    PreviousOrders,
    ProductDescription,
    ProductListing,
    ProfileDashboard,
    SearchResult,
    ShoppingCart,
    Search,
    TrackOrder,
    OtpValidation,
}, {
        headerMode: 'none',
    })


const AppNavigator = createSwitchNavigator(
    {
        AuthLoading,
        Auth: authenticationNavigator,
        noDrawer,
    },
    {
        initialRouteName: 'AuthLoading',
    },
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
