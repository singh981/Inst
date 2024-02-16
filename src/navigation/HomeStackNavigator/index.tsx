import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Posts', headerShown: true}}
            />

            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{title: 'Profile'}}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
