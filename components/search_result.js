import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import SearchResultBP from "./search_result_bp";
class SearchResult extends Component {
  render() {
    return this.props.data.isLoading ? (
      <Text style={{ alignSelf: "center" }}>Searching....</Text>
    ) : this.props.data.data ? (
      <ScrollView>
        {this.props.data.data.map(item => {
          return <SearchResultBP data={item} />;
        })}
      </ScrollView>
    ) : null;
  }
}

export default SearchResult;
