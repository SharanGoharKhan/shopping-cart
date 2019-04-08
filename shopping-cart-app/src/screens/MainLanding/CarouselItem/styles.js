import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

/* StyleSheet
============================================================================= */
export default {
    container: {
        flexDirection: 'column',
        height: height * 0.3,
        width,
        alignItems: 'center',
    },
    image: {
        width,
        height: height * 0.3,
    },
};
