import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import createStackNavigator from "react-navigation";
import Feed from "../components/feed";
import { Container, Left, Body, Right, Header, Title } from "native-base";
import SearchScreen from "./search";

export default class HomeScreen extends React.Component {
  state = {
    isFinishedFetching: false,
    data: []
  };

  static navigationOptions = () => {
    return {
      headerTitle: (
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            fontFamily: "Billabong",
            fontSize: 28,
            color: "black"
          }}
        >
          Beautify
        </Text>
      ),
      headerStyle: {
        height: 50
      }
    };
  };
  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/?client_id=c6c70e2721dc619d0bb16869cbf4c7e594b90a4b9aed4c6caf64a8cf0bb3e3d1&per_page=30"
    )
      .then(response => response.json())
      .then(responseJSON => {
        console.log("Data fetched!");
        this.setState({ data: responseJSON });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.data.length === 0 ? (
          <Text>Waiting</Text>
        ) : (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
              {this.state.data.map(x => {
                return <Feed data={x} />;
              })}
            </ScrollView>
          </View>
        )}
      </React.Fragment>
    );
  }
}
