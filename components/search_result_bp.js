import React, { Component } from "react";
import { Text, Image } from "react-native";
import { View } from "native-base";

class SearchResultBP extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginTop: 17 }}>
        <Image
          style={{
            width: 55,
            height: 55,
            borderRadius: 150 / 2,
            marginLeft: 20
          }}
          source={{ uri: this.props.data.profile_image.medium }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              color: "black",
              marginTop: 9,
              marginLeft: 14,
              fontWeight: "bold"
            }}
          >
            {this.props.data.username}
          </Text>
          <Text
            style={{
              color: "grey",
              marginLeft: 14
            }}
          >
            {this.props.data.name}
          </Text>
        </View>
      </View>
    );
  }
}

export default SearchResultBP;
