import {Controller, Control} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface FormInputData {
    fullname?: string;
    username: string;
    email?: string;
    password: string;
    repeatPassword?: string;
}

interface IFormInputProps {
    name: keyof FormInputData;
    placeholder: string;
    control: Control<T, object>;
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
