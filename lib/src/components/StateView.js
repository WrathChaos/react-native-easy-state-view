import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Ripple from "react-native-material-ripple";
import styles from "./styles/StateView.style";

const defaultImageSource = require("../../../assets/snow-globe.png");

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
      buttonColor,
      imageSource,
      enableButton,
      subtitleStyle,
      rippleDuration,
      buttonComponent,
      imageResizeMode,
      buttonTextColor,
      buttonTextStyle,
      buttonContainerStyle,
      rippleContainerBorderRadius
    } = this.props;
    return (
      <View style={style || { top: 0 }}>
        <Image
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
          {title || " "}
        </Text>
        <Text
          style={[
            isCenter && styles.center,
            subtitleStyle || styles.subTitleStyle
          ]}
        >
          {subtitle || " "}
        </Text>
        {enableButton &&
          (buttonComponent || (
            <Ripple
              onPress={onPress}
              rippleColor={rippleColor || "white"}
              rippleDuration={rippleDuration || 750}
              style={
                buttonContainerStyle || [
                  styles.buttonContainer,
                  {
                    backgroundColor: buttonColor || "#FFAF10"
                  }
                ]
              }
              rippleContainerBorderRadius={rippleContainerBorderRadius || 16}
            >
              <Text
                style={
                  buttonTextStyle || [
                    styles.buttonTextContainer,
                    {
                      color: buttonTextColor || "white"
                    }
                  ]
                }
              >
                {buttonText || "Let's Go!"}
              </Text>
            </Ripple>
          ))}
      </View>
    );
  }
}
