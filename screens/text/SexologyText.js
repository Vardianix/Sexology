import React from 'react';
import {Text, StyleSheet } from 'react-native';


export default function SexologyText () {
      return (
        <Text style={styles.text}>Сексология — научная дисциплина,
        изучающая все проявления сексуальности человека,
         включая как попытки охарактеризовать нормальную сексуальность,
          так и изучение изменчивости сексуальных практик,
           включая и так называемые парафилии (или сексуальные девиации).
           </Text> 
      );
    }
 

  const styles = StyleSheet.create({
    text:{
        color:'#660666',
        fontWeight: 'bold',
        fontSize:24,
        paddingTop:30,
        paddingLeft:10
    }

  })