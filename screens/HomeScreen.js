import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import HomeText from './text/HomeText';
import Header from '../Header';

export default function HomeScreen({ navigation }) {
  return (

    <View style={styles.container}>
       <Header/>
       <HomeText/>
       <Image source={require('../assets/doctor.png')}
        style={{ position:'absolute',top:420, width:500, height:500,  }}/>
        <View style={{position:'absolute',right:20,top:620,width:60,}}>
      <Button color='#660666' title='Хочу' 
        onPress={() => navigation.navigate("Tab")} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'absolute',
    textAlign: 'center',
    fontSize: 70,
    color: '#660666',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height:900,
    width:410,
    backgroundColor: 'white'
  },
});
