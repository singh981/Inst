import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    type: 'primary' | 'secondary' | 'tertiary' | 'outline';
    disabled?: boolean;
}

const CustomButton = ({
    title,
    onPress,
    type,
    disabled = false,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
            disabled={disabled}>
            <Text
                style={
                    disabled ? styles.disabledTitle : styles[`${type}Title`]
                }>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // width: '100%',
        alignItems: 'center',
        // backgroundColor: 'white',
        borderRadius: 10,
        top: 10,
        overflow: 'hidden',
    },

    primaryTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'blue',
        padding: 10,
        width: '100%',
        textAlign: 'center',
    },
    secondaryTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'green',
        padding: 10,
        width: '100%',
        textAlign: 'center',
    },
    tertiaryTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        // backgroundColor: 'yellow',
        padding: 10,
        width: '100%',
        textAlign: 'center',
    },
    disabledTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'gray',
        padding: 10,
        width: '100%',
        textAlign: 'center',
    },
    outlineTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue',
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
    },
});

export default CustomButton;
