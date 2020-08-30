import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import SexologyText from '../text/SexologyText';


export default function Sexology() {
    return (
        <ScrollView>
      <View style={styles.container}>
       <SexologyText/>
       <Image source={require('../../assets/Human.png')} style={{width:430,height:600}} />
       <Text style={styles.text}>1.Доисторический — имеются лишь отрывочные сведения о половом поведении доисторического человека.</Text>
       <Text style={styles.text}>2.XVIII — XIX века — идёт первичное накопление информации, появляются донаучные исследования.</Text>
       <Text style={styles.text}>3.Период досексологических знаний — научное изучение сексуальности ведётся в рамках отраслевых наук: медицины, философии, биологии.</Text>
       <Text style={styles.text}>4.Период сексологических знаний — сексология выделяется в самостоятельную отрасль научных исследований.
</Text> 
<Image source={require('../../assets/18v.png')} style={{ width:420,height:220}} />  
       <Text style={styles.text}>Существует несколько древних наставлений 
       по «искусству любви», включая такие, как Искусство любви (Ars Amatoria)
        Овидия, индийские трактаты Кама Сутра Ватсьяяны и Ананга Ранга или 
        арабский Благоуханный сад чувственных наслаждений. Однако ни одна
         из этих книг не рассматривала сексуальность как предмет
          систематического научного или медицинского исследования.
Первопроходцем донаучной сексологии в источниках называют маркиза
 де Сада, обобщившего в своих произведениях сведения о всех видах
  отклоняющегося полового поведения и сексуальных извращениях и 
  пропагандировавшего право человека на свободу сексуального поведения.</Text>  
  <Image source={require('../../assets/deSade.png')} style={{width:420,height:600}} />
      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1
    },
    
    text:{
        color:'#660666',
        fontWeight: 'bold',
        fontSize:18,
        paddingTop:30,
        paddingLeft:10
    }

  })