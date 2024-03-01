import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Defining types for all the 'main' navigation stack
export type RootNavigatorParamList = {
    Auth: undefined;
    Home: undefined;
};

export type BottomTabNavigatorParamList = {
    Feed: undefined;
    Search: undefined;
    Upload: undefined;
    Notifications: undefined;
    MyProfile: undefined;
};

export type HomeStackNavigatorParamList = {
    Home: undefined;
    UserProfile: {username: string};
    Comments: {postId: number};
};

export type ProfileStackNavigatorParamList = {
    Profile: undefined;
    EditProfile: undefined;
};

export type SearchStackNavigatorParamList = {
    UserSearch: undefined;
    PostSearch: undefined;
};

// AuthStackNavigatorParamList
export type AuthStackNavigatorParamList = {
    SignIn: undefined;
    SignUp: undefined;
    ConfirmEmail: undefined;
    ForgotPassword: undefined;
    NewPassword: undefined;
    Home: undefined;
};

export type SignInScreenNavigationProp = NativeStackNavigationProp<
    AuthStackNavigatorParamList,
    'SignIn'
>;

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
    AuthStackNavigatorParamList,
    'SignUp'
>;

// export type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
//     AuthStackNavigatorParamList,
//     'ForgotPassword'
// >;

/*
EXPLANATION for "NativeStackNavigationProp"
NativeStackNavigationProp is a helper type from React Navigation library. It's used to tell TypeScript about the navigation capabilities of your screens.

It takes two parameters:

AuthStackNavigatorParamList: This is a list of all the screens in your "Auth" stack (a group of screens that you navigate between). It's like a map of your app's screens that belong to this particular group.

'SignIn': This is the name of the specific screen that we're talking about right now. It's like saying, "Hey, we're at the 'SignIn' place on our map."

So, NativeStackNavigationProp<AuthStackNavigatorParamList, 'SignIn'> is like saying, "We have a navigator that can go to any place in our 'Auth' group of screens, and right now, we're at the 'SignIn' place."

When you use this type for your navigation prop, it helps TypeScript understand what kind of navigation actions you can do and what parameters you can pass when navigating to different screens. It's like giving TypeScript a guidebook to how navigation works in your app.
*/
export type HomeScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Home'
>;

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
    ProfileStackNavigatorParamList,
    'Profile'
>;

export type EditProfileScreenNavigationProp = NativeStackNavigationProp<
    ProfileStackNavigatorParamList,
    'EditProfile'
>;

export type CommentScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Comments'
>;

// export type HomeScreenNavigationProp = NativeStackNavigationProp<
//     HomeStackNavigatorParamList,
//     'Home'
// >;

// Defining types for the 'screens' that use route
export type UserProfileScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'UserProfile'
>;
export type MyProfileScreenRouteProp = RouteProp<
    ProfileStackNavigatorParamList,
    'Profile'
>;
export type CommentsScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Comments'
>;
