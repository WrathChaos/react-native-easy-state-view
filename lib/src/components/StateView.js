import React from "react";
import { Image, View, Text } from "react-native";
import PropTypes from "prop-types";
import Ripple from "react-native-material-ripple";
import styles, {
  buttonContainer,
  buttonTextContainer
} from "./styles/StateView.style";

const defaultImageSource = require("../../../assets/snow-globe.png");

const StateView = props => {
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
  } = props;
  return (
    <View style={style || styles.container}>
      <Image
        style={[imageStyle || styles.imageStyle, isCenter && styles.center]}
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
            style={buttonContainerStyle || buttonContainer(buttonColor)}
            rippleContainerBorderRadius={rippleContainerBorderRadius || 16}
          >
            <Text
              style={buttonTextStyle || buttonTextContainer(buttonTextColor)}
            >
              {buttonText || " "}
            </Text>
          </Ripple>
        ))}
    </View>
  );
};

StateView.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func,
  subtitle: PropTypes.string,
  isCenter: PropTypes.bool,
  imageStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  buttonText: PropTypes.string,
  rippleColor: PropTypes.string,
  buttonColor: PropTypes.string,
  enableButton: PropTypes.bool,
  subtitleStyle: PropTypes.object,
  rippleDuration: PropTypes.number,
  buttonComponent: PropTypes.element,
  imageResizeMode: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonTextStyle: PropTypes.object,
  buttonContainerStyle: PropTypes.object,
  rippleContainerBorderRadius: PropTypes.number
};

StateView.defaultProps = {
  style: styles.container,
  title: "",
  onPress: () => {},
  subtitle: "",
  isCenter: true,
  imageStyle: styles.imageStyle,
  titleStyle: styles.titleStyle,
  buttonText: " ",
  rippleColor: "white",
  buttonColor: "#FFAF10",
  enableButton: false,
  subtitleStyle: styles.subTitleStyle,
  rippleDuration: 750,
  buttonComponent: null,
  imageResizeMode: "contain",
  buttonTextColor: "white",
  buttonTextStyle: styles.buttonTextStyle,
  buttonContainerStyle: styles.buttonContainerStyle,
  rippleContainerBorderRadius: 16
};

export default StateView;
