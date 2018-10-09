import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
var moment = require("moment");
class Feed extends Component {
  //   constructor() {
  //     super();
  //     console.log(this.props.data);
  //   }
  state = {
    isImageReady: false
  };
  loadImage = () => {
    this.setState({ isImageReady: true });
  };
  render() {
    return (
      <React.Fragment>
        <View style={{ marginTop: 15, flexDirection: "row" }}>
          <Image
            source={{
              uri: this.props.data.user.profile_image.medium
            }}
            style={{
              marginLeft: 15,
              width: 30,
              height: 30,
              borderRadius: 150 / 2
            }}
          />
          <Text
            style={{
              color: "black",
              marginTop: 4,
              marginLeft: 14,
              fontWeight: "bold"
            }}
          >
            {this.props.data.user.instagram_username === null
              ? this.props.data.user.username
              : this.props.data.user.instagram_username}
          </Text>
        </View>
        <FastImage
          source={{
            uri: this.props.data.urls.regular
          }}
          style={{
            width: "100%",
            marginTop: 10,
            height: 350
          }}
          onLoad={e => console.log("WIDTH: ", e.nativeEvent.width)}
        />
        <View style={{ marginLeft: 18, marginTop: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 15,
              marginBottom: 5
            }}
          >
            {this.props.data.likes} likes
          </Text>
          <Text style={{ marginRight: 12 }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                marginRight: 23
              }}
            >
              {this.props.data.user.instagram_username === null
                ? this.props.data.user.username
                : this.props.data.user.instagram_username}
            </Text>{" "}
            <Text style={{ color: "black", marginTop: 9 }}>
              {this.props.data.user.bio}
            </Text>
          </Text>
          <Text>{moment(this.props.data.updated_at).fromNow()}</Text>
        </View>
      </React.Fragment>
    );
  }
}

export default Feed;
