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
            {/* <ProfileScreen /> */}
            <EditProfileScreen />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: 'green',
    },
});

export default App;
