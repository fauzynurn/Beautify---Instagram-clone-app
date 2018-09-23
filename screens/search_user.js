import React, { Component } from "react";
import _ from "lodash";
import { Text, View, TextInput } from "react-native";
import SearchResult from "../components/search_result";

let x = null;
class SearchUser extends Component {
  state = {
    isEndEditing: false,
    isLoading: false,
    data: []
  };
  componentDidMount() {
    x = this;
    // this.props.navigation.setParams({ doSomething: this.doSomething });
  }
  whatToDo = e => {
    this.setState({
      isEndEditing: true,
      isLoading: true
    });
    this.doSomething(e);
  };
  doSomething = _.debounce(query => {
    fetch(
      `https://api.unsplash.com/search/users?client_id=c6c70e2721dc619d0bb16869cbf4c7e594b90a4b9aed4c6caf64a8cf0bb3e3d1&query=${query}&per_page=10`
    )
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({ data: responseJSON.results, isLoading: false }, () =>
          console.log("DATA", this.state.data)
        );
      })
      .catch(error => {
        console.log(error);
      });
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
          <SearchResult data={this.state} />
        )}
      </View>
    );
  }
}

export default SearchUser;
