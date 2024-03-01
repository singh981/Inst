import {Alert, Text, View} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {ConfirmEmailScreenRouteProp} from '../../../navigation/types';
import FormInput from '../components/FormInput';
import {Control, useForm} from 'react-hook-form';
import CustomButton from '../components/CustomButton';
import {confirmSignUp, resendSignUpCode} from 'aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';
import {ConfirmEmailScreenNavigationProp} from '../../../navigation/types';

type ConfirmEmailParameters = {
    username: string;
    code: string;
};

const ConfirmEmailScreen = () => {

    const route = useRoute<ConfirmEmailScreenRouteProp>();
    const navigation = useNavigation<ConfirmEmailScreenNavigationProp>();

    const {control, handleSubmit, getValues, setError, watch} =
        useForm<ConfirmEmailParameters>({
            defaultValues: {
                username: route.params?.username,
                code: '',
            },
        });

    const allFieldsFilled = watch(['code']);

    const onCodeSubmit = async ({username, code}: ConfirmEmailParameters) => {
        try {
            const {isSignUpComplete} = await confirmSignUp({
                username,
                confirmationCode: code,
            });

            console.log('isSignUpComplete', isSignUpComplete);
            isSignUpComplete && navigation.navigate('SignIn');
        } catch (error: any) {
            console.log('error confirming sign up', error);
            Alert.alert('Error confirming sign up', error.message);
        }
    };

    const onResendCode = async ({username}: ConfirmEmailParameters) => {
        const resendSignUpCodeResponse = await resendSignUpCode({username});
        Alert.alert('Code resent', 'Please check your email for the code');
        console.log('resendSignUpCodeResponse', resendSignUpCodeResponse);
    };

    return (
        <View>
            <View
                style={{
                    gap: 20,
                    padding: 20,
                    width: '100%',
                }}>
                <FormInput
                    name="username"
                    placeholder="Username"
                    control={control as Control<ConfirmEmailParameters, object>}
                    disabled={true}
                />
                <FormInput
                    name="code"
                    placeholder="Enter code"
                    control={control as Control<ConfirmEmailParameters, object>}
                />

                <CustomButton
                    title={'Confirm'}
                    onPress={handleSubmit(onCodeSubmit)}
                    type="primary"
                    disabled={Object.values(allFieldsFilled).some(
                        value => !value,
                    )}
                />

                <CustomButton
                    title={'Resend Code'}
                    onPress={handleSubmit(onResendCode)}
                    type="outline"
                />
            </View>
        </View>
    );
};

export default ConfirmEmailScreen;
