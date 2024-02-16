import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Posts'}}
                />
                <Stack.Screen
                    name="Comments"
                    component={CommentsScreen}
                    options={{title: 'Comments'}}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen} // Pass the component here
                    options={{title: 'Profile'}}
                    initialParams={{username: '42'}}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                    options={{title: 'Edit Profile'}}
                />
                <Stack.Screen
                    name="PostUpload"
                    component={PostUploadScreen}
                    options={{title: 'Post'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
