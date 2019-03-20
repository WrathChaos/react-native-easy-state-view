import React from "react";
import { Image, View, Text } from "react-native";
import PropTypes from "prop-types";
import Ripple from "react-native-material-ripple";
import styles, {
  _shadowStyle,
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
    shadowStyle,
    buttonColor,
    shadowColor,
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
            style={[
              shadowStyle || _shadowStyle(shadowColor),
              buttonContainerStyle || buttonContainer(buttonColor)
            ]}
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
  title: "",
  subtitle: "",
  isCenter: true,
  buttonText: " ",
  onPress: () => {},
  rippleColor: "white",
  enableButton: false,
  rippleDuration: 750,
  buttonComponent: null,
  buttonColor: "#FFAF10",
  style: styles.container,
  buttonTextColor: "white",
  imageResizeMode: "contain",
  imageStyle: styles.imageStyle,
  titleStyle: styles.titleStyle,
  rippleContainerBorderRadius: 16,
  subtitleStyle: styles.subTitleStyle,
  buttonTextStyle: styles.buttonTextStyle,
  buttonContainerStyle: styles.buttonContainerStyle
};

export default StateView;
