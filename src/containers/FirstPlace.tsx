import React, { useState, useEffect } from "react";

import { Box, TextInput } from "@react-native-material/core";
import { View, Image } from "react-native";
import { ProgressBar } from 'react-native-paper';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/stacks/types";

const FirstPlace = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  //const [progress, setProgress] = useState(100);
  //let count = 0;
  // useEffect(() => {
  //   // code to run after render goes here
  //   // setInterval(() => {
  //   //   ++count;
  //   //   if (count == 100) {
  //   //     alert("this works.");
  //   //     console.log("this.work");
  //   //     gotoLogin();
  //   //   } else {
  //   //     setProgress(count);
  //   //   }
  //   // }, 0.1);
  // })
  setTimeout(() => { navigation.navigate("LogIn") }, 2000);
  return (
    <View>
      <Box mt={418}>
        <Image
          style={{
            width: 334.75,
            height: 57.5914,
            margin: "auto"
          }}
          source={require("@src/assets/svg/new/logo.svg")}
        />
      </Box>
      <Box mt={32}>
        <ProgressBar progress={1} color="#141414" style={{
          margin: "auto",
          width: 227,
          height: 6,
          borderRadius: 10
        }} />
      </Box>
    </View >
  );
};

export default FirstPlace;
