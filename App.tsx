import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import FeedPost from './src/components/FeedPost';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FeedPost />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
