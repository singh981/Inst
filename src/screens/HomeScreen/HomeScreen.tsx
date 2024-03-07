import React, {useEffect, useRef, useState} from 'react';
import {FlatList, FlatListProps, SafeAreaView, StyleSheet} from 'react-native';
import FeedPost from '../../components/FeedPost';
import {Post} from '../../API';
import {GraphQLResult, generateClient} from 'aws-amplify/api';

const listPosts = /* GraphQL */ `
    query ListPosts {
        listPosts {
            items {
                id
                createdAt
                imageUrls
                videoUrl
                description
                numberOfLikes
                isLiked
                userID
                user {
                    username
                    avatarUrl
                }
                comments {
                    items {
                        comment
                        createdAt
                        numberOfLikes
                        user {
                            username
                            avatarUrl
                        }
                    }
                }
            }
            nextToken
            __typename
        }
    }
`;

const HomeScreen = () => {
    const [activePostId, setActivePostId] = useState<string | null>(null);
    const [posts, setPosts] = useState<Post[] | []>([]);

    const client = generateClient();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = (await client.graphql({
                    query: listPosts,
                })) as GraphQLResult<any>;
                // console.log(posts.data.listPosts.items[0]);
                setPosts(posts.data.listPosts.items);
            } catch (e) {
                console.error(e);
            }
        };
        fetchPosts();
    }, []);

    const onViewableItemsChangedRef = useRef<
        FlatListProps<Post>['onViewableItemsChanged']
    >(viewableItems => {
        if (viewableItems.viewableItems.length > 0) {
            setActivePostId(viewableItems.viewableItems[0].item.id);
        }
    });

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <FlatList
                data={posts}
                keyExtractor={post => post.id}
                renderItem={({item: post}) => (
                    <FeedPost
                        post={post}
                        activePostId={activePostId}
                        isVisible={activePostId === post.id}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 20,
                }}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onViewableItemsChangedRef.current}
            />
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
});

export default HomeScreen;
