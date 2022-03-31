import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper"

export const Focus = () => {

    return (
        <View style={styles.container}>
            <Text>What Would you Like to Focus On? </Text>
            <TextInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50
    },
});
