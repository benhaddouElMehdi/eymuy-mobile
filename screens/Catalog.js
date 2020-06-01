import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import { catalog } from '../infra/Catalog-infra'

import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

import {
  LoadAssets,
  StyleGuide,
  assets as componentAssets,
} from "../components";
import UberEats, {
  assets as uberEatsAssets,
  fonts as uberEatsFonts,
} from "../UberEats";


enableScreens();

const fonts = { ...uberEatsFonts};
const assets: number[] = [
  ...uberEatsAssets,
  ...componentAssets,
];


const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      UberEats: {
        screen: UberEats,
        navigationOptions: {
          title: "Uber Eats",
          header: () => null,
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: StyleGuide.palette.primary,
          borderBottomWidth: 0,
        },
        headerTintColor: "white",
      },
    }
  )
);

class Catalog extends Component {

  constructor(props) {
   super(props);
   this.state = {
     dataSource: undefined
    };
  }
  componentDidMount(){
   catalog(this.props.navigation.state.params.qr).then((responseJson)=> {
       console.log(responseJson)
       this.setState({
        dataSource: responseJson
       })
     })
  }

  render() {
     console.log("-----------CATALOG--------")

     if(this.state.dataSource != undefined)
       return (
              <UberEats catalog={this.state.dataSource}/>
       );

   else {
     return null;
   }




    }
  }
export default Catalog;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
