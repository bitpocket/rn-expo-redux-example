import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import PodcastSearch from "./src/podcast-search/podcast-search.container";
import { store } from "./src/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PodcastSearch />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1
  }
});
