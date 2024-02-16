import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/color';

import ProfileScreen from '../../screens/ProfileScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import PostUploadScreen from '../../screens/PostUploadScreen';
import CommentsScreen from '../../screens/CommentsScreen';
import HomeStackNavigator from '../HomeStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = focused ? 'home' : 'home-outline';
                        return (
                            <Ionicons
                                name={iconName as string}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'MyProfile') {
                        iconName = focused ? 'user' : 'user-o';
                        return (
                            <FontAwesome
                                name={iconName as string}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search';
                        return (
                            <Ionicons
                                name={iconName as string}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Upload') {
                        iconName = focused ? 'plus-square' : 'plus-square-o';
                        return (
                            <FontAwesome
                                name={iconName as string}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? 'bell' : 'bell-o';
                        return (
                            <FontAwesome
                                name={iconName as string}
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
                tabBarActiveTintColor: colors.black,
                tabBarInactiveTintColor: colors.grey,
                // tabBarShowLabel: false,
            })}>
            <Tab.Screen
                name="Feed"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Search" component={ProfileScreen} />
            <Tab.Screen name="Upload" component={PostUploadScreen} />
            <Tab.Screen name="Notifications" component={ProfileScreen} />
            <Tab.Screen
                name="MyProfile"
                component={ProfileScreen}
                options={{title: 'My Profile'}}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
