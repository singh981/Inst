import {Alert, Text, View} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {Control, useForm} from 'react-hook-form';
import {AuthError, confirmResetPassword} from 'aws-amplify/auth';
import {useRoute} from '@react-navigation/native';
import {
    NewPasswordScreenNavigationProp,
    NewPasswordScreenRouteProp,
} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';

interface NewPasswordParameters {
    username: string;
    code: string;
    password: string;
}

const NewPasswordScreen = () => {
    const route = useRoute<NewPasswordScreenRouteProp>();

    const navigation = useNavigation<NewPasswordScreenNavigationProp>();

    const {control, handleSubmit, getValues, setError, watch} =
        useForm<NewPasswordParameters>({
            defaultValues: {
                username: route.params?.username,
                code: '',
                password: '',
            },
        });

    const allFieldsFilled = watch(['code', 'password']);

    const handleConfirmResetPassword = async ({
        username,
        code: confirmationCode,
        password: newPassword,
    }: NewPasswordParameters) => {
        try {
            await confirmResetPassword({
                username,
                confirmationCode,
                newPassword,
            });

            console.log('Password reset successfully');
            navigation.navigate('SignIn');
        } catch (error: AuthError | any) {
            Alert.alert('Error Confirming Reset Password', error.message);
            console.log('Error confirming reset password', error);
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
                    Enter New Password
                </Text>
                <FormInput
                    name="username"
                    placeholder="Username"
                    control={control as Control<NewPasswordParameters, object>}
                    disabled={true}
                />
                <FormInput
                    name="code"
                    placeholder="Enter code"
                    control={control as Control<NewPasswordParameters, object>}
                    rules={{
                        required: {
                            value: true,
                            message: 'Code is required',
                        },
                        pattern: {
                            value: /^\S*$/,
                            message: 'Cannot contain spaces',
                        },
                    }}
                />

                <FormInput
                    name="password"
                    placeholder="Password"
                    control={control as Control<NewPasswordParameters, object>}
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

                {/* Button */}
                <CustomButton
                    title={'Reset Password'}
                    onPress={handleSubmit(handleConfirmResetPassword)}
                    type="primary"
                    disabled={Object.values(allFieldsFilled).some(
                        value => !value,
                    )}
                />
            </View>
        </View>
    );
};

export default NewPasswordScreen;
