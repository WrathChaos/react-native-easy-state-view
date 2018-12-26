import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StateView from "./lib/src/components/StateView";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <StateView
            isCenter
            style={{ top: "40%" }}
            title="Henüz favoriniz yok"
            subtitle="Eklediğiniz bütün favorilerinize buradan erişebilir ve etkileşim sağlayabilirsiniz :)"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
