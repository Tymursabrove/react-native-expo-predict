/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "@src/stacks";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./state/store";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("@src/assets/font/Urbanist-Regular.ttf"),
    "Urbanist-Light": require("@src/assets/font/Urbanist-Light.ttf"),
    "Urbanist-Thin": require("@src/assets/font/Urbanist-Thin.ttf"),
    "Urbanist-ExtraLight": require("@src/assets/font/Urbanist-ExtraLight.ttf"),
    "Urbanist-Medium": require("@src/assets/font/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("@src/assets/font/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("@src/assets/font/Urbanist-Bold.ttf"),
    "Urbanist-ExtraBold": require("@src/assets/font/Urbanist-ExtraBold.ttf"),
    "Urbanist-Black": require("@src/assets/font/Urbanist-Black.ttf"),
    "Visby CF": require('@src/assets/font/visbycf/VisbyRegular.otf'),
    "Visby CF-Bold": require('@src/assets/font/visbycf/VisbyBold.otf'),
    "Visby CF-DemiBold": require('@src/assets/font/visbycf/VisbySemibold.otf'),
    "Visby CF-ExtraBold": require('@src/assets/font/visbycf/VisbyExtrabold.otf'),
    "Visby CF-heavy": require('@src/assets/font/visbycf/VisbyHeavy.otf'),
    "Visby CF-MEDIUM": require('@src/assets/font/visbycf/VisbyMedium.otf'),
    "Visby CF-Thin": require('@src/assets/font/visbycf/VisbyThin.otf')
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
