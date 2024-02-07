
import { FlatList, Text, View } from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';

const CommentsScreen = () => {
    return (
        <FlatList
            data={comments}
            renderItem={({ item }) => <Comment comment={item} showDetailComment/>}
            contentContainerStyle={{ padding: 5, gap: 15 }}
            showsVerticalScrollIndicator={false}

        />
    );
};

export default CommentsScreen;
