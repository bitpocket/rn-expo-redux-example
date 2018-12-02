import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export class Button extends React.Component {
  handleOnPress = () => {
    const { onPress } = this.props;
    onPress && onPress();
  };

  render() {
    const { text, style, onPress } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={this.handleOnPress}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 15,
    justifyContent: "center"
  }
});
