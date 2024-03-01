import {
    Controller,
    Control,
    RegisterOptions,
    FieldValues,
} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface FormInputData {
    fullname?: string;
    username?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
    code?: string;
}

interface IFormInputProps<T extends FormInputData> {
    name: keyof T;
    placeholder: string;
    control: Control<T>;
    rules?: RegisterOptions;
    secureTextEntry?: boolean;
    defaultValue?: string;
    disabled?: boolean;
}

const FormInput = <T extends FieldValues>({
    name,
    placeholder,
    control,
    rules,

    disabled,
    secureTextEntry = false,
}: IFormInputProps<T>) => {
    return (
        <Controller
            name={name as string}
            control={control as Control<FieldValues>}
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
                                editable={!disabled}
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
