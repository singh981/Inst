import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    IProfileUserPost,
    IProfileUserPostMultipleImages,
    IProfileUserPostSingleImage,
} from '../../types/models';

interface IFeedGridViewProps {
    posts: IProfileUserPost[];
}

const FeedGridView = ({posts}: IFeedGridViewProps) => (
    <View style={styles.postsContainer}>
        <FlatList
            data={posts}
            renderItem={({
                item,
                index,
            }: {
                item:
                    | IProfileUserPostSingleImage
                    | IProfileUserPostMultipleImages;
                index: number;
            }) => {
                let style;
                if (index % 3 === 0) {
                    style = styles.imageLeft;
                } else if (index % 3 === 1) {
                    style = styles.imageMiddle;
                } else {
                    style = styles.imageRight;
                }
                return (
                    <View
                        style={[
                            style,
                            {
                                marginBottom: 2,
                                position: 'relative',
                                borderRadius: 3,
                                overflow: 'hidden',
                            },
                        ]}>
                        <Image
                            source={{
                                uri:
                                    'imageUrls' in item
                                        ? item.imageUrls[0]
                                        : item.imageUrl,
                            }}
                            style={{flex: 1, aspectRatio: 1}}
                        />
                        {'imageUrls' in item && (
                            <MaterialIcons
                                name="collections"
                                size={22}
                                color="white"
                                style={{position: 'absolute', top: 5, right: 5}}
                            />
                        )}
                    </View>
                );
            }}
            numColumns={3}
            keyExtractor={({id}) => id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 250}} // adjust this value as needed
        />
    </View>
);

const styles = StyleSheet.create({
    postsContainer: {
        width: '100%',
        marginTop: 20,
    },
    imageLeft: {
        flex: 1,
        aspectRatio: 1,
        marginRight: 2,
        maxWidth: Dimensions.get('window').width / 3 - 2,
    },
    imageMiddle: {
        flex: 1,
        aspectRatio: 1,
        marginHorizontal: 1,
        maxWidth: Dimensions.get('window').width / 3 - 2,
    },
    imageRight: {
        flex: 1,
        aspectRatio: 1,
        marginLeft: 2,
        maxWidth: Dimensions.get('window').width / 3 - 2,
    },
});

export default FeedGridView;
