import * as React from "react";
import {
  Text,
  View,
  Image,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, {
  _shadowStyle,
  _buttonTextStyle,
  _buttonContainerStyle,
} from "./StateView.style";
import RNBounceable from "@freakycoder/react-native-bounceable";
// ? Default Asset
const defaultImageSource = require("./assets/state3.jpg");

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface IStateViewProps {
  style?: CustomStyleProp;
  title?: string;
  description?: string;
  isCenter?: boolean;
  buttonText?: string;
  buttonColor?: string;
  shadowColor?: string;
  enableButton?: boolean;
  imageResizeMode?: string;
  buttonTextColor?: string;
  rippleContainerBorderRadius: number;
  buttonComponent?: React.ReactNode;
  shadowStyle?: CustomStyleProp;
  titleStyle?: CustomTextStyleProp;
  imageStyle?: CustomImageStyleProp;
  imageSource?: any;
  descriptionStyle?: CustomTextStyleProp;
  buttonContainerStyle: CustomStyleProp;
  buttonTextStyle?: CustomTextStyleProp;
  onPress: () => void;
}

const StateView: React.FC<IStateViewProps> = ({
  style,
  title,
  onPress,
  description,
  imageStyle,
  titleStyle,
  buttonText,
  shadowStyle,
  imageSource,
  descriptionStyle,
  buttonComponent,
  imageResizeMode,
  buttonTextStyle,
  buttonContainerStyle,
  rippleContainerBorderRadius,
  isCenter = true,
  enableButton = false,
  buttonColor = "#a92a88",
  shadowColor = "#67005f",
  buttonTextColor = "#fff",
  ...rest
}) => {
  const renderButton = () =>
    enableButton &&
    (buttonComponent || (
      <RNBounceable
        style={[_buttonContainerStyle(buttonColor), buttonContainerStyle]}
        onPress={onPress}
      >
        <Text style={[_buttonTextStyle(buttonTextColor), buttonTextStyle]}>
          {buttonText || " "}
        </Text>
      </RNBounceable>
    ));

  const renderDescription = () => (
    <Text
      style={[
        isCenter && styles.center,
        descriptionStyle || styles.descriptionStyle,
      ]}
    >
      {description}
    </Text>
  );

  const renderTitle = () => (
    <Text style={[isCenter && styles.center, titleStyle || styles.titleStyle]}>
      {title}
    </Text>
  );

  const renderImage = () => (
    <Image
      source={imageSource}
      style={[styles.imageStyle, imageStyle, isCenter && styles.center]}
      {...rest}
    />
  );

  return (
    <View style={[styles.container, style]}>
      {renderImage()}
      {renderTitle()}
      {renderDescription()}
      {renderButton()}
    </View>
  );
};

export default StateView;
