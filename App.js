import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";
import HomeScren from './components/HomeScreen';
import Feed from './components/Feed';
import Login from './components/Login';
import CameraScreen from './components/CameraScreen';

import React, { Component } from "react";

const Appnavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScren
    },
    Details: {
      screen: Feed
    },
    Login: {
      screen: Login
    },
    Camera: {
      screen: CameraScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);
const AppNav = createAppContainer(Appnavigator);

 class App extends Component {
  render() {
    return <AppNav />;
  }
}
export default App;