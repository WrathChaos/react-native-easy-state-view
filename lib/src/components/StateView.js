import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CachedImage from "react-native-easy-cached-image";
import Ripple from "react-native-material-ripple";
import styles from "./styles/StateView.style";

const defaultImageSource = require("../../../assets/cookie.png");

export default class StateView extends Component {
  render() {
    const {
      style,
      title,
      onPress,
      subtitle,
      isCenter,
      imageStyle,
      titleStyle,
      buttonText,
      rippleColor,
      imageSource,
      enableButton,
      subtitleStyle,
      rippleDuration,
      buttonComponent,
      imageResizeMode,
      buttonTextStyle,
      buttonContainerStyle,
      rippleContainerBorderRadius
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
        {enableButton &&
          (buttonComponent || (
            <Ripple
              onPress={onPress}
              rippleColor={rippleColor || "white"}
              rippleDuration={rippleDuration || 750}
              style={buttonContainerStyle || styles.buttonContainer}
              rippleContainerBorderRadius={rippleContainerBorderRadius || 16}
            >
              <Text style={buttonTextStyle || styles.buttonTextContainer}>
                {buttonText || "Let's Go!"}
              </Text>
            </Ripple>
          ))}
      </View>
    );
  }
}
