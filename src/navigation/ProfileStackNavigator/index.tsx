import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                initialParams={{fromMyProfileTab: true}}
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
