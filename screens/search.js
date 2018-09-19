import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  FlatList
} from "react-native";
var { height, width } = Dimensions.get("window");
export default class SearchScreen extends React.Component {
  state = {
    imagesRepo: []
  };

  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=c6c70e2721dc619d0bb16869cbf4c7e594b90a4b9aed4c6caf64a8cf0bb3e3d1&count=30"
    )
      .then(response => response.json())
      .then(responseJSON => {
        console.log("Data fetched!");
        this.setState({ imagesRepo: responseJSON }, () => {
          console.log(this.state.imagesRepo);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  static navigationOptions = {
    headerTitle: (
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 26, height: 22, marginTop: 13, marginLeft: 10 }}
          source={require("../assets/images/search.png")}
        />
        <TextInput
          style={{
            marginLeft: 10,
            height: 48,
            fontSize: 19
          }}
          placeholder="Search"
        />
      </View>
    ),
    headerStyle: {
      height: 50
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.imagesRepo.length === 0 ? (
          <Text>Please wait</Text>
        ) : (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
              <FlatList
                data={this.state.imagesRepo}
                numColumns={3}
                renderItem={({ item, index }) => (
                  <Image
                    style={[
                      index % 3 !== 0 ? { marginLeft: 2 } : { marginLeft: 0 },
                      { flex: 1 },
                      { width: 135 },
                      { height: 150 },
                      { marginBottom: 2 }
                    ]}
                    source={{ uri: item.urls.small }}
                  />
                )}
              />
              {/* {this.state.imagesRepo.map((image, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >
                    <Image
                      style={{ flex: 1, width: 150, height: 150 }}
                      source={{ uri: image.urls.small }}
                    />
                  </View>
                );
              })} */}
            </ScrollView>
          </View>
        )}
      </React.Fragment>
    );
  }
}
