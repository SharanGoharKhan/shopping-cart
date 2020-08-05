import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native';

function AuthLoading(props) {
    useEffect(() => {
        _bootstrapAsync()
    }, [])

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // const userToken = await AsyncStorage.getItem('userToken');
        // userToken ? this.props.googleAuth(JSON.parse(userToken)) : null
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // for testing purpose
        props.navigation.navigate('Drawer', { screen: 'SignIn' });
    };

    // Render any loading content that you like here
    return (
        <View>
            <ActivityIndicator />
        </View>
    );
}

export default (AuthLoading);
