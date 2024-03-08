import {StyleSheet, Text, View, Image} from 'react-native';
import errorPNG from '../../assets/images/error.png';
import {size, weight} from '../../theme/fonts';

const ApiErrorMessage = ({error}: {error: Error}) => {
    return (
        <View style={styles.container}>
            <Image
                source={errorPNG}
                style={{width: 200, height: 200}}
                resizeMode="contain"
            />
            <Text style={styles.title}>Error fetching Posts</Text>
            <Text style={styles.description}>{error && error.message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontSize: size.lg,
        fontWeight: weight.bold,
    },
    description: {
        fontSize: size.md,
        fontWeight: weight.thin,
    },
});

export default ApiErrorMessage;
