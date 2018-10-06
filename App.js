import React from "react";
import { StatusBar, AsyncStorage } from "react-native";
import { AppTabNavigator } from "./screens/main";
import { createStore } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";

const initialState = {
  feeds: []
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEW_DATA":
      return { feeds: action.data };
    case "APPEND_OLD_DATA":
      return { feeds: state.feeds.concat(action.newItem) };
    default:
      return state;
  }
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
          <AppTabNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

// const AppStackNavigator = StackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Search: {
//     screen: SearchScreen
//   }
// });
