import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={BottomTabNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Comments"
                    component={CommentsScreen}
                    options={{title: 'Comments'}}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{title: 'Profile'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
