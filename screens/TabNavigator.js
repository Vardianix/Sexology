import * as React from 'react';
import { Text, View, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sexology from './screenTab/Sexology';
import Poses from './screenTab/Poses';
import Zodiac from './screenTab/Zodiac';





function Three() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

 const Tab = createBottomTabNavigator();

export default function AppTab({navigation}) {
  return (
   
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Сексология') {
            iconName = focused
              ? 'ios-book'
              : 'ios-book';
          } else if (route.name === 'Позы') {
            iconName = focused ? 'md-contacts' : 'md-contacts';
          } else if (route.name === 'Зодиаки') {
            iconName = focused ? 'ios-analytics'
            : 'ios-analytics';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#660666',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Сексология" component={Sexology} />
        <Tab.Screen name="Позы" component={Poses} />
        <Tab.Screen name="Зодиаки" component={Zodiac} />
      </Tab.Navigator>
   
  );
}

