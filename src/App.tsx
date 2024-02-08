import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CommentsScreen from './screens/CommentsScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import posts from './assets/data/posts.json';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <HomeScreen posts={posts} /> */}
            {/* <CommentsScreen /> */}
            <ProfileScreen />
            {/* <EditProfileScreen /> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: 'yellow',
    },
});

export default App;
