import React from "react";
import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "../button/button.component";
import { fetchPodcasts } from "../services/podcast/podcast.actions";
import { observer } from "mobx-react/native";

@observer
export class PodcastSearch extends React.Component {
  handleOnPress = () => {
    const { podcastStore } = this.props;
    podcastStore.fetchPodcasts(podcastStore.searchPhrase);
  };

  handleClearStatePhrase = () => {
    const { podcastStore } = this.props;
    podcastStore.searchPhrase = "";
    podcastStore.searchResult = [];
  };

  handleOnChange = phrase => {
    const { podcastStore } = this.props;
    podcastStore.searchPhrase = phrase;
  };

  handleOnSubmitEditing = () => {
    const { podcastStore } = this.props;
    podcastStore.fetchPodcasts(podcastStore.searchPhrase);
  };

  renderResultItem = ({ item }) => (
    <View>
      <Text>{item.artistName}</Text>
    </View>
  );

  render() {
    const { podcastStore } = this.props;
    const searchPhrase = podcastStore.searchPhrase;
    const searchResult = podcastStore.searchResult;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Find podcast</Text>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchPhrase}
            onChangeText={this.handleOnChange}
            placeholder="search phrase ..."
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={this.handleOnSubmitEditing}
          />
          <Button
            text={"Find"}
            style={styles.button}
            onPress={this.handleOnPress}
          />
          <Button
            text={"Clear"}
            style={styles.button}
            onPress={this.handleClearStatePhrase}
          />
        </View>
        <View style={styles.resultContainer}>
          <Text>{`search Phrase is: ${searchPhrase}`}</Text>
          <FlatList
            data={searchResult}
            renderItem={this.renderResultItem}
            keyExtractor={(item: ItemT, index: number) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  title: {
    marginTop: 30
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1
  },
  button: {
    marginLeft: 15
  }
});
