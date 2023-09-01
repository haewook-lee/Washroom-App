import React from 'react';
import { Text } from 'react-native'

const getFullName = (
    firstName: string,
    middleName: string,
    lastName: string
) => {
    return firstName + ' ' + middleName + ' ' + lastName
}

const Cat = () => {
    const name = 'Maru'
    return <Text>Hello, I'm {getFullName('Rum', 'Tum', 'Tigger')}!</Text>
}

export default Cat