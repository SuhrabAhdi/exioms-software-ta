import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './src/views/HomeScreen'
import detailScreen from './src/views/DetailScreen'
import Favorites from './src/views/FavoriteScreen'
import Promotions from './src/views/PromotionScreen'
import Collections from './src/views/CollectionScreen'
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Details" component={detailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    activeColor="brown"
    inactiveColor="gray"
    barStyle={{ backgroundColor: '#fff' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color}) => {
        const icons = {
          Home: 'home',
          Promotions: 'notifications',
          Collections: 'apps',
          Favorites: 'favorite'
        };
    
        return (
          <Icon
            name={icons[route.name]}
            color={color}
            size={27}
          />
        );
      },
    })} >
      <Tab.Screen name="Home" component={homeScreen} />
      <Tab.Screen name="Collections" component={Collections} />
      <Tab.Screen name="Promotions" component={Promotions} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}
export default App;
