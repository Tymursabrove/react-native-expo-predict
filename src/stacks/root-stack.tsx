import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import {
  LoginPage,
  MailVerify,
  ResetPwdPage
} from "@src/containers/AuthPage";
import { MainPage } from "@src/containers/MainPage";
import TermsOfUserPage from "@src/containers/ListPage/TermsOfUserPage";
import PrivacyStatement from "@src/containers/ListPage/PrivacyStatement";
import FirstPlace from "@src/containers/FirstPlace";
import EventPage from "@src/containers/EventPage/EventPage";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="FirstPlace"
  >
    <Stack.Screen name="LogIn" component={LoginPage} />
    <Stack.Screen name="ResetPwd" component={ResetPwdPage} />
    <Stack.Screen name="MailVerify" component={MailVerify} />
    <Stack.Screen name="MainPage" component={MainPage} />
    <Stack.Screen name="TermsOfUser" component={TermsOfUserPage} />
    <Stack.Screen name="PrivacyStatement" component={PrivacyStatement} />
    <Stack.Screen name="FirstPlace" component={FirstPlace} />
    <Stack.Screen name="EventPage" component={EventPage} />
  </Stack.Navigator>
);

export default RootStack;
