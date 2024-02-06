import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './src/assets/posts.json';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 20,
                }}
                style={{
                    maxWidth: '100%',
                }}>
                {
                    // render all the posts in posts.json
                    posts.map(post => (
                        <FeedPost key={post.id} post={post} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
});

export default App;
