import { useContext } from 'react';
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { signOut } from 'aws-amplify/auth';

// Theme
import { size } from '../../theme/fonts';

// Components
import FeedGridView from '../../components/FeedGridView';
import ApiErrorMessage from '../../components/ApiErrorMessage';

// Navigation
import {
    MyProfileScreenRouteProp,
    ProfileScreenNavigationProp, UserProfileScreenRouteProp,
} from '../../navigation/types';

// Context
import { AuthContext } from '../../context/AuthContext';
import { GET_USER_QUERY } from './queries';
import { useQuery } from '@apollo/client';

const ProfileScreen = () => {

    // TODO: Once we have 'Follow' and 'Message' functionality, we will need to update ProfileScreenNavigationProp
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const route = useRoute<
        UserProfileScreenRouteProp | MyProfileScreenRouteProp
    >();

    const { user: currentCognitoUser } = useContext(AuthContext) || {};

    // NOTE: We never send full objects through the route params.
    // Only identifiers to fetch the object from the server or local storage.
    const isLoggedInUserProfile = route.name === 'Profile';

    const { data, loading, error } = isLoggedInUserProfile
        ? useQuery(GET_USER_QUERY, { variables: { id: currentCognitoUser?.userId } })
        : useQuery(GET_USER_QUERY, { variables: { id: route?.params?.userId } });

    const user = data?.getUser;

    const { name, username, bio, avatarUrl, posts, numberOfFollowers, numberOfFollowing } =
        user || {}; // Add a default empty object if user is undefined

    // console.log('ProfileScreen - posts', posts);

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            {error && <ApiErrorMessage error={{
                title: 'Error fetching user profile.',
                message: error.message,
            }} />}
            {loading && (
                <View style={[
                    styles.container,
                    { justifyContent: 'center', alignItems: 'center' }
                ]}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            )}
            {user &&
                <View style={styles.container}>
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
                        {!isLoggedInUserProfile ? (
                            <>
                                <TouchableOpacity
                                    onPress={() => {
                                        /* TODO: */
                                    }}
                                    style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>
                                        Follow
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        /* TODO: */
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
                                    onPress={async () => await signOut()}
                                    style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>
                                        Logout
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>

                    {/* Posts */}
                    <FeedGridView posts={posts.items ?? []} />
                </View>
            }
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
