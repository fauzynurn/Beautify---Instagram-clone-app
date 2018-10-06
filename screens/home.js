import React from "react";
import { Text, View, ScrollView, List, FlatList } from "react-native";
import Feed from "../components/feed";
import { connect } from "react-redux";

class HomeScreen extends React.Component {
  state = {
    page: 1
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

  getNextPage = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      console.log("Before fetching:", this.props.data);
      fetch(
        `https://api.unsplash.com/photos/?client_id=c6c70e2721dc619d0bb16869cbf4c7e594b90a4b9aed4c6caf64a8cf0bb3e3d1&page=${
          this.state.page
        }&per_page=10`
      )
        .then(response => response.json())
        .then(responseJSON => {
          this.props.appendData(responseJSON);
          console.log("After fetching:", this.props.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/?client_id=c6c70e2721dc619d0bb16869cbf4c7e594b90a4b9aed4c6caf64a8cf0bb3e3d1&page=1&per_page=10"
    )
      .then(response => response.json())
      .then(responseJSON => {
        console.log("Data fetched!");
        // console.log(this.props);
        this.props.fetchNewData(responseJSON);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => <Feed data={item} />}
          onEndReached={this.getNextPage}
          onEndReachedThreshold={3}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.feeds
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchNewData: newData =>
      dispatch({ type: "FETCH_NEW_DATA", data: newData }),
    appendData: newData =>
      dispatch({ type: "APPEND_OLD_DATA", newItem: newData })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
