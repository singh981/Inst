import {Control, set, useForm} from 'react-hook-form';
import {Alert, Text, View} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useState} from 'react';
import {signUp} from 'aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';
import {SignUpScreenNavigationProp} from '../../../navigation/types';

type SignUpParameters = {
    fullname: string;
    username: string;
    email: string;
    password: string;
    repeatPassword?: string;
};

const SignUpScreen = () => {
    const {control, handleSubmit, getValues, setError, watch} =
        useForm<SignUpParameters>({
            defaultValues: {
                fullname: '',
                username: '',
                email: '',
                password: '',
                repeatPassword: '',
            },
        });

    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation<SignUpScreenNavigationProp>();

    const allFieldsFilled = watch([
        'fullname',
        'username',
        'email',
        'password',
        'repeatPassword',
    ]);

    const handleSignUp = async ({
        fullname,
        username,
        email,
        password,
    }: SignUpParameters) => {
        if (loading) return;
        try {
            setLoading(true);
            const {isSignUpComplete} = await signUp({
                username,
                password,
                options: {
                    userAttributes: {
                        ...(fullname && {name: fullname}),
                        ...(email && {email}),
                        phone_number: '+1234567890',
                    },
                    // optional
                    autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
                },
            });
            console.log('Sign up successful', isSignUpComplete);
            navigation.navigate('ConfirmSignUp', {username});
        } catch (error: any) {
            console.log('error signing up:', error);
            Alert.alert('Error Signing Up', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View
            style={{
                flex: 1,
            }}>
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
                    Sign Up
                </Text>
                <FormInput
                    name="fullname"
                    placeholder="Full Name"
                    control={control as Control<SignUpParameters, object>}
                    rules={{
                        required: {
                            value: true,
                            message: 'Please enter your full name',
                        },
                    }}
                />

                <FormInput
                    name="username"
                    placeholder="Username"
                    control={control as Control<SignUpParameters, object>}
                    rules={{
                        required: {
                            value: true,
                            message: 'Username is required',
                        },
                        minLength: {
                            value: 8,
                            message: 'Username must have at least 8 characters',
                        },
                    }}
                />

                <FormInput
                    name="email"
                    placeholder="Email"
                    control={control as Control<SignUpParameters, object>}
                    rules={{
                        required: {
                            value: true,
                            message: 'Email is required',
                        },
                        // add regex for email
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    }}
                />

                <FormInput
                    name="password"
                    placeholder="Password"
                    control={control as Control<SignUpParameters, object>}
                    rules={{
                        required: {
                            value: true,
                            message: 'Password is required',
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                            message:
                                'Password must contain at least 6 characters: 1 number, 1 lowercase letter, and 1 uppercase letter',
                        },
                    }}
                    secureTextEntry
                />

                <FormInput
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    control={control as Control<SignUpParameters, object>}
                    rules={{
                        required: {
                            value: true,
                            message: 'Required',
                        },
                        validate: (value: any, formValues: any) =>
                            value === getValues().password ||
                            'The passwords do not match',
                    }}
                    secureTextEntry
                />
                {/* Button */}
                <CustomButton
                    title={!loading ? 'Register' : 'Signing You Up...'}
                    onPress={handleSubmit(handleSignUp)}
                    type="primary"
                    disabled={Object.values(allFieldsFilled).some(
                        value => !value,
                    )}
                />
            </View>
        </View>
    );
};

export default SignUpScreen;
