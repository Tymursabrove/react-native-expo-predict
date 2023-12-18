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
    "Visby CF": require('@src/assets/font/visbycf/Fontspring-DEMO-visbycf-regular.otf'),
    "Visby CF-Bold": require('@src/assets/font/visbycf/Fontspring-DEMO-visbycf-bold.otf'),
    "Visby CF-DemiBold": require('@src/assets/font/visbycf/Fontspring-DEMO-visbycf-demibold.otf'),
    "Visby CF-ExtraBold": require('@src/assets/font/visbycf/Fontspring-DEMO-visbycf-extrabold.otf'),
    "Visby CF-heavy": require('@src/assets/font/visbycf/Fontspring-DEMO-visbycf-heavy.otf'),
    "Visby CF-MEDIUM": require('@src/assets/font/visbycf/Fontspring-DEMO-visbycf-medium.otf'),
    "Visby CF-Thin": require('@src/assets/font/visbycf/Fontspring-DEMO-visbycf-thin.otf')
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
