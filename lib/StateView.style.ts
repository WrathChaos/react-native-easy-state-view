import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";

export function _buttonContainerStyle(buttonColor: string): ViewStyle {
  return {
    margin: 36,
    paddingTop: 12,
    borderRadius: 16,
    paddingBottom: 12,
    backgroundColor: buttonColor || "#FFAF10",
  };
}

export function _buttonTextStyle(buttonTextColor: string): TextStyle {
  return {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: buttonTextColor || "white",
  };
}

export const _shadowStyle = (shadowColor: string): ViewStyle => {
  return {
    shadowColor,
    shadowRadius: 9,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  };
};

interface Style {
  titleStyle: TextStyle;
  descriptionStyle: TextStyle;
  container: ViewStyle;
  imageStyle: ImageStyle;
  center: ImageStyle;
}

export default StyleSheet.create<Style>({
  titleStyle: {
    padding: 16,
    fontSize: 18,
    letterSpacing: 0,
    textAlign: "center",
    color: "#6a758f",
  },
  container: {
    top: 0,
  },
  descriptionStyle: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 13,
    letterSpacing: 0,
    textAlign: "center",
    color: "#6a758f",
  },
  imageStyle: {
    width: 150,
    height: 200,
  },
  center: {
    alignSelf: "center",
    alignContent: "center",
  },
});
