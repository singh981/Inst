import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import {RootNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* 
                    NOTE: Below we define(register) the screens that we want to navigate to within this (stack) navigator. 
                    We are not moving to any screen here, just registering them.
                */}
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
                    name="UserProfile"
                    component={ProfileScreen}
                    options={{title: 'Profile'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
