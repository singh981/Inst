import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {size, weight} from './src/theme/fonts';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header - round_icon, name, 3 dots */}
            <View style={styles.headerContainer}>
                <Image
                    source={{
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
                    }}
                    style={styles.avatar}
                />
                <Text style={styles.avatarName}>Username</Text>
                <AntDesign
                    style={{marginLeft: 'auto', marginHorizontal: 10}}
                    name="ellipsis1"
                    size={30}
                />
            </View>

            {/* Image - rectangle */}
            <View style={styles.postImage}>
                <Image
                    source={{
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
                    }}
                    style={{width: '100%', aspectRatio: 1}}
                />
            </View>

            {/* BottomIcons - heart, comments, share, save */}
            <View style={styles.bottomContainer}>
                <View style={styles.bottomIconContainer}>
                    <View style={styles.leftBottomIconContainer}>
                        <AntDesign name="hearto" size={27} />
                        <AntDesign name="message1" size={27} />
                        <Feather name="send" size={27} />
                    </View>
                    <Feather name="bookmark" size={27} />
                </View>

                {/* Liked by abc and 46 others */}
                <Text style={styles.likedByText}>
                    Liked by <Text style={{fontWeight: weight.bold}}>abc</Text>{' '}
                    and <Text style={{fontWeight: weight.bold}}>46 others</Text>
                </Text>

                {/* name - username and description */}
                <View style={styles.descriptionContainer}>
                    <Text
                        style={{
                            fontWeight: weight.medium,
                            lineHeight: 20,
                            fontSize: size.md,
                        }}
                        numberOfLines={0}>
                        <Text style={{fontWeight: weight.bold}}>Username </Text>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s.
                    </Text>
                </View>

                {/* Text - View 11 comments */}
                <Text style={styles.viewAllCommentsText}>View 11 comments</Text>

                {/* Comments list  */}
                <View style={styles.commentsContainer}>
                    <Text style={styles.commentText}>
                        Username{' '}
                        <Text style={{fontWeight: weight.medium}}>
                            is simply dummy text of the printing and typesetting
                        </Text>
                    </Text>
                    <AntDesign
                        name="hearto"
                        size={15}
                        style={{
                            paddingTop: 3,
                        }}
                    />
                </View>
                {/* Post date */}
                <Text style={styles.postedDateText}>2 hours ago</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        // flex: 1,
    },
    avatar: {width: 50, height: 50, borderRadius: 25, marginHorizontal: 5},
    avatarName: {
        fontWeight: weight.semi,
        fontSize: size.xmd,
        marginHorizontal: 10,
    },
    postImage: {
        marginTop: 10,
        width: '100%',
        height: 400,
    },
    bottomContainer: {
        paddingHorizontal: 10,
        flexGrow: 1,
        gap: 7,
        // backgroundColor: 'lightgrey',
    },
    bottomIconContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
    },
    leftBottomIconContainer: {
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between',
        gap: 15,
    },
    likedByText: {
        fontWeight: weight.semi,
        fontSize: size.md,
    },
    descriptionContainer: {
        flexDirection: 'row',
    },
    viewAllCommentsText: {
        marginTop: 5,
        color: 'grey',
        fontWeight: weight.semi,
        fontSize: size.md,
    },
    commentsContainer: {
        flexDirection: 'row',
        // alignItems: '',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    commentText: {
        fontWeight: weight.bold,
        fontSize: size.md,
        // backgroundColor: 'yellow',
        marginRight: 0,
    },
    postedDateText: {
        color: 'grey',
        fontWeight: weight.semi,
        marginTop: 10,
    },
});

export default App;
