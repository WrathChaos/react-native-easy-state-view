import { Platform } from "react-native";

export function buttonContainer(buttonColor) {
  return {
    margin: 36,
    paddingTop: 12,
    borderRadius: 16,
    paddingBottom: 12,
    backgroundColor: buttonColor || "#FFAF10"
  };
}

export function buttonTextContainer(buttonTextColor) {
  return {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: buttonTextColor || "white"
  };
}

export const _shadowStyle = shadowColor => {
  return {
    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowColor: shadowColor || "#000",
        shadowOffset: {
          width: 2,
          height: 3
        }
      },
      android: {
        elevation: 5
      }
    })
  };
};

export default {
  titleStyle: {
    padding: 16,
    fontSize: 18,
    letterSpacing: 0,
    textAlign: "center",
    color: "#6a758f"
  },
  container: { top: 0 },
  subTitleStyle: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: 13,
    letterSpacing: 0,
    textAlign: "center",
    color: "#6a758f"
  },
  imageStyle: { width: 150, height: 200 },
  center: {
    alignSelf: "center",
    alignContent: "center"
  }
};
