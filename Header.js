import React from 'react';
import { View, Text } from 'react-native';


export default function Header() {
    return (
        <View style={{
            width: 415,
            height: 70,
            backgroundColor: '#660666'
        }}>
            <Text style={{
             flex: 1,
             color:'white',
             justifyContent: 'center',
             alignItems: 'center',
            paddingLeft:45,
            paddingTop:20,
            fontSize: 30
             }} >Sexology</Text>
        </View>
    )
}


