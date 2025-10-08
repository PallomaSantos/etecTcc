import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import MyBooksScreen from '../screens/MyBooks/MyBooksScreen';
import SupportScreen from '../screens/Support/SupportScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import Banner from '../components/Banner';


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Pesquisar') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Meus Livros') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Suporte') {
              iconName = focused ? 'help-circle' : 'help-circle-outline';
            } else if (route.name === 'Conta') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
        tabBarStyle: {
          backgroundColor: '#a02020',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#ffffff',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Pesquisar" component={SearchScreen} />
        <Tab.Screen name="Meus Livros" component={MyBooksScreen} />
        <Tab.Screen name="Suporte" component={SupportScreen} />
        <Tab.Screen name="Conta" component={AccountScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default TabsNavigator;
