import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Defining types for all the 'main' navigation stack
export type RootNavigatorParamList = {
    Home: undefined;
    Comments: {postId: number};
    UserProfile: {username: string};
};

export type HomeStackNavigatorParamList = {
    Home: undefined;
    UserProfile: {username: string};
};

export type BottomTabNavigatorParamList = {
    Feed: undefined;
    MyProfile: undefined;
    Search: undefined;
    Upload: undefined;
    Notifications: undefined;
};

export type ProfileStackNavigatorParamList = {
    Profile: undefined;
    EditProfile: undefined;
};

// Defining types for the 'screens' that use navigation
export type UserProfileScreenNavigationProp = NativeStackNavigationProp<
    RootNavigatorParamList,
    'UserProfile'
>;

export type MyProfileScreenNavigationProp = NativeStackNavigationProp<
    ProfileStackNavigatorParamList,
    'Profile'
>;

export type EditProfileScreenNavigationProp = NativeStackNavigationProp<
    ProfileStackNavigatorParamList,
    'EditProfile'
>;

export type CommentScreenNavigationProp = NativeStackNavigationProp<
    RootNavigatorParamList,
    'Comments'
>;

// Defining types for the 'screens' that use route
export type UserProfileScreenRouteProp = RouteProp<
    RootNavigatorParamList,
    'UserProfile'
>;
export type MyProfileScreenRouteProp = RouteProp<
    ProfileStackNavigatorParamList,
    'Profile'
>;
export type CommentsScreenRouteProp = RouteProp<
    RootNavigatorParamList,
    'Comments'
>;
