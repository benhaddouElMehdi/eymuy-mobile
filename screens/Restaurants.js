import React from "react";
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

//const fonts = { ...uberEatsFonts};
//const assets: number[] = [
  //...uberEatsAssets,
//  ...componentAssets,
//];

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

class Restaurants extends React.Component {
  render() {
      return (
        <SafeAreaProvider>
          <UberEats />
        </SafeAreaProvider>
      );
  }
}

export default Restaurants;
