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
import user from '../../assets/data/user.json';
import {IProfileUser} from '../../types/models';
import {size, weight} from '../../theme/fonts';
import React from 'react';

const DisplaySingleUserDetail = ({
    fieldName,
    value,
}: {
    fieldName: string;
    value: string;
}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
            }}>
            <Text
                style={{
                    width: '40%',
                    fontSize: size.xmd,
                    fontWeight: weight.medium,
                    color: 'gray',
                }}>
                {fieldName}
            </Text>
            <TextInput
                value={value}
                style={{
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 1,
                    width: '60%',
                    fontSize: size.xmd,
                    paddingBottom: 8,
                }}
                multiline
            />
            {/* style={{
                    fontSize: size.lg,
                    fontWeight: weight.medium,
                    maxWidth: '60%',
                }}>
                {value}
            </Text> */}
        </View>
    );
};

const EditProfileScreen = () => {
    const {name, username, bio, avatarUrl}: IProfileUser = user;

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: avatarUrl,
                }}
                style={styles.profilePhoto}
            />
            <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Change Profile Photo</Text>
            </TouchableOpacity>
            <View
                style={{
                    gap: 30,
                    padding: 20,
                    width: '100%',
                }}>
                {/* Name */}
                <DisplaySingleUserDetail fieldName={'Name'} value={name} />
                {/* Username */}
                <DisplaySingleUserDetail
                    fieldName={'Username'}
                    value={username}
                />

                {/* Website  */}
                <DisplaySingleUserDetail fieldName={'Website'} value={''} />

                {/* Bio */}
                <DisplaySingleUserDetail fieldName={'Bio'} value={bio} />
            </View>
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
    buttonContainer: {
        width: Dimensions.get('window').width - 40,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'blue',
        fontSize: size.md,
        fontWeight: weight.medium,
    },
});

export default EditProfileScreen;
