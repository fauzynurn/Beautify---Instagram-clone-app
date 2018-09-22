import React, { Component } from "react";
import _ from "lodash";
import { Text, View, TextInput } from "react-native";
import SearchResult from "../components/search_result";

let x = null;
class SearchUser extends Component {
  state = {
    isEndEditing: false,
    isLoading: false,
    text: ""
  };
  componentDidMount() {
    x = this;
    // this.props.navigation.setParams({ doSomething: this.doSomething });
  }
  whatToDo = e => {
    this.setState({ text: "Searching...", isEndEditing: true });
    this.doSomething(e);
  };
  doSomething = _.debounce(e => {
    this.setState({ text: e });
  }, 600);
  static navigationOptions = () => {
    return {
      headerTitle: (
        <TextInput
          style={{
            height: 48,
            fontSize: 17
          }}
          autoFocus={true}
          placeholder="Search"
          onChangeText={text => x.whatToDo(text)}
        />
      ),
      headerStyle: {
        height: 50
      }
    };
  };
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        {!this.state.isEndEditing || this.state.text === "" ? (
          <Text style={{ alignSelf: "center" }}>Type something</Text>
        ) : (
          <Text style={{ alignSelf: "center" }}>{this.state.text}</Text>
        )}
      </View>
    );
  }
}

export default SearchUser;
