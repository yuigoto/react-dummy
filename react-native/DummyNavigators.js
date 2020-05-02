/**
 * PROJECT : Component
 * ----------------------------------------------------------------------
 * Example of a navigators using the navigator component for react-native.
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";

// Local imports
import Home from "./Dummy";
import DummyNavigatorComponent from "./DummyNavigatorComponent";

// Dummy stack navigator
export const StackNav = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Secondary: {
      screen: Home,
      navigationOptions: {
        title: "Secondary Screen"
      }
    }
  },
  {
    headerMode: "screen",
    initialRouteName: "Home"
  }
);

// Dummy drawer navigator
export const DrawerNavi = DrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Me: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: DummyNavigatorComponent
  }
);
