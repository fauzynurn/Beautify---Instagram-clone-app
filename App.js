import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Text, StatusBar, Image, TextInput } from "react-native";
import MainScreen, { AppTabNavigator } from "./screens/main";
import SearchScreen from "./screens/search";
import HomeScreen from "./screens/home";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
        <AppTabNavigator />
      </React.Fragment>
    );
  }
}

// const AppStackNavigator = StackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Search: {
//     screen: SearchScreen
//   }
// });
