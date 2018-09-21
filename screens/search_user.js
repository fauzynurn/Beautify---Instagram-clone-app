import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
class SearchUser extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
          <TextInput
            style={{
              height: 48,
              fontSize: 17
            }}
            autoFocus={true}
            placeholder="Search"
          />
      ),
      headerStyle: {
        height: 50
      }
    };
  };
  render() {
    return <View style={{backgroundColor: "white"}}></View>;
  }
}

export default SearchUser;
