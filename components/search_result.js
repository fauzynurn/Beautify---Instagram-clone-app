import React, { Component } from "react";
import { Text, ScrollView, ActivityIndicator, View } from "react-native";
import SearchResultBP from "./search_result_bp";
class SearchResult extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        {this.props.data.isLoading ? (
          <View
            style={{
              backgroundColor: "white",
              marginLeft: 15,
              marginTop: 15,
              flexDirection: "row"
            }}
          >
            <ActivityIndicator
              style={{ alignSelf: "flex-end" }}
              size="small"
              color="grey"
            />
            <Text
              style={{
                color: "grey",
                marginTop: 7,
                marginLeft: 15,
                fontSize: 15,
                fontWeight: "bold"
              }}
            >
              Searching...
            </Text>
          </View>
        ) : this.props.data.data ? (
          <ScrollView>
            {this.props.data.data.map(item => {
              return <SearchResultBP data={item} />;
            })}
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

export default SearchResult;
