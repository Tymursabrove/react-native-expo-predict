import React, { useEffect, useState } from "react";

import { Box, Text, TextInput } from "@react-native-material/core";
import { View, Image, Dimensions, Pressable, ScrollView, BackHandler } from "react-native";
import { Divider, Icon } from 'react-native-paper';
import { AppBar } from "@react-native-material/core"
import appStyle from "../style";
import { connect } from "react-redux"
import { Props } from "./types";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/stacks/types";

const EventPage: React.FC<Props> = (props) => {
  const { themeMode } = props;
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  let windowHeight = Dimensions.get("window").height;
  windowHeight = windowHeight - 60;
  console.log(windowHeight);
  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
      backHandler.remove();
    }
  }, [])
  return (
    <Box style={{
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }}>
      <ScrollView style={{ height: windowHeight, overflow: "scroll", marginTop: 60 }}>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
        <Box id="passage">
          <Box p={20} style={appStyle(themeMode).eventPassage}>
            <Text style={appStyle(themeMode).eventTitle}>Copy Trade</Text>
            <Text style={appStyle(themeMode).eventContent}>Lorem ipsum dolor sit amet consectetur. Proin aliquet pretium urna qua faucibus. Nisi dignissim dictumst leo tellus sedum mi</Text>
            <Text style={appStyle(themeMode).eventDate}>2023 - 11 - 04  @  11:32 AM</Text>
          </Box>
          <Divider />
        </Box>
      </ScrollView>

      <Box style={{
        position: "absolute",
        width: "100%",
        height: 60,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
      }}>
        <AppBar
          title="Events"
          centerTitle={true}
          color={themeMode == "light" ? "#F4F4F4" : "#1D1F21"}
          enableColorOnDark
          leading={<Pressable onPress={() => navigation.navigate("MainPage")}>{themeMode === "light" ? <Image source={require("@src/assets/svg/new/back.png")} style={{ width: 32, height: 32, marginLeft: 20 }}></Image> : <Image source={require("@src/assets/svg/new/back_black.png")} style={{ width: 32, height: 32, marginLeft: 20 }}></Image>}</Pressable>}>
        </AppBar>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => ({
  themeMode: state.auth.themeMode
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeTheme: (changedThemeStatus: any) => dispatch({ type: "CHANGE_THEME", payload: changedThemeStatus })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
