import React from "react";
import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "../button/button.component";
import { fetchPodcasts } from "../services/podcast/podcast.actions";

export class PodcastSearch extends React.Component {
  handleOnPress = () => {
    const { searchPhrase } = this.props;
    fetchPodcasts(searchPhrase);
  };

  handleClearStatePhrase = () => {
    const { clearSearchPhrase } = this.props;
    clearSearchPhrase();
  };

  handleOnChange = phrase => {
    this.props.setSearchPhrase(phrase);
  };

  handleOnSubmitEditing = () => {
    const { searchPhrase } = this.props;
    fetchPodcasts(searchPhrase);
  };

  renderResultItem = ({ item }) => (
    <View>
      <Text>{item.artistName}</Text>
    </View>
  );

  render() {
    const { searchPhrase, searchResult } = this.props;

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
          <Text>{`search Phrase is: ${this.props.searchPhrase}`}</Text>
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
