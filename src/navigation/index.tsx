import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

import { RootNavigatorParamList } from './types';

import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
    const { user, waitingtoGetCurrentUser } = useContext(AuthContext) || {};

    // NOTE: We are using the user object from the AuthContext to determine which screen to show.
    return waitingtoGetCurrentUser ? (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="black" />
        </View>
    ) : (
        <NavigationContainer>
            <Stack.Navigator>
                {/* 
                    NOTE: Below we define(register) the screens that we want to navigate to within this (stack) navigator. 
                    We are not moving to any screen here, just registering them.
                */}
                {
                    // NOTE: We are using the user object from the AuthContext to determine which screen to show.
                    // If the user is not logged in, we show the AuthStackNavigator, else we show the BottomTabNavigator.

                    // NOTE: This also allows us to control the navigation flow based on the user's authentication status.
                    // For example, if the user is not logged in, we can show the AuthStackNavigator, else we can show the BottomTabNavigator.
                    // For example: if the user after logging in can press 'back' button and go back to the login screen.
                    // But with this approach we can control the navigation flow and prevent the user from going back to the login screen.
                    !user ? (
                        <Stack.Screen
                            name="Auth"
                            component={AuthStackNavigator}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <Stack.Screen
                            name="Home"
                            component={BottomTabNavigator}
                            options={{ headerShown: false }}
                        />
                    )
                }
                {/* <Stack.Screen
                    name="Comments"
                    component={CommentsScreen}
                    options={{title: 'Comments'}}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
