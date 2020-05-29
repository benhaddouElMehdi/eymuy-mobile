import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home'
import Orders from '../screens/Orders'
import Restaurants from '../screens/Restaurants'
import Scan from '../screens/Scan'
import Account from '../screens/Account'

import AntDesign from 'react-native-vector-icons/AntDesign'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'




const EyumyTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="home" color={tintColor} size={24} />
      )
    }
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="menu" color={tintColor} size={24} />
      )
    }
  },
  Scan: {
    screen: Scan,
    navigationOptions: {
      tabBarLabel: 'Scan',
      tabBarIcon: ({ tintColor }) => (
      //  <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      <AntDesign name="scan1" color={tintColor} size={24} />

      )
    }
  },
  Restaurants: {
    screen: Restaurants,
    navigationOptions: {
      tabBarLabel: 'Restos',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-restaurant" color={tintColor} size={24} />
      )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="account" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  export default createAppContainer(EyumyTabNavigator)
