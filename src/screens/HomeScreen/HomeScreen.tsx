import React, {useRef, useState} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import FeedPost from '../../components/FeedPost';
import {IFeedPost} from '../../types/models';

const HomeScreen = ({posts}: {posts: IFeedPost[]}) => {
    const [activePostId, setActivePostId] = useState<string | null>(null);

    const onViewableItemsChangedRef = useRef<
        FlatListProps<IFeedPost>['onViewableItemsChanged']
    >(viewableItems => {
        if (viewableItems.viewableItems.length > 0) {
            setActivePostId(viewableItems.viewableItems[0].item.id);
        }
    });

    return (
        <FlatList
            data={posts}
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => (
                <FeedPost
                    post={item}
                    activePostId={activePostId}
                    isVisible={activePostId === item.id}
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
    );
};

export default HomeScreen;
