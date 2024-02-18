import {
    Button,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    launchImageLibrary,
    ImageLibraryOptions,
    ImagePickerResponse,
} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';

import CustomInputForm from './CustomInputForm';
import {IProfileUser} from '../../types/models';

import {size, weight} from '../../theme/fonts';
import colors from '../../theme/color';

import users from '../../assets/data/users.json';
import {useEffect, useState} from 'react';

type IEditableUser = Pick<
    IProfileUser,
    'name' | 'username' | 'website' | 'bio'
>;

const WEBSITE_REGEX =
    /^(https?:\/\/)?(([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)$/i;

const EditProfileScreen = () => {
    const {name, username, bio, avatarUrl}: IProfileUser =
        users[0] as IProfileUser;
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
        <SafeAreaView style={styles.safeAreaViewContainer}>
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
                    <CustomInputForm
                        name="name"
                        control={control}
                        placeholder="name"
                        label="Name"
                        rules={{
                            required: {
                                value: true,
                                message: 'Name is required',
                            },
                            minLength: {
                                value: 3,
                                message: 'Atleast 3 characters long',
                            },
                        }}
                    />

                    {/* Username */}
                    <CustomInputForm
                        name="username"
                        control={control}
                        label="Username"
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
                    <CustomInputForm
                        name="website"
                        control={control}
                        label="Website"
                        rules={{
                            pattern: {
                                value: WEBSITE_REGEX,
                                message: 'Invalid website',
                            },
                        }}
                        placeholder="website"
                    />

                    {/* Bio */}
                    <CustomInputForm
                        name="bio"
                        control={control}
                        label="Bio"
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        top: 10,
    },
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
});

export default EditProfileScreen;
