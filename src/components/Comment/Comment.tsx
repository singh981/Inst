import {
    Image,
    Text,
    TouchableOpacity,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {size, weight} from '../../theme/fonts';
import {IComment} from '../../types/models';
import {useState} from 'react';

const getDaysOld = (createdAt: string) => {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);

    const diffInTime = currentDate.getTime() - createdDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    return `${diffInDays}d`;
};

const Comment = ({
    comment,
    showDetailComment = false,
}: {
    comment: IComment;
    showDetailComment?: boolean;
}) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const {id, user, comment: commentText, createdAt, numberOfLikes} = comment;
    return (
        <View style={styles.commentContainer}>
            {showDetailComment && (
                <Image
                    source={{
                        uri: user.avatarUrl,
                    }}
                    style={{width: 40, aspectRatio: 1, borderRadius: 25}}
                />
            )}
            <View
                style={[
                    styles.commentTextContainer,
                    {maxWidth: showDetailComment ? '75%' : '90%'},
                ]}>
                <Text>
                    <Text style={styles.commentText}>{user.username}</Text>{' '}
                    <Text
                        style={[
                            styles.commentText,
                            {fontWeight: weight.medium},
                        ]}>
                        {commentText}
                    </Text>
                </Text>
                {showDetailComment && (
                    <View style={styles.bottomReplyContainer as ViewProps}>
                        <Text style={styles.bottomReplyText}>
                            {getDaysOld(createdAt as string)}
                        </Text>
                        <Text style={styles.bottomReplyText}>
                            {numberOfLikes} likes
                        </Text>
                        <Text style={styles.bottomReplyText}>Reply</Text>
                    </View>
                )}
            </View>

            <View style={{marginLeft: 'auto'}}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        setIsLiked(!isLiked);
                    }}>
                    <AntDesign
                        name={isLiked ? 'heart' : 'hearto'}
                        size={15}
                        color={isLiked ? 'red' : 'black'}
                        style={{
                            padding: 10,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    commentContainer: {
        flexDirection: 'row' as ViewStyle['flexDirection'],
        justifyContent: 'space-between' as ViewStyle['justifyContent'],
        alignItems: 'center' as ViewStyle['alignItems'],
        gap: 5,
    },
    commentTextContainer: {
        maxWidth: '90%' as ViewStyle['maxWidth'],
    },
    commentText: {fontSize: size.md, fontWeight: weight.bold},
    bottomReplyContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 3,
        gap: 10,
    },
    bottomReplyText: {
        fontSize: size.default,
        fontWeight: weight.medium,
        color: 'gray',
    },
    likeButton: {
        // padding: 10,
        paddingTop: 0,
        backgroundColor: 'yellow',
    },
};

export default Comment;
