import {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import {signIn, AuthError, getCurrentUser} from 'aws-amplify/auth';

import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {SignInScreenNavigationProp} from '../../../navigation/types';
import {AuthContext} from '../../../context/AuthContext';

import {fetchUserFromDynamoDb} from '../../../utils/FetchUserfromDynamoDb';

type SignInParameters = {
    username: string;
    password: string;
};

const SignInScreen = () => {
    const {logIn} = useContext(AuthContext) || {};

    const {control, handleSubmit, reset} = useForm<SignInParameters>({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const navigation = useNavigation<SignInScreenNavigationProp>();

    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async ({username, password}: SignInParameters) => {
        setLoading(true);
        try {
            const {
                isSignedIn,
                nextStep: {signInStep},
            } = await signIn({username, password});

            console.log(
                'User Signed In Successfully',
                ' | ',
                `isSignedIn: ${isSignedIn}`,
                ' | ',
                `signInStep: ${signInStep}`,
            );

            // navigating user to confirm sign up screen if signInStep is CONFIRM_SIGN_UP
            switch (signInStep) {
                case 'CONFIRM_SIGN_UP':
                    navigation.navigate('ConfirmSignUp', {username});
                    break;
                case 'DONE':
                    logIn &&
                        logIn(
                            await fetchUserFromDynamoDb(
                                (
                                    await getCurrentUser()
                                ).userId,
                            ),
                        );
                    break;
                default:
                    break;
            }
        } catch (error: AuthError | any) {
            console.log(
                'Error signing in',
                error.name,
                error.message,
                error.recoverySuggestion,
            );

            // handling user already authenticated error
            error.name === 'UserAlreadyAuthenticatedException'
                ? logIn &&
                  logIn(
                      await fetchUserFromDynamoDb(
                          (
                              await getCurrentUser()
                          ).userId,
                      ),
                  )
                : Alert.alert('Error Signing In', error.message);
        } finally {
            setLoading(false);
            reset();
        }
    };

    const ForgotPasswordHandler = () => navigation.navigate('ForgotPassword');

    return (
        // <ScrollView>
        <SafeAreaView
            style={{
                backgroundColor: 'lightgray',
                flex: 1,
            }}>
            {/* Form */}
            <View
                style={{
                    gap: 20,
                    padding: 20,
                    width: '100%',
                }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    Sign In
                </Text>
                <FormInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Username is required',
                        },
                        minLength: {
                            value: 6,
                            message: 'Username must have at least 6 characters',
                        },
                        pattern: {
                            value: /^\S*$/,
                            message: 'Username cannot contain spaces',
                        },
                    }}
                />

                <FormInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Password is required',
                        },
                        minLength: {
                            value: 6,
                            message: 'Password must have at least 6 characters',
                        },
                    }}
                    secureTextEntry
                />

                {/* Button */}
                <CustomButton
                    title={!loading ? 'Sign In' : 'Loading...'}
                    onPress={handleSubmit(onSubmit)}
                    type="primary"
                />
                <View
                    style={{
                        maxWidth: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // backgroundColor: 'green',
                    }}>
                    <CustomButton
                        title="Forgot Password?"
                        onPress={() => ForgotPasswordHandler()}
                        type="tertiary"
                    />
                    <CustomButton
                        title="Sign Up"
                        onPress={() => navigation.navigate('SignUp')}
                        type="tertiary"
                    />
                </View>
            </View>
        </SafeAreaView>
        // </ScrollView>
    );
};

export default SignInScreen;
