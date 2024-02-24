import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    type: 'primary' | 'secondary' | 'tertiary';
}

const CustomButton = ({title, onPress, type}: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles[`${type}Title`]}>{title}</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'blue',
        padding: 10,
        width: '100%',
        textAlign: 'center',
    },
    secondaryTitle: {
        fontSize: 20,
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
});

export default CustomButton;
