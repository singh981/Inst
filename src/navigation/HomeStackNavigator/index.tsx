import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import CommentsScreen from '../../screens/CommentsScreen';

import {HomeStackNavigatorParamList} from '../types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Posts', headerShown: true}}
            />

            <Stack.Screen
                name="UserProfile"
                component={ProfileScreen}
                options={{title: 'Profile'}}
            />

            <Stack.Screen
                name="Comments"
                component={CommentsScreen}
                options={{title: 'Comments'}}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
