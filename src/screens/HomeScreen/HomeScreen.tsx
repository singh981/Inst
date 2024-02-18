import React, {useRef, useState} from 'react';
import {FlatList, FlatListProps, SafeAreaView, StyleSheet} from 'react-native';
import FeedPost from '../../components/FeedPost';
import {IFeedPost} from '../../types/models';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
    const [activePostId, setActivePostId] = useState<number | null>(null);

    const onViewableItemsChangedRef = useRef<
        FlatListProps<IFeedPost>['onViewableItemsChanged']
    >(viewableItems => {
        if (viewableItems.viewableItems.length > 0) {
            setActivePostId(viewableItems.viewableItems[0].item.id);
        }
    });

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <FlatList
                data={posts}
                keyExtractor={post => post.id.toString()}
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
