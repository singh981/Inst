import {Text, View, ViewStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {size, weight} from '../../theme/fonts';
import {IComment} from '../../types/models';

const Comment = ({comment}: {comment: IComment}) => {
    return (
        <View style={styles.commentContainer}>
            <View style={styles.commentTextContainer}>
                <Text>
                    <Text style={styles.commentText}>
                        {comment.user.username}
                    </Text>{' '}
                    <Text
                        style={[
                            styles.commentText,
                            {fontWeight: weight.medium},
                        ]}>
                        {comment.comment}
                    </Text>
                </Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
                <AntDesign
                    name="hearto"
                    size={15}
                    style={{
                        paddingTop: 3,
                    }}
                />
            </View>
        </View>
    );
};

const styles = {
    commentContainer: {
        flexDirection: 'row' as ViewStyle['flexDirection'],
        justifyContent: 'space-between' as ViewStyle['justifyContent'],
        gap: 5,
    },
    commentTextContainer: {
        maxWidth: '90%' as ViewStyle['maxWidth'],
    },
    commentText: {fontSize: size.md, fontWeight: weight.bold},
};

export default Comment;
