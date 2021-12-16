import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={21} color="grey" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'silver',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
        //fontSize: 18,
        flexDirection: 'row',
        
    },
    itemText: {
        marginLeft: 10,
        fontSize: 18,
    }
})

