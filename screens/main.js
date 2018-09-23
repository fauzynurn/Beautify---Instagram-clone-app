import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import { Text, Image, Icon } from "react-native";
import HomeScreen from "./home";
import DetailsScreen from "./search";
import BBContent from "../bottombarcontent";
import AddPhotosScreen from "./add_photos";
import LikesScreen from "./likes";
import UserScreen from "./user";
import SearchScreen from "./search";
import SearchUser from "./search_user";

export default class MainScreen extends React.Component {
  // static navigationOptions = {
  //   headerTitle: (
  //     <Text
  //       style={{
  //         marginTop: 10,
  //         marginLeft: 10,
  //         fontFamily: "Billabong",
  //         fontSize: 28,
  //         color: "black"
  //       }}
  //     >
  //       Beautify
  //     </Text>
  //   ),
  //   headerStyle: {
  //     height: 50
  //   }
  // };
  render() {
    return <AppTabNavigator />;
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    Home: HomeScreen,
    SearchUser: SearchUser
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
);

export const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../assets/images/home_pressed.png")
            : require("../assets/images/home.png");
          return <Image style={{ width: 28, height: 24 }} source={image} />;
        }
      }
    },
    SearchTab: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../assets/images/search_pressed.png")
            : require("../assets/images/search.png");
          return <Image style={{ width: 28, height: 24 }} source={image} />;
        }
      }
    },
    AddPhotosTab: {
      screen: AddPhotosScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../assets/images/add_photos_pressed.png")
            : require("../assets/images/add_photos.png");
          return <Image style={{ width: 28, height: 24 }} source={image} />;
        }
      }
    },
    LikesTab: {
      screen: LikesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../assets/images/heart_pressed.png")
            : require("../assets/images/heart.png");
          return <Image style={{ width: 30, height: 33 }} source={image} />;
        }
      }
    },
    UserTab: {
      screen: UserScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("../assets/images/user_pressed.png")
            : require("../assets/images/user.png");
          return <Image style={{ width: 32, height: 33 }} source={image} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      iconStyle: {
        width: 24,
        height: 24
      },
      style: { height: 50 }
    }
  }
);
