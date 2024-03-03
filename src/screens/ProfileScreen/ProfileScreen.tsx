import {useContext, useEffect, useState} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {signOut} from 'aws-amplify/auth';

import {size, weight} from '../../theme/fonts';
import users from '../../assets/data/users.json';
import FeedGridView from '../../components/FeedGridView';
import {IProfileUser} from '../../types/models';
import {
    UserProfileScreenRouteProp,
    MyProfileScreenRouteProp,
    ProfileScreenNavigationProp,
} from '../../navigation/types';
import {AuthContext} from '../../context/AuthContext';

const ProfileScreen = () => {
    // TBD: Once we have 'Follow' and 'Message' functionality, we will need to update ProfileScreenNavigationProp
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const route = useRoute<
        UserProfileScreenRouteProp | MyProfileScreenRouteProp
    >();

    const [user, setUser] = useState<IProfileUser | undefined>(undefined);

    const {logOut} = useContext(AuthContext) || {};

    // const {user: usr, signOut} = useAuthenticator(context => [context.user]);

    // NOTE: We never send full objects through the route params.
    // Only identifiers to fetch the object from the server or local storage.
    const username = route.params?.username;

    useEffect(() => {
        if (username) {
            // get the user from the users array, if not found, use the first user
            const user = users.find(user => user.username === username);
            user && setUser(user);
        } else {
            // get app user info from AWS Cognito
            setUser(users[0]);
        }
    }, []);

    const {name, bio, avatarUrl, posts, numberOfFollowers, numberOfFollowing} =
        user || {}; // Add a default empty object if user is undefined

    const handleSignOut = async () => {
        await signOut();
        logOut && logOut();
    };

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.container}>
                {user ? (
                    <>
                        <View style={styles.profileInfo}>
                            <Image
                                source={{
                                    uri: avatarUrl,
                                }}
                                style={styles.profilePhoto}
                            />
                            <View style={styles.stats}>
                                <View style={styles.stat}>
                                    <Text style={styles.statNumber}>
                                        {posts?.length ?? 0}
                                    </Text>
                                    <Text style={styles.statLabel}>Posts</Text>
                                </View>
                                <View style={styles.stat}>
                                    <Text style={styles.statNumber}>
                                        {numberOfFollowers}
                                    </Text>
                                    <Text style={styles.statLabel}>
                                        Followers
                                    </Text>
                                </View>
                                <View style={styles.stat}>
                                    <Text style={styles.statNumber}>
                                        {numberOfFollowing}
                                    </Text>
                                    <Text style={styles.statLabel}>
                                        Following
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* Name & Bio */}
                        <View style={styles.nameBioContainer}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.bio}>{bio}</Text>
                        </View>

                        {/* Two Buttons - Edit Profile and Share Profile */}
                        <View style={styles.buttonsContainer}>
                            {/* If im on My profile i would like "edit profile" and "share profile" buttons else "follow" and "message" */}
                            {username ? (
                                <>
                                    <TouchableOpacity
                                        onPress={() => {
                                            /* TBD */
                                        }}
                                        style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>
                                            Follow
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            /* TBD */
                                        }}
                                        style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>
                                            Message
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('EditProfile');
                                        }}
                                        style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>
                                            Edit Profile
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleSignOut()}
                                        style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>
                                            Logout
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>

                        {/* Posts */}
                        <FeedGridView posts={posts ?? []} />
                    </>
                ) : (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: size.lg,
                                fontWeight: weight.bold,
                            }}>
                            User not found
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: 'green',
    },
    container: {
        flex: 1,
        width: '100%',
        top: 10,
    },
    profileInfo: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 16,
        color: 'gray',
    },
    nameBioContainer: {
        paddingHorizontal: 10,
    },
    name: {
        fontSize: size.xmd,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: size.md,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20,
        gap: 20,
    },
    buttonContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.3,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default ProfileScreen;
