import React from 'react';
import { View, Text,Image } from 'react-native';


export default function Zodiac() {
    return (
     <View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-start',flexWrap:'wrap'}}>
       
        <Image source={require('../../assets/znaki/aquarius.png')} style={{top:50,left:10 ,width: 90, height: 140}} />
        <Image source={require('../../assets/znaki/aries_PNG.png')} style={{top:60,left:3 ,width: 100, height: 120}} />
        <Image source={require('../../assets/znaki/cancer.png')} style={{top:70,left:3 ,width: 100, height: 120}} />
        
        
        
      </View>
    );
  }