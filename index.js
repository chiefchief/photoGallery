import React from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import store from "./src/store";
import route from "services/route";

console.disableYellowBox = true;
console.ignoredYellowBox = ["Warning: ReactNative.createElement"];

const Navigator = createStackNavigator(
  {
    Gallery: { screen: require("components/gallery").default },
    FullView: { screen: require("components/full-view").default }
  },
  {
    initialRouteName: "Gallery",
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const Photoes = createAppContainer(Navigator);

const App = () => (
  <Provider store={store}>
    <StatusBar
      barStyle="dark-content"
      translucent={true}
      backgroundColor={"transparent"}
    />
    <Photoes ref={route.setRoot} />
  </Provider>
);

AppRegistry.registerComponent("photoes", () => App);
