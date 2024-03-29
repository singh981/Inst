import React, { useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    FlatListProps,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import FeedPost from '../../components/FeedPost';
import { ListPostsQuery, Post } from '../../API';
import { useQuery } from '@apollo/client';
import { LIST_POSTS_QUERY } from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const HomeScreen = () => {
    const [activePostId, setActivePostId] = useState<string | null>(null);

    const { loading, error, data } = useQuery<ListPostsQuery>(LIST_POSTS_QUERY, {});

    const posts = data?.listPosts?.items || [];

    const onViewableItemsChangedRef = useRef<
        FlatListProps<Post>['onViewableItemsChanged']
    >(viewableItems => {
        if (viewableItems.viewableItems.length > 0) {
            setActivePostId(viewableItems.viewableItems[0].item.id);
        }
    });

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            {error ? (
                <ApiErrorMessage error={{ title: 'Failed to load Posts', message: error.message }} />
            ) : loading ? (
                <ActivityIndicator size="large" color="black" />
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={post => post?.id as string}
                    renderItem={({ item: post }) => (
                        <FeedPost
                            post={post as Post}
                            activePostId={activePostId}
                            isVisible={activePostId === post?.id}
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
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // backgroundColor: 'green',
    },
});

export default HomeScreen;
