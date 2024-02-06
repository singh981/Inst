import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import {IPost} from '../../types/models';

const HomeScreen = ({posts}: {posts: IPost[]}) => (
    <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            gap: 20,
        }}
    />
);

export default HomeScreen;
