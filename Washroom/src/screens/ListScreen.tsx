import React from 'react';
import { View, Text, FlatList } from 'react-native'
import { Item } from '../types/DataTypes'

const data: Item[] = [
    { id: '1', name: 'Item 1'},
    { id: '2', name: 'Item 2'},
    { id: '3', name: 'Item 3'}
]

const ListScreen: React.FC = () => {
    return (
        <View style={{ flex: 1}}>
            <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 16}}>
                Detailed List
            </Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item}) => (
                    <View style={{ padding: 16 }}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default ListScreen