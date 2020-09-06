import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SexologyText from '../text/SexologyText';
import SexologyPhoto1 from './scrollImage/SexologyPhoto1';



export default function Sexology() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SexologyText />
        <Image source={require('../../assets/Human.png')} style={{ width: 400, height: 500 }} />
        <Text style={styles.text}>1.Доисторический — имеются лишь отрывочные сведения о половом поведении доисторического человека.</Text>
        <Text style={styles.text}>2.XVIII — XIX века — идёт первичное накопление информации, появляются донаучные исследования.</Text>
        <Text style={styles.text}>3.Период досексологических знаний — научное изучение сексуальности ведётся в рамках отраслевых наук: медицины, философии, биологии.</Text>
        <Text style={styles.text}>4.Период сексологических знаний — сексология выделяется в самостоятельную отрасль научных исследований.</Text>
        <Image source={require('../../assets/18v.png')} style={{ width: 420, height: 220 }} />
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
        <Image source={require('../../assets/deSade.png')} style={{ width: 380, height: 450 }} />
        <Text style={styles.text}>В 1908 году Магнус Хиршфельд начал выпускать первый научный журнал, освещающий вопросы сексологии</Text>
        <Image source={require('../../assets/jurnal.jpg')} style={{ width: 420, height: 400 }} />
        <Text style={styles.text}>в 1918 году основал первый Институт сексологии (нем. Institut für Sexualwissenschaft) в Берлине. Хиршфельд занимался медицинскими, этическими и юридическими проблемами, связанными с половыми отношениями, в том числе вопросами гомосексуальности и контроля над рождаемостью. В 1921 году Хиршфельд проводит первый Международный конгресс сексуальных реформ в Берлине, а в 1928 году им была основана Всемирная лига сексуальных реформ. Когда нацисты пришли к власти, одной из первых проведённых ими акций был разгром института (6 мая 1933 года) и сожжение его библиотеки. </Text>
        <SexologyPhoto1/>
        <Text style={styles.text}>В послевоенные годы центр тяжести в сексологических исследованиях сместился в США. </Text>
        <Text style={styles.text}>В 1947 году Альфред Кинси основал свой Institute for Sex Research (Институт сексуальных исследований) в Индианском университете в Блумингтоне, который ныне носит его имя. </Text>
        <Image source={require('../../assets/Alfred_Kinsey_1955.jpg')} style={{ width: 420, height: 400 }}/>
        <Text style={styles.text}>Зоолог по образованию, Кинси был одним из первых, кто поставил изучение сексуальности на строгую позитивистскую основу. Среди его важных достижений были описание спектра сексуальных практик на основе массива биографических интервью и анкетных данных, а также концептуализация представлений о континуальном характере сексуальной ориентации (шкала Кинси)</Text>
        <Text style={styles.text}>Кинси показал, что от так называемой сексуальной нормы, определяемой общественной моралью, постоянно отступает значительная часть населения, а время от времени допускает нарушения вообще большинство людей. Результаты его исследований вышли в виде двух томов, известных под названием Отчеты Кинси (1948 и 1953).</Text>
        <Text style={styles.text}>В конце 1960-х дальнейший прогресс в сексологии был отмечен выходом трудов Уильяма Мастерса и Вирджинии Джонсон «Сексуальные реакции человека» (англ. Human Sexual Response, 1966) и «Сексуальная неполноценность человека» (англ. Human Sexual Inadequacy, 1970), ставших бестселлерами.</Text>
        <Image source={require('../../assets/scale_1200.webp')} style={{ width: 420, height: 400 }}/>
        <Text style={styles.text} >В 1978 году они основали так называемый Masters & Johnson Institute. Мастерс и Джонсон явились пионерами экспериментальных методов исследований пола с привлечением добровольцев.</Text>
        <Text style={styles.text}>Фриц Клейн разработал матрицу сексуальной ориентации — многомерную систему для детального описания комплексной сексуальной ориентации, сходную с одномерной шкалой Кинси, но измеряющей семь различных векторов сексуальной ориентации и идентичности по отдельности и позволяющей описывать изменения во времени</Text>
        <Image source={require('../../assets/jyLj2OXezO4h9.jpeg')} style={{ width: 400, height: 550 }}/>
        <Text style={styles.text}>В 1978 году Клейн опубликовал The Bisexual Option, новаторское психологическое исследование бисексуальности, а в 1998 году, он основал American Institute of Bisexuality (AIB) для поощрения, поддержки и помощи в изучении бисексуальности и просвещения по вопросам, связанным с бисексуальностью.</Text>
        <Text style={styles.text}>В России сексологические исследования производились в начале XX века вплоть до 1930-х годов, после чего исследования были свёрнуты. Возрождение советской сексологии в 1970-х годах связывается с именем Г. С. Васильченко</Text>
        <Image source={require('../../assets/508794w290h393auto.jpg')} style={{ width: 420, height: 400 }}/>
        <Text style={styles.text}>который организовал Всесоюзный научно-методический центр сексопатологии (в настоящее время Российский федеральный центр сексологии и сексопатологии), явился автором первых руководств для врачей «Общая сексопатология» (1977) и «Частная сексопатология» (1983).</Text>
     
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  hadingText: {
    color: '#B22222',
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 20,
    paddingLeft: 10
  },

  text: {
    color: '#660666',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 30,
    paddingLeft: 10
  }

})