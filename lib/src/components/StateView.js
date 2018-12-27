import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import CachedImage from "react-native-easy-cached-image";
import styles from "./styles/StateView.style";

const defaultImageSource = require("../../../assets/snow-globe.png");

export default class StateView extends Component {
  render() {
    const {
      style,
      imageSource,
      imageStyle,
      imageResizeMode,
      titleStyle,
      subtitleStyle,
      title,
      isCenter,
      subtitle
    } = this.props;
    return (
      <View style={style || { top: 0 }}>
        <CachedImage
          style={[
            imageStyle || { width: 150, height: 200 },
            isCenter && styles.center
          ]}
          resizeMode={imageResizeMode || "contain"}
          source={imageSource || defaultImageSource}
        />
        <Text
          style={[isCenter && styles.center, titleStyle || styles.titleStyle]}
        >
          {title || "Oops, your connection is not stable.."}
        </Text>
        <Text
          style={[
            isCenter && styles.center,
            subtitleStyle || styles.subTitleStyle
          ]}
        >
          {subtitle ||
            "We could not reach the internet, try to check your network and let's try again :)"}
        </Text>
        <Button>Click Me</Button>
      </View>
    );
  }
}
