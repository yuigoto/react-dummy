import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";

import { DummyComponent } from "./DummyComponent";
import { DummyDrawer } from "./DummyDrawer";

/**
 * StackNavi
 * ----------------------------------------------------------------------
 * Exemplo de stack navigator.
 * Example of a stack navigator.
 * 
 * @since 0.0.1
 */
export const StackNavi = StackNavigator(
  {
    Home: {
      screen: DummyComponent,
      navigationOptions: {
        header: null
      }
    },
    Secondary: {
      screen: DummyComponent,
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

/**
 * DrawerNavi
 * ----------------------------------------------------------------------
 * Exemplo de drawer navigator.
 * Example of a drawer navigator.
 * 
 * @since 0.0.1
 */
export const DrawerNavi = DrawerNavigator(
  {
    Home: {
      screen: DummyComponent
    },
    Me: {
      screen: DummyComponent
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: DummyDrawer
  }
);
