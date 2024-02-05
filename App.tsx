import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, World!</Text>
            <AntDesign name="pluscircle" size={35}  />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
