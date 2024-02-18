import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import {ProfileStackNavigatorParamList} from '../types';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            {/* 
                    NOTE: Below we define(register) the screens that we want to navigate to within this (stack) navigator. 
                    We are not moving to any screen here, just registering them.
            */}
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{title: 'My Profile'}}
            />

            <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{title: 'Edit Profile'}}
            />
        </Stack.Navigator>
    );
};

export default ProfileStackNavigator;
