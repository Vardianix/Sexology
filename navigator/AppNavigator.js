import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, DarkTheme } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AppTab from '../screens/TabNavigator';


const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Stack = createStackNavigator();


export default function AppNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator 
    headerMode='none'
    initialRouteName="Sexology"
    screenOptions={{headerStyle:{backgroundColor:'#660666'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
    }}
    >
        <Stack.Screen name="Sexology" component={HomeScreen} 
        
        />
        <Stack.Screen name="Tab" component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}