import { StyleSheet, Text, View, Image } from 'react-native';
import errorPNG from '../../assets/images/error.png';
import { size, weight } from '../../theme/fonts';

interface Error {
    title: string;
    message: string;
}

const ApiErrorMessage = ({ error }: { error: Error }) => {
    return (
        <View style={styles.container}>
            <Image
                source={errorPNG}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
            <Text style={styles.title}>{error && error.title}</Text>
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
        // backgroundColor: 'green',
    },
    title: {
        fontSize: size.lg,
        fontWeight: weight.bold,
    },
    description: {
        fontSize: size.md,
        fontWeight: weight.thin,
        textAlign: 'center',
    },
});

export default ApiErrorMessage;
