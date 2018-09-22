import React, { Component } from "react";
import { Text } from "react-native";
class SearchResult extends Component {
  state = { isLoading: this.props.isLoading };
  render() {
    return this.state.isLoading ? (
      <Text style={{ alignSelf: "center" }}>Searching....</Text>
    ) : (
      <Text style={{ alignSelf: "center" }}>{this.props.text}</Text>
    );
  }
}

export default SearchResult;
