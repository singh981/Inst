import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Control, useForm } from 'react-hook-form';
import {
    AuthError,
    resetPassword,
    type ResetPasswordOutput,
} from 'aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';

// Components
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';

// Navigation
import { ForgotPasswordScreenNavigationProp } from '../../../navigation/types';

interface ForgotPasswordParameters {
    username: string;
}

const ForgotPasswordScreen = () => {
    const { control, handleSubmit, getValues, setError, watch } =
        useForm<ForgotPasswordParameters>({
            defaultValues: {
                username: '',
            },
        });

    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

    const allFieldsFilled = watch(['username']);

    const handleResetPassword = async ({
        username,
    }: ForgotPasswordParameters) => {
        try {
            const output = await resetPassword({ username });
            // console.log('Reset Password Output', output);
            handleResetPasswordNextSteps(output);
        } catch (error: AuthError | any) {
            Alert.alert('Error Resetting Password', error.message);
            // console.log(error);
        }
    };

    const handleResetPasswordNextSteps = (output: ResetPasswordOutput) => {
        const { nextStep } = output;
        switch (nextStep.resetPasswordStep) {
            case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
                const codeDeliveryDetails = nextStep.codeDeliveryDetails;
                // navigate to the next screen to collect the confirmation code from the user
                navigation.navigate('NewPassword', {
                    username: getValues('username'),
                });
                Alert.alert(
                    'Reset Password',
                    `A confirmation code has been sent to ${codeDeliveryDetails.destination}`,
                );
                // Collect the confirmation code from the user and pass to confirmResetPassword.
                break;
            case 'DONE':
                console.log('Successfully reset password.');
                break;
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
                    Forgot Password
                </Text>
                <FormInput
                    name="username"
                    placeholder="Username"
                    control={
                        control as Control<ForgotPasswordParameters, object>
                    }
                    rules={{
                        required: {
                            value: true,
                            message: 'Username is required',
                        },
                        minLength: {
                            value: 8,
                            message: 'Username must have at least 8 characters',
                        },
                        // pattern: {
                        //     value: /^\S*$/,
                        //     message: 'Username cannot contain spaces',
                        // },
                    }}
                />

                {/* Button */}
                <CustomButton
                    title={'Send Code'}
                    onPress={handleSubmit(handleResetPassword)}
                    type="primary"
                    disabled={Object.values(allFieldsFilled).some(
                        value => !value,
                    )}
                />
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;
