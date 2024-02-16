import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {size, weight} from '../../theme/fonts';
import {IFeedPost} from '../../types/models';
import Comment from '../Comment';
import ImageCarousel from '../ImageCarousel';
import VideoPlayer from '../VideoPlayer';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

interface IFeedPostProps {
    post: IFeedPost;
    isVisible: boolean;
    activePostId: string | null;
}

export type RootStackParamList = {
    Profile: {username: string} | undefined;
};

const convertDate = (date: string) => {
    const dateObj = new Date(date);
    const currentDate = new Date();
    const diff = currentDate.getTime() - dateObj.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    if (hours < 24) {
        return `${hours} hours ago`;
    }
    return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const FeedPost = ({post, isVisible}: IFeedPostProps) => {
    // extract each field from the Post object
    const {
        id,
        createdAt,
        imageUrls,
        videoUrl,
        description,
        user,
        numberOfComments,
        numberOfLikes,
        comments,
    } = post;

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [numberOfLinesToDisplay, setNumberOfLinesToDisplay] =
        useState<number>(3);

    const [isLiked, setIsLiked] = useState<boolean>(post.isLiked);

    return (
        <View style={styles.container}>
            {/* Header - round_icon, name, 3 dots */}
            <View style={styles.headerContainer}>
                <Pressable
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    // activeOpacity={0.8}
                    onPress={() =>
                        // NOTE: We send the username as a route param to the ProfileScreen
                        navigation.navigate('Profile', {username: user.username})
                    }>
                    <Image
                        source={{
                            uri: user.avatarUrl,
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.avatarName}>{user.username}</Text>
                </Pressable>
                <AntDesign
                    style={{marginLeft: 'auto', marginHorizontal: 10}}
                    name="ellipsis1"
                    size={30}
                />
            </View>

            {/* Image/Video - rectangle */}
            {videoUrl ? (
                <VideoPlayer videoUrl={videoUrl} isPlaying={isVisible} />
            ) : (
                imageUrls && (
                    <ImageCarousel
                        imageUrls={imageUrls as string[]}
                        setIsLiked={setIsLiked}
                    />
                )
            )}

            {/* BottomIcons - heart, comments, share, save */}
            <View style={styles.bottomContainer}>
                <View style={styles.bottomIconContainer}>
                    <View style={styles.leftBottomIconContainer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                setIsLiked(!isLiked);
                            }}>
                            <AntDesign
                                name={isLiked ? 'heart' : 'hearto'}
                                size={27}
                                color={isLiked ? 'red' : 'black'}
                            />
                        </TouchableOpacity>
                        <AntDesign name="message1" size={27} />
                        <Feather name="send" size={27} />
                    </View>
                    <Feather name="bookmark" size={27} />
                </View>

                {/* Liked by abc and 46 others */}
                <Text style={styles.likedByText}>
                    Liked by{' '}
                    <Text style={{fontWeight: weight.bold}}>
                        {user.username}
                    </Text>{' '}
                    and{' '}
                    <Text style={{fontWeight: weight.bold}}>
                        {numberOfLikes} others
                    </Text>
                </Text>

                {/* name - username and description */}
                <Pressable
                    style={styles.descriptionContainer}
                    onPress={() => setNumberOfLinesToDisplay(0)}>
                    <Text
                        style={{
                            fontWeight: weight.medium,
                            lineHeight: 20,
                            fontSize: size.md,
                        }}
                        numberOfLines={numberOfLinesToDisplay}>
                        <Text style={{fontWeight: weight.bold}}>
                            {user.username}{' '}
                        </Text>
                        {description}
                    </Text>
                </Pressable>

                {/* Text - View x comments */}
                <Text style={styles.viewAllCommentsText}>
                    View {numberOfComments} comments
                </Text>

                {/* Comments list  */}
                <View style={styles.commentsContainer}>
                    {comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </View>

                {/* Post date */}
                <Text style={styles.postedDateText}>
                    {convertDate(createdAt)}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        // flex: 1,
    },
    avatar: {width: 50, height: 50, borderRadius: 25, marginHorizontal: 5},
    avatarName: {
        fontWeight: weight.semi,
        fontSize: size.xmd,
        marginHorizontal: 10,
    },
    postImage: {
        marginTop: 10,
        width: '100%',
        height: 400,
    },
    bottomContainer: {
        paddingHorizontal: 10,
        flexGrow: 1,
        gap: 7,
        // backgroundColor: 'lightgrey',
    },
    bottomIconContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
    },
    leftBottomIconContainer: {
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between',
        gap: 15,
    },
    likedByText: {
        fontWeight: weight.semi,
        fontSize: size.md,
    },
    descriptionContainer: {
        flexDirection: 'row',
    },
    viewAllCommentsText: {
        marginTop: 5,
        color: 'grey',
        fontWeight: weight.semi,
        fontSize: size.md,
    },
    commentsContainer: {
        gap: 7,
    },
    postedDateText: {
        color: 'grey',
        fontWeight: weight.semi,
        marginTop: 10,
    },
});

export default FeedPost;
