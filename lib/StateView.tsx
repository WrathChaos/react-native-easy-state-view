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
import styles, { _shadowStyle } from "./StateView.style";
import RNBounceable from "@freakycoder/react-native-bounceable";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface IStateViewProps {
  style?: CustomStyleProp;
  title: string;
  description?: string;
  isCenter?: boolean;
  buttonText?: string;
  buttonColor?: string;
  enableButton?: boolean;
  imageSource?: any;
  buttonComponent?: React.ReactNode;
  shadowStyle?: CustomStyleProp;
  titleStyle?: CustomTextStyleProp;
  imageStyle?: CustomImageStyleProp;
  descriptionStyle?: CustomTextStyleProp;
  buttonContainerStyle?: CustomStyleProp;
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
  buttonTextStyle,
  buttonContainerStyle,
  isCenter = true,
  enableButton = false,
  ...rest
}) => {
  const renderButton = () =>
    enableButton &&
    (buttonComponent || (
      <RNBounceable
        bounceEffect={0.95}
        {...rest}
        style={[styles.buttonContainerStyle, buttonContainerStyle]}
        onPress={onPress}
      >
        <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
          {buttonText}
        </Text>
      </RNBounceable>
    ));

  const renderDescription = () => (
    <Text
      style={[
        isCenter && styles.center,
        styles.descriptionStyle,
        descriptionStyle,
      ]}
    >
      {description}
    </Text>
  );

  const renderTitle = () => (
    <Text style={[isCenter && styles.center, styles.titleStyle, titleStyle]}>
      {title}
    </Text>
  );

  const renderImage = () => (
    <Image
      resizeMode="cover"
      source={imageSource || require("./undraw-page-not-found.png")}
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
