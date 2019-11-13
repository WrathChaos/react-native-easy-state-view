import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import StateView from "react-native-easy-state-view";
import { AppleHeader } from "@freakycoder/react-native-header-view";

const state3Src = require("./assets/states/state3.jpg");

export default class ExampleScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <AppleHeader
            largeTitle="Meditation"
            imageSource={require("./assets/icons/snow-globe.png")}
          />
          <View>
            <StateView
              isCenter
              enableButton
              buttonColor="#a92a88"
              buttonText="Let's Relax"
              style={{ top: "20%" }}
              imageSource={state3Src}
              title="Time to chill"
              subtitle="It's time for relaxation and chill. Release the stress and get a better day and a full peaceful for the night. Let us guide you in this adventure"
              titleStyle={{ fontSize: 20, color: "#ff7bad", paddingBottom: 16 }}
              imageStyle={{ height: 300, width: 350 }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
