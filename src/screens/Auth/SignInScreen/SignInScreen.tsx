import {useForm} from 'react-hook-form';
import {Image, Text, View, SafeAreaView, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {
    signIn,
    signOut,
    getCurrentUser,
    AuthUser,
    fetchAuthSession,
} from 'aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SignInScreenNavigationProp} from '../../../navigation/types';

type SignInData = {
    username: string;
    password: string;
};

const SignInScreen = () => {
    const {control, handleSubmit} = useForm<SignInData>({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation<SignInScreenNavigationProp>();

    const onSubmit = async ({username, password}: SignInData) => {
        setLoading(true);
        try {
            const {
                isSignedIn,
                nextStep: {signInStep},
            } = await signIn({username, password});
            console.log('User Signed In Success', isSignedIn, signInStep);
            if (!isSignedIn && signInStep === 'CONFIRM_SIGN_UP') {
                navigation.navigate('ConfirmSignUp', {username});
            } else if (isSignedIn && signInStep === 'DONE') {
                navigation.navigate('Home');
            }
        } catch (error: any) {
            Alert.alert('Error Signing In', error.message);
        } finally {
            setLoading(false);
        }
    };

    const ForgotPasswordHandler = () => navigation.navigate('ForgotPassword');

    const signUpHandler = () => {
        navigation.navigate('SignUp');
    };

    return (
        // <ScrollView>
        <SafeAreaView
            style={{
                backgroundColor: 'lightgray',
                flex: 1,
            }}>
            <Image
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
                }}
                style={{
                    width: '100%',
                    height: 200,
                }}
            />

            {/* Form */}
            <View
                style={{
                    gap: 20,
                    padding: 20,
                    width: '100%',
                }}>
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
                        onPress={() => signUpHandler()}
                        type="tertiary"
                    />
                </View>
            </View>
        </SafeAreaView>
        // </ScrollView>
    );
};

export default SignInScreen;
