import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import StateView from "react-native-easy-state-view";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <StateView
          enableButton
          buttonText="Refresh"
          title="No Content"
          description="Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis."
          onPress={() => {}}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
