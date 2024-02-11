import {
    Button,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';
import {
    launchImageLibrary,
    ImageLibraryOptions,
    ImagePickerResponse,
    Asset,
} from 'react-native-image-picker';

import {IProfileUser} from '../../types/models';
import {size, weight} from '../../theme/fonts';
import colors from '../../theme/color';

import user from '../../assets/data/user.json';
import {useEffect, useState} from 'react';

const WEBSITE_REGEX =
    /^(https?:\/\/)?(([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)$/i;

// NOTE: Remember 'Pick' is a utility type that constructs a type by picking the set of properties K from T
type IEditableUser = Pick<
    IProfileUser,
    'name' | 'username' | 'website' | 'bio'
>;

interface ICustomInputProps {
    name: 'name' | 'username' | 'website' | 'bio';
    control: Control<IEditableUser, object>;
    placeholder: string;
    label: string;
    rules?: object;
    multiline?: boolean;
}

const CustomInput = ({
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

const EditProfileScreen = () => {
    const {name, username, bio, avatarUrl}: IProfileUser = user;
    const [selectedImageUrl, setSelectedImageUrl] = useState<
        undefined | string
    >(avatarUrl);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IEditableUser>({
        defaultValues: {
            name,
            username,
            website: '',
            bio,
        },
    });

    const onSubmit = (data: IEditableUser) => {
        // TBD
        console.log('Form Submitted : ', data);
    };

    // console.log('errors', errors);
    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(
            options,
            ({
                didCancel,
                errorCode,
                errorMessage,
                assets,
            }: ImagePickerResponse) => {
                if (assets) {
                    setSelectedImageUrl(assets[0].uri);
                } else if (didCancel) {
                    console.log('User cancelled image picker');
                } else if (errorCode) {
                    console.log('erroCode', errorCode);
                } else if (errorMessage) {
                    console.log('errorMessage', errorMessage);
                }
            },
        );
    };

    return (
        <View style={styles.container}>
            {/* Profile Photo */}
            <Image
                source={{
                    uri: selectedImageUrl,
                }}
                style={styles.profilePhoto}
            />

            {/* Change Profile Photo Button */}
            <View>
                <TouchableOpacity
                    onPress={openImagePicker}
                    style={{...styles.changeProfilePhotoButtonContainer}}>
                    <Text style={styles.changeProfilePhotoButtonText}>
                        Change Profile Photo
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
                {/* Name */}
                <CustomInput
                    name="name"
                    control={control}
                    placeholder="name"
                    label="Name"
                    rules={{
                        required: {value: true, message: 'Name is required'},
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters long',
                        },
                    }}
                    // value={value}
                />

                {/* Username */}
                <CustomInput
                    name="username"
                    label="Username"
                    control={control}
                    placeholder="username"
                    rules={{
                        required: {
                            value: true,
                            message: 'Username is required',
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters long',
                        },
                    }}
                />

                {/* Website  */}
                <CustomInput
                    name="website"
                    label="Website"
                    control={control}
                    rules={{
                        pattern: {
                            value: WEBSITE_REGEX,
                            message: 'Invalid website',
                        },
                    }}
                    placeholder="website"
                />

                {/* Bio */}
                <CustomInput
                    name="bio"
                    label="Bio"
                    control={control}
                    placeholder="bio"
                    rules={{
                        required: {
                            value: true,
                            message: 'Bio is required',
                        },
                        minLength: {
                            value: 20,
                            message: 'Atleast 20 characters long',
                        },
                        maxLength: {
                            value: 150,
                            message: 'Max 150 characters',
                        },
                    }}
                    multiline
                />
            </View>

            {/* Save */}
            <Button
                title="Save"
                onPress={handleSubmit(onSubmit)}
                color={colors.blue}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    changeProfilePhotoButtonContainer: {
        width: Dimensions.get('window').width - 40,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    changeProfilePhotoButtonText: {
        color: colors.blue,
        fontSize: size.md,
        fontWeight: weight.medium,
    },
    formContainer: {
        gap: 30,
        padding: 20,
        width: '100%',
    },
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
        color: colors.lightGrey,
        width: '30%',
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
    customInputError: {
        color: colors.error,
    },
});

export default EditProfileScreen;
