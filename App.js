import React from "react";
import { StyleSheet, View } from "react-native";
import { PodcastSearch } from "./src/podcast-search/podcast-search.component";
import { podcastStore } from "./src/services/podcast/podcast.store";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PodcastSearch podcastStore={podcastStore} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1
  }
});
