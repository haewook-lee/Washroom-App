import React from 'react'
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProps = {
    navigation : NativeStackNavigationProp<RootStackParamList, 'Home'>
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Go to Detailed List"
                onPress={() => navigation.navigate('ListScreen')}
            />
            <Button
                title="Go to Map"
                onPress={() => navigation.navigate('MapScreen')}
            />
        </View>
    )
}

export default HomeScreen;