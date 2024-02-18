import {Controller, Control} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {IProfileUser} from '../../types/models';

import colors from '../../theme/color';
import {size, weight} from '../../theme/fonts';

// NOTE: Remember 'Pick' is a utility type that constructs a type by picking the set of properties K from T
type IEditableUser = Pick<
    IProfileUser,
    'name' | 'username' | 'website' | 'bio'
>;

interface ICustomInputProps {
    name: 'name' | 'username' | 'website' | 'bio';
    control?: Control<IEditableUser, object>;
    placeholder: string;
    label: string;
    rules?: object;
    multiline?: boolean;    
    value?: string;
}

const CustomInputForm = ({
    name,
    control,
    placeholder,
    label,
    rules,
    multiline = false,
}: ICustomInputProps) => {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
            }) => {
                // console.log('error', error);
                return (
                    <View style={styles.customInputParentContainer}>
                        <Text style={styles.customInputLabel}>{label}</Text>
                        <View style={styles.customTextInputContainer}>
                            <TextInput
                                placeholder={placeholder}
                                value={value}
                                style={[
                                    styles.customTextInput,
                                    error && {
                                        color: colors.error,
                                        borderBottomColor: colors.error,
                                    },
                                ]}
                                multiline={multiline}
                                onBlur={onBlur}
                                onChangeText={onChange}
                            />
                            {error && (
                                <Text style={styles.customInputError}>
                                    {error && error.message}
                                </Text>
                            )}
                        </View>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    customInputParentContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
    },
    customInputLabel: {
        fontSize: size.xmd,
        fontWeight: weight.medium,
        color: colors.grey,
        width: '30%',
    },
    customInputError: {
        color: colors.error,
    },

    customTextInputContainer: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        // backgroundColor: 'green',
        justifyContent: 'space-between',
    },
    customTextInput: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        width: '60%',
        fontSize: size.xmd,
        paddingBottom: 2,
    },
});

export default CustomInputForm;
