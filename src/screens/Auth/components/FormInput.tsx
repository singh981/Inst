import {Controller, Control} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface SignInData {
    username: string;
    password: string;
}

interface IFormInputProps {
    name: keyof SignInData;
    placeholder: string;
    control: Control<SignInData, object>;
    rules: object;
    secureTextEntry?: boolean;
}

const FormInput = ({
    name,
    placeholder,
    control,
    rules,
    secureTextEntry = false,
}: IFormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched, invalid, error},
            }) => (
                <>
                    <View style={styles.container}>
                        <View
                            style={[
                                styles.textInputContainer,
                                error && {borderColor: 'red', borderWidth: 1},
                            ]}>
                            <TextInput
                                placeholder={placeholder}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={{width: '100%'}}
                                secureTextEntry={secureTextEntry}
                            />
                        </View>
                        {error && (
                            <Text style={styles.textInputError}>
                                {error.message}
                            </Text>
                        )}
                    </View>
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 5,
    },
    textInputContainer: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 10,
    },
    textInputError: {
        color: 'red',
        fontSize: 12,
    },
});

export default FormInput;
