import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import posts from './src/assets/data/posts.json';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeScreen posts={posts} />
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
