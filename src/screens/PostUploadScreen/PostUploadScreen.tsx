import {useEffect, useRef, useState} from 'react';
import {
    Button,
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    TouchableWithoutFeedback,
    TouchableHighlight,
    SafeAreaView,
} from 'react-native';
import {
    useCameraPermission,
    useMicrophonePermission,
    useCameraDevice,
    CameraDevice,
    Camera,
    CameraPosition,
} from 'react-native-vision-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import Video from 'react-native-video';
import colors from '../../theme/color';

const PostUploadScreen = () => {
    const camera = useRef<Camera>(null);

    const [isRecording, setIsRecording] = useState<boolean>(false);

    // Permision states
    const [hasPermissions, setHasPermissions] = useState<boolean>(false);
    const {
        hasPermission: hasCameraPermission,
        requestPermission: requestCameraPermission,
    } = useCameraPermission();
    const {
        hasPermission: hasMicrophonePermission,
        requestPermission: requestMicrophonePermission,
    } = useMicrophonePermission();

    useEffect(() => {
        hasCameraPermission &&
            hasMicrophonePermission &&
            setHasPermissions(true);
        !hasMicrophonePermission && requestMicrophonePermission();
        !hasCameraPermission && requestCameraPermission();
    }, [hasCameraPermission, hasMicrophonePermission]);

    // Camera states
    const [frontCamera, setFrontCamera] = useState<CameraDevice | undefined>(
        useCameraDevice('front') as CameraDevice,
    );
    const [backCamera, setBackCamera] = useState<CameraDevice | undefined>(
        useCameraDevice('back', {
            physicalDevices: ['ultra-wide-angle-camera'],
        }) as CameraDevice,
    );

    // Camera position
    const [cameraPosition, setCameraPosition] =
        useState<CameraPosition>('back');

    // Flash state
    const [flash, setFlash] = useState<'off' | 'on'>('off');

    // Capture photo
    const capturePhoto = async () => {
        const photo = await camera.current?.takePhoto({
            qualityPrioritization: 'balanced',
            enableAutoRedEyeReduction: true,
            enableAutoStabilization: true,
            enableShutterSound: true,
            flash: 'auto',
        });
        await CameraRoll.save(photo?.path as string, {type: 'photo'});
        fetchLastMedia();
    };

    // Capture video
    const startRecording = async () => {
        // console.log('startRecording');
        setIsRecording(true);

        // setIsRecording(true);
        await camera.current?.startRecording({
            onRecordingError: error => {
                console.log('onRecordingError', error);
            },
            onRecordingFinished: async video => {
                // console.log('onRecordingFinished', video);
                await CameraRoll.save(video.path, {type: 'video'});
                fetchLastMedia();
            },
        });
    };

    const stopRecording = async () => {
        if (isRecording) {
            // console.log('stopRecording');
            await camera.current?.stopRecording();
            setIsRecording(false);
        }
    };

    // Fetch last media
    const [lastPhotoUri, setLastPhotoUri] = useState<string | null>(null);
    const fetchLastMedia = async () => {
        const asset = await CameraRoll.getPhotos({
            first: 1,
            assetType: 'All',
        });
        // console.log('fetchLastMedia', asset.edges[0].node);
        setLastPhotoUri(asset.edges[0].node.image.uri);
    };
    useEffect(() => {
        fetchLastMedia();
    }, []);

    // Show last photo/video  -
    // TBD - Currently, the modal is not showing the video.
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const isVideo = (uri: string) => {
        const videoExtensions = ['mp4', 'mov', 'm4v', '3gp'];
        const extension = uri?.split('.').pop();
        // console.log('uri', uri);
        // console.log('extension', extension);
        return true;
        return videoExtensions.includes(extension as string);
    };

    if (hasPermissions) {
        return (
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <View style={styles.container}>
                    {/* Upper Icons Container */}
                    <View style={styles.upperIconsContainer}>
                        <AntDesign name="close" size={35} color="white" />
                        <TouchableOpacity
                            onPress={() =>
                                setFlash(flash == 'on' ? 'off' : 'on')
                            }>
                            <MaterialCommunityIcons
                                name={flash == 'on' ? 'flash-off' : 'flash'}
                                size={35}
                                color="white"
                            />
                        </TouchableOpacity>
                        <AntDesign name="setting" size={35} color="white" />
                    </View>

                    {/* Camera Feed Container */}
                    <View style={styles.cameraFeedContainer}>
                        <Camera
                            ref={camera}
                            photo={true}
                            video={true}
                            style={StyleSheet.absoluteFill}
                            device={
                                (cameraPosition === 'back'
                                    ? backCamera
                                    : frontCamera) as CameraDevice
                            }
                            isActive={true}
                            torch={flash}
                            orientation="portrait"
                        />
                    </View>

                    {/* lower container - this container contains a photo gallery icon ,  record/click button, switch camera  icon */}
                    <View style={styles.lowerIconsContainer}>
                        {lastPhotoUri ? (
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                style={{
                                    position: 'absolute',
                                    left: 35,
                                    borderRadius: 7,
                                    overflow: 'hidden',
                                }}>
                                <Image
                                    source={{uri: lastPhotoUri}}
                                    style={{
                                        width: 55,
                                        aspectRatio: 1,
                                    }}
                                />
                            </TouchableOpacity>
                        ) : (
                            <MaterialIcons
                                name="photo-library"
                                size={30}
                                color="white"
                                style={{position: 'absolute', left: 15}}
                            />
                        )}
                        <Pressable
                            style={{
                                width: isRecording ? '25%' : '20%',
                                aspectRatio: 1,
                                borderRadius: 100,
                                borderWidth: 2,
                                borderColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 2, // This will create the space between the border and the inner button
                                // backgroundColor: 'red', // This wil
                            }}
                            onPress={capturePhoto}
                            onLongPress={startRecording}
                            onPressOut={() => stopRecording()}>
                            <View
                                style={[
                                    styles.captureButton,
                                    isRecording && {backgroundColor: 'red'},
                                ]}
                            />
                        </Pressable>

                        <TouchableOpacity
                            onPress={() =>
                                setCameraPosition(
                                    cameraPosition === 'back'
                                        ? 'front'
                                        : 'back',
                                )
                            }
                            style={{position: 'absolute', right: 35}}>
                            <MaterialIcons
                                name="flip-camera-ios"
                                size={40}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        style={{top: 50}}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        {/* TBD - Video not be displayed*/}
                        {false ? (
                            <Video
                                source={{uri: lastPhotoUri as string}}
                                style={{width: '100%', height: '100%'}}
                                resizeMode="cover"
                                controls={true}
                                repeat={true}
                                paused={false}
                                playWhenInactive={true}
                            />
                        ) : (
                            // <View>
                            //     <Text>Photo</Text>
                            // </View>
                            <Image
                                src={lastPhotoUri as string}
                                style={{width: '100%', height: '100%'}}
                            />
                        )}
                        <View
                            style={{position: 'absolute', top: 55, right: 25}}>
                            <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() => setModalVisible(false)}>
                                <AntDesign
                                    name="close"
                                    size={35}
                                    color="black"
                                />
                            </TouchableHighlight>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
        );
    }

    return null; // or some fallback UI
};

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: 'green',
    },
    container: {
        flexGrow: 0.7,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    upperIconsContainer: {
        flexGrow: 0.5,
        flexDirection: 'row',
        // backgroundColor: 'green',
        width: '100%',
        minHeight: '10%',
        maxHeight: '10%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cameraFeedContainer: {
        width: '100%',
        minHeight: '70%',
        maxHeight: '70%',
        // position: 'absolute',
        aspectRatio: 3 / 4,
    },
    lowerIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        width: '100%',
        flexGrow: 1,
    },
    captureButton: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'red',
    },
});

export default PostUploadScreen;
