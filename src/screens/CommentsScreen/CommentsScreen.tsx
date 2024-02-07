import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import commentsData from '../../assets/data/comments.json';
import Comment from '../../components/Comment';

import CommentInput from './CommentInput'; // import the new component
import {useState} from 'react';
import {IComment} from '../../types/models';

const CommentsScreen = () => {
    const [comments, setComments] = useState<IComment[]>(
        commentsData as IComment[],
    );

    const handlePost = (comment: string) => {
        // Create a new comment object
        const newComment: IComment = {
            id: Math.random().toString(),
            comment,
            createdAt: new Date().toISOString(),
            numberOfLikes: 0,
            user: {
                id: Math.random().toString(),
                username: 'Vadim_Savin',
                avatarUrl:
                    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
            },
        };

        setComments([newComment, ...comments]);
    };

    return (
        <View>
            <FlatList
                data={comments}
                renderItem={({item}) => (
                    <Comment comment={item} showDetailComment />
                )}
                contentContainerStyle={{padding: 5, gap: 15}}
                showsVerticalScrollIndicator={false}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.commentInput}>
                <CommentInput onPost={handlePost} />
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commentInput: {
        width: '100%',
    },
});

export default CommentsScreen;
