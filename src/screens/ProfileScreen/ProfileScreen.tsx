import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {size} from '../../theme/fonts';
import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView';
import {IProfileUser} from '../../types/models';

const ProfileScreen = () => {
    const {
        name,
        bio,
        avatarUrl,
        posts,
        numberOfFollowers,
        numberOfFollowing,
    }: IProfileUser = user;

    return (
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
                        <Text style={styles.statNumber}>{posts.length}</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>
                            {numberOfFollowers}
                        </Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>
                            {numberOfFollowing}
                        </Text>
                        <Text style={styles.statLabel}>Following</Text>
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
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Share Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Posts */}
            <FeedGridView posts={posts} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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