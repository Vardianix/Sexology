import React, { useRef } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import ScrollImage1 from './scrollImage/scrollImage';

export default function Poses() {

  return (
    <ScrollView>
      <View style={{
        flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'
      }}>

        <Text style={styles.hadingText} >Двойное удовольствие: 20 лучших секс-поз для обоих партнёров!</Text>

        <Text style={styles.text} >Миссионерская поза</Text>
        <Image source={require('../../assets/poses/missioner.png')} style={{ width: 420, height: 220 }} />

        <Text style={styles.hadingText} >Как выполнить </Text>
        <Text style={styles.text} > Вряд ли нужно объяснять, но тем не менее. Женщина лежит на спине с разведёнными в стороны ногами, мужчина сверху.</Text>

        <Text style={styles.hadingText}>Плюсы</Text>
        <Text style={styles.text} >Для мужчины — контроль над всем процессом, включая глубину проникновения и частоту фрикций. Для женщин — возможность расслабиться, доверив основную работу партнёру. Для обоих — максимальная близость, зрительный контакт и в целом комфортное положение тел.</Text>
        <Text style={styles.hadingText}>Минусы</Text>
        <Text style={styles.text}>Скучновато.</Text>
        <Text style={styles.hadingText}>Улучшение</Text>
        <Text style={styles.text}>Положите подушку под таз партнёрши. Изменится угол проникновения и появится немного разнообразия.</Text>
        <Text style={styles.hadingText}>Вариация 1. Половое равнение, или CAT (coital alignment technique)
        <Text style={styles.text}>Подходит для женщин, которым тяжело достичь оргазма. За счёт сильной клиторальной стимуляции проблема легко решается. Мужчина не получает достаточно глубокого проникновения, но это компенсируется трением.</Text>

        </Text>
        <Image source={require('../../assets/poses/cat.png')} style={{ width: 420, height: 220 }} />
        <Text style={styles.hadingText} >Как выполнить </Text>
        <Text style={styles.text}>Всё начинается с классической миссионерской позиции, затем женщина сводит ноги, максимально прижимая их к ногам партнёра. В результате основание пениса должно оказаться на головке клитора. Совершая скользящие движения вверх-вниз, мужчина дополнительно стимулирует эту зону. Женщина тоже может двигаться, чтобы усилить стимуляцию.</Text>
        <Text style={styles.hadingText} >Плюсы </Text>
        <Text style={styles.text}>Подходит для женщин, которым тяжело достичь оргазма. За счёт сильной клиторальной стимуляции проблема легко решается. Мужчина не получает достаточно глубокого проникновения, но это компенсируется трением.</Text>
        <Text style={styles.hadingText} >Вариация 2. Ноги вверх </Text>
        <ScrollImage1/>
      
       <Text style={styles.hadingText} >Как выполнить </Text>
       <Text style={styles.text} >Женщина разводит ноги и поднимает их вверх. Модификаций позы множество: ноги обхватывают туловище партнёра, находятся на его плечах или прижаты к плечам самой женщины. Вариант для любителей сильной фиксации — связать ноги и руки партнёрши. </Text>
       <Text style={styles.hadingText} >Плюсы </Text>
       <Text style={styles.text} >Глубокое проникновение и стимуляция точки G. </Text>
       <Text style={styles.hadingText} >Минусы </Text>
       <Text style={styles.text} >Требует гибкости от женщины и осторожности от мужчины, особенно если в ход идут верёвки. </Text>
       <Text style={styles.hadingText} >Улучшение </Text>
       <Text style={styles.text} >Если женщина свесит голову с постели, приток крови к мозгу увеличится и оргазм может стать ярче. </Text>
       <Text style={styles.hadingText} >Догги-стайл </Text>
       <Image source={require('../../assets/poses/doggy.png')} style={{ width: 420, height: 280 }} />
       <Text style={styles.hadingText} >Как выполнить </Text>
       <Text style={styles.text} >Женщина становится на четвереньки. Мужчина, стоя на коленях, проникает в неё сзади. </Text>
       <Text style={styles.hadingText} >Плюсы </Text>
       <Text style={styles.text} >Eщё больше доминирования для мужчин. Для женщин — возможность получения ручной стимуляции клитора. Дополнительное преимущество: подходит для анального секса. </Text>
      <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Отсутствие зрительного и обширного телесного контакта. Вообще, эту позу вряд ли можно назвать излишне романтичной. Ещё один недостаток: многие женщины испытывают неприятные ощущения от сильных толчков о стенку матки. </Text>
       <Text style={styles.hadingText} >Улучшения</Text>
       <Text style={styles.text} >Вновь подушка, которая, помимо прочего, поможет женщине занять более комфортное положение.</Text>
       <Text style={styles.hadingText} >Вариация 1. Догги-стайл стоя</Text>
       <Image source={require('../../assets/poses/doggi-stoya.png')} style={{ width: 420, height: 280 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Мужчина стоит на полу, женщина лежит на кровати или другой поверхности.</Text>
       <Text style={styles.hadingText} >Плюсы </Text>
       <Text style={styles.text} >Более комфортное положение для женщины и возможность для обоих устроить секс-тест местам, помимо спальни.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Положение стоя может быть не очень комфортным для мужчины.</Text>
       <Text style={styles.hadingText} >Вариация 2. Догги-лайт</Text>
       <Image source={require('../../assets/poses/doggy-lite.png')} style={{ width: 420, height: 280 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Мужчина стоит на полу у края кровати, женщина на четвереньках. После проникновения женщина поднимается и остаётся стоять только на коленях. Мужчина поддерживает её рукой за туловище.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Этот вариант догги-стайл предполагает больше телесного контакта, а также оставляет возможность для взглядов и поцелуев. В общем, делает традиционную позу более интимной и нежной.</Text>
       <Text style={styles.hadingText} >Вариация 3. Ленивый догги-стайл</Text>
       <Image source={require('../../assets/poses/lazy-doggy.png')} style={{ width: 420, height: 280 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Женщина лежит на животе, мужчина сверху. Получается что-то между догги и миссионерской позой.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Комфортное положение для обоих партнёров.</Text>
       <Text style={styles.hadingText} >Улучшение</Text>
       <Text style={styles.text} >Если мужчина будет ласкать рукой клитор партнёрши, её оргазм почти гарантирован.</Text>
       <Text style={styles.hadingText} >Наездница</Text>
       <Image source={require('../../assets/poses/naezdnica.png')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Мужчина лежит на спине, женщина сверху.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Для женщины — тотальный контроль, в том числе и за клиторальной стимуляцией (за счёт трения клитора о лобок партнёра). Для мужчины — возможность наконец-то отдохнуть и насладиться прекрасным видом.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Есть опасность травмировать партнёра. Если очень сильно увлечься, можно вместо оргазма подарить ему перелом пениса.</Text>
       <Text style={styles.hadingText} >Вариация 1. Обратная наездница</Text>
       <Image source={require('../../assets/poses/obratnaya-naezdnica.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Женщина садится спиной к лицу партнёра. Мужчина приподнимается на локти или ложится повыше на подушку. Это позволяет женщине наклониться и опереться или облокотиться о постель.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Классическая позиция обратной наездницы, когда женщина просто находится спиной к партнёру, может вызывать дискомфорт у обоих. В этой вариации партнёрша имеет больше точек опоры, ей легче двигаться. То есть секс становится более динамичным.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Отсутствие зрительного контакта.</Text>
       <Text style={styles.hadingText} >Вариация 2. Наездница на спине</Text>
       <Image source={require('../../assets/poses/naezdnica-lezha.png')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Женщина лежит спиной к мужчине, опираясь руками и ногами о кровать.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Поза подходит для анального секса. К тому же в таком положении женщина полностью контролирует ситуацию.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Требует от женщины силы и ловкости.</Text>
       <Text style={styles.hadingText} >Ножницы</Text>
       <Image source={require('../../assets/poses/nozhnicy.png')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Партнёры лежат на боку. Мужчина расставляет ноги, а женщина как бы обхватывает своими его верхнюю ногу.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Стимуляция клитора для женщины. Для обоих — возможность попробовать необычную позицию, которая не требует особых гимнастических навыков.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Мало телесного контакта и манёвренности для мужчины.</Text>
       <Text style={styles.hadingText} >Вариация 1. Ножницы + догги-стайл</Text>
       <Image source={require('../../assets/poses/nozhnicy-i-doggi.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Женщина лежит в позе «Ножницы», мужчина стоит на коленях.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Более глубокое проникновение и больше контроля для партнёра, а также остальные преимущества догги при сохранении зрительного контакта.</Text>
       <Text style={styles.hadingText} >Улучшения</Text>
       <Text style={styles.text} >Мужчина может дополнительно стимулировать клитор партнёрши пальцами или пенисом, периодически вынимая его из влагалища.</Text>
       <Text style={styles.hadingText} >Вариация 2. Ножницы + обратная наездница</Text>
       <Image source={require('../../assets/poses/naezdnica-i-nozhnicy.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Мужчина ложится на спину и сгибает одну ногу в колене. Женщина садится в позу обратной наездницы, обвивая согнутую ногу партнёра.Плюсы</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Двойная стимуляция для партнёрши, для партнёра — все бонусы позы «Женщина сверху».</Text>
       <Text style={styles.hadingText} >Ложки</Text>
       <Image source={require('../../assets/poses/lozhki.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Мужчина и женщина лежат на боку. Женщина может быть как спиной, так и лицом к партнёру.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Интимная и комфортная для обоих поза, отлично подходит для небольшой передышки. Также удобна для занятия сексом во время беременности.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Глубокое проникновение маловероятно.</Text>
       <Text style={styles.hadingText} >Улучшения</Text>
       <Text style={styles.text} >Мужчина может пальцами ласкать клитор партнёрши. В положении, когда она лежит спиной к нему, это особенно удобно. А ей ещё и приятно.</Text>
       <Text style={styles.hadingText} >Сидя</Text>
       <Image source={require('../../assets/poses/sidya.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Мужчина сидит на кровати или на стуле. Женщина садится сверху.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Поза хороша и для долгого секса, и для женского оргазма, так как партнёрша может контролировать процесс. Дополнительные преимущества — близость партнёров, комфортность самой позиции и возможность менять темп и угол проникновения.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >В варианте со стулом поза может быть неудобна партнёрше невысокого роста.</Text>
       <Text style={styles.hadingText} >Вариация 1. Колыбель</Text>
       <Image source={require('../../assets/poses/lotos.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Оба партнёра сидят на кровати, женщина обхватывает ногами тело мужчины.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Ещё больше чувственности и расслабленности, партнёры могут раскачиваться вместе, медленно достигая оргазма.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Недостаточно глубины и динамики.</Text>
       <Text style={styles.hadingText} >Вариация 2. Женщина лёжа</Text>
       <Image source={require('../../assets/poses/zhenshhina-lezha.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Ещё один промежуточный вариант между миссионерской позой и догги-стайл. На этот раз женщина лежит на спине, а мужчина сидит на коленях.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Оба партнёра могут контролировать скорость и глубину проникновения. Мужчина дополнительно может ласкать грудь и клитор партнёрши.</Text>
       <Text style={styles.hadingText} >Вариация 3. Сидя + стоя</Text>
       <Image source={require('../../assets/poses/stoya-i-sidya.jpg')} style={{ width: 480, height: 280, right:60 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >В подборке почти нет позиций стоя, потому что они, как правило, не очень удобны и требуют повышенного напряжения сил от мужчины. Но эта вариация упрощает ситуацию: мужчине не нужно держать женщину на весу — достаточно посадить её на стол или другую подходящую для его роста поверхность.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Глубокое проникновение и разнообразие, которое привносит эта позиция в сексуальную жизнь партнёров.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >При всех модификациях поза всё равно недостаточно комфортна. Если партнёр не любит стоять во время секса, она не подойдёт.</Text>
       <Text style={styles.hadingText} >69</Text>
       <Image source={require('../../assets/poses/69.jpg')} style={{ width: 480, height: 170 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Один из партнёров лежит на спине, другой ложится сверху лицом к гениталиям.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Одновременные оральные ласки и — как логичное продолжение — одновременный оргазм.</Text>
       <Text style={styles.hadingText} >Минусы</Text>
       <Text style={styles.text} >Может не подойти партнёрам разного роста или тем, кто не приемлет многозадачности в сексе.</Text>
       <Text style={styles.hadingText} >Вариация 1. 69 на боку</Text>
       <Image source={require('../../assets/poses/69-sboku.jpg')} style={{ width: 480, height: 320 }} />
       <Text style={styles.hadingText} >Как выполнить</Text>
       <Text style={styles.text} >Мужчина и женщина делают всё то же, что при классической позе 69, но лежат на боку.</Text>
       <Text style={styles.hadingText} >Плюсы</Text>
       <Text style={styles.text} >Более комфортное положение для партнёра, который в обычной ситуации оказывается сверху.</Text>

       </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
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
    paddingTop: 10,
    paddingLeft: 10
  }
})
