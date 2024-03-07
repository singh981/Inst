import {useContext, useEffect, useState} from 'react';
import {
    Alert,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {generateClient} from 'aws-amplify/api';

// Context
import {AuthContext} from '../../context/AuthContext';

// Types
import {CommentsScreenRouteProp} from '../../navigation/types';

// Components
import CommentInput from './CommentInput'; // import the new component
import Comment from '../../components/Comment';

// GraphQL API
import {Comment as CommentType} from '../../API';
import {createComment} from '../../graphql/mutations';
import {onCreateComment} from '../../graphql/subscriptions';

const CommentsScreen = () => {
    const route = useRoute<CommentsScreenRouteProp>();
    const {postId, comments: commentsFromDynamoDb} = route.params;

    const {user} = useContext(AuthContext) || {};

    const [comments, setComments] = useState<CommentType[] | []>(
        commentsFromDynamoDb.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);

            // Sort in descending order
            return dateB.getTime() - dateA.getTime();
        }),
    );

    const client = generateClient();

    useEffect(() => {
        // subscribe to new comments and update the state
        const createSub = client.graphql({query: onCreateComment}).subscribe({
            next: ({data}) => {
                const newComment: CommentType = {
                    ...data.onCreateComment,
                    post: {
                        ...data.onCreateComment.post,
                        user: data.onCreateComment.user,
                    },
                };
                setComments((prevComments: CommentType[] | []) => [
                    newComment,
                    ...prevComments,
                ]);
            },
            error: error => console.warn(error),
        });

        return () => {
            createSub.unsubscribe();
        };
    }, []);

    const handlePost = async (commentText: string) => {
        // post new comment to the database
        try {
            await client.graphql({
                query: createComment,
                variables: {
                    input: {
                        postID: postId,
                        userID: user?.id as string,
                        numberOfLikes: 0,
                        comment: commentText,
                    },
                },
            });
        } catch (e) {
            console.error('CommentsScreen - PostError', e);
            Alert.alert('Error', 'Failed to add new comment');
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            {comments.length != 0 && (
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
