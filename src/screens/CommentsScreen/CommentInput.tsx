import {useState} from 'react';
import {Button, Image, StyleSheet, TextInput, View} from 'react-native';
import {size} from '../../theme/fonts';

const CommentInput = ({onPost}: any) => {
    const [text, setText] = useState('');

    const handlePost = () => {
        onPost(text);
        setText('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    source={{
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
                    }}
                    style={{width: 40, aspectRatio: 1, borderRadius: 25}}
                />
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="Write a comment..."
                    style={{flex: 1, fontSize: size.md}}
                    numberOfLines={1}
                />
            </View>
            <Button title="Post" onPress={handlePost} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
        // backgroundColor: 'yellow',
    },
    leftContainer: {
        flexDirection: 'row',
        gap: 10,
        width: '85%',
    },
});

export default CommentInput;
