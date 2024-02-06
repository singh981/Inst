import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

interface IImageCarousel {
    imageUrls: string[];
    setIsLiked: Function;
}

const ImageCarousel = ({imageUrls, setIsLiked}: IImageCarousel) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Timer logic
    const timer = useRef<NodeJS.Timeout | null>(null);

    // NOTE: FlatList width depends on the underlying children width
    const {width} = Dimensions.get('window');

    const handleImageDoublePress = () => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
            setIsLiked(true);
        } else {
            timer.current = setTimeout(() => {
                timer.current = null;
            }, 300); // 300ms delay for double press
        }
    };

    const renderItem = ({item}: any) => {
        return (
            <TouchableWithoutFeedback onPress={handleImageDoublePress}>
                <Image
                    source={{uri: item}}
                    // NOTE: Seeting the <Image> width to '100%' will not work as Flatlist width is not set. Hence there is a circular dependency
                    style={{width, aspectRatio: 1, resizeMode: 'cover'}}
                    onError={error =>
                        console.log('error', error.nativeEvent.error)
                    }
                />
            </TouchableWithoutFeedback>
        );
    };

    const renderPagination = () => (
        <View style={styles.pagination}>
            {imageUrls.map((_, i) => (
                <View
                    key={i}
                    style={[styles.dot, activeIndex === i && styles.activeDot]}
                />
            ))}
        </View>
    );

    return (
        <View
            style={{
                position: 'relative',
                width,
            }}>
            <FlatList
                data={imageUrls}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={imageUrls.length > 1}
                keyExtractor={(item, index) => index.toString()}
                onScroll={({nativeEvent}) => {
                    const index = Math.round(
                        nativeEvent.contentOffset.x /
                            nativeEvent.layoutMeasurement.width,
                    );
                    setActiveIndex(index);
                }}
                scrollEventThrottle={16}
            />
            {imageUrls.length > 1 && renderPagination()}
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        margin: 4,
    },
    activeDot: {
        backgroundColor: 'white',
    },
});

export default ImageCarousel;
