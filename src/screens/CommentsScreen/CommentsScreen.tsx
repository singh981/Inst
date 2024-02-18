import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import posts from '../../assets/data/posts.json';
import Comment from '../../components/Comment';

import CommentInput from './CommentInput'; // import the new component
import {useEffect, useState} from 'react';
import {IComment, IFeedPost} from '../../types/models';

import {useRoute} from '@react-navigation/native';

const getAllCommentsForParticularPost: any = (postId: number) => {
    return posts.find((post: IFeedPost) => post.id === postId)?.comments || [];
};

const CommentsScreen = () => {
    const route = useRoute();
    const postId = (route.params as {postId?: string})?.postId;

    const [comments, setComments] = useState<IComment[] | []>([]);

    useEffect(() => {
        if (postId) {
            setComments(getAllCommentsForParticularPost(parseInt(postId)));
        }
    }, []);

    const handlePost = (comment: string) => {
        // Create a new comment object
        const newComment: IComment = {
            id: Math.random(),
            comment,
            createdAt: new Date().toISOString(),
            numberOfLikes: 0,
            user: {
                id: Math.random(),
                username: 'Vadim_Savin',
                avatarUrl:
                    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
            },
        };

        setComments([newComment, ...comments]);
    };

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            {comments.length && (
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
            )}
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
    commentInput: {
        width: '100%',
    },
});

export default CommentsScreen;
