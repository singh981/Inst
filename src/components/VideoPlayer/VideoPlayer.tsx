import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';

interface IVideoPlayer {
    videoUrl: string;
}

const VideoPlayer = ({videoUrl}: IVideoPlayer) => {
    const [paused, setPaused] = useState<boolean>(false);
    const [muted, setMuted] = useState<boolean>(true);

    const {width} = Dimensions.get('window');

    return (
        <View
            style={{
                width,
                // aspectRatio: 16 / 9,
                // backgroundColor: 'blue',
            }}>
            <Video
                source={{uri: videoUrl}} // Can be a URL or a local file.
                style={styles.video}
                paused={paused}
                resizeMode="cover"
                repeat
                muted={muted}
            />
            <TouchableOpacity
                style={styles.playPauseButton}
                onPress={() => setPaused(!paused)}>
                {paused && <Icon name={'play'} size={65} color="white" />}
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.muteButton, !muted && {right: 7}]}
                onPress={() => setMuted(!muted)}>
                <Icon
                    name={muted ? 'volume-off' : 'volume-up'}
                    size={30}
                    color="#FFF"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        aspectRatio: 16 / 9,
    },
    video: {
        // position: 'absolute',
        width: '100%',
        aspectRatio: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    playPauseButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        //     bottom: 10,
        //     left: 10,
    },
    muteButton: {
        position: 'absolute',
        bottom: 10,
        right: 22,
        opacity: 0.8,
    },
});

export default VideoPlayer;
