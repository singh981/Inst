import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/Auth/SignInScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import ConfirmEmailScreen from '../../screens/Auth/ConfirmEmailScreen';
import ForgotPasswordScreen from '../../screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../../screens/Auth/NewPasswordScreen';

import {AuthStackNavigatorParamList} from '../types';
import BottomTabNavigator from '../BottomTabNavigator';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            {/* 
                    NOTE: Below we define(register) the screens that we want to navigate to within this (Stack) navigator. 
                    We are not moving to any screen here, just registering them.
            */}
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
            />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default AuthStackNavigator;
