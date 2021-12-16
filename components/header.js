import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Tasks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'plum',
        height: 120,
        paddingTop: 60,
        
      },

    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 31,
        fontWeight: 'bold',

    }
});
    