import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserNameFromAuth } from '@src/state/Auth/Actions';
import { Box, Flex } from "@react-native-material/core";
import { View, Image, StyleSheet, Platform, Pressable, BackHandler, Alert } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Badge, Button, DataTable, Text, Icon, BottomNavigation, TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/stacks/types";
import { MainpageProps } from "./types";
import appStyle from "../style";
import { AUTH_TOKEN } from "@src/controllers/Users/constants";
import { DELETE_DATA } from "@src/state/Auth/Constants";
import * as secureStore from "expo-secure-store";
import Tradebook from "./NavPages/Tradebook";
import Profile from "./NavPages/Profile"
import Predictions from "./NavPages/Prediction";
import CopyTrade from "./NavPages/CopyTrade";

const tableData = [
  {
    instrument: "Cattle Feeder",
    high: "1.234",
    trend: "down",
    low: "1.111"
  },
  {
    instrument: "Cattle Feeder",
    high: "1.234",
    trend: "down",
    low: "1.111"
  },
  {
    instrument: "Cattle Feeder",
    high: "1.234",
    trend: "down",
    low: "1.111"
  }
]

const MainPage: React.FC<MainpageProps> = (props) => {
  const { themeMode, getUsername, username, tableData, deleteData } = props;

  const [status, setStatus] = useState(0);
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  useEffect(() => {
    getUsername();
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to logout?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES', onPress: () => {
            secureStore.deleteItemAsync(AUTH_TOKEN);
            navigation.navigate("LogIn");

          }
        },
      ]);
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
  }, []);
  return (
    <Box style={{ height: "100%", width: "100%" }}>
      {status == 0 && tableData.data && <Predictions></Predictions>}
      {status == 1 && <Tradebook></Tradebook>}
      {status == 2 && <CopyTrade></CopyTrade>}
      {status == 3 && <Profile></Profile>}
      <Box style={{
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 22,
        borderRadius: 400,
        backgroundColor: themeMode == "light" ? "#141414" : "#E7E7E7",
        height: 72,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8
      }}>
        <Pressable onPress={() => setStatus(0)}>
          {status == 0 ? <Box style={appStyle(themeMode).selectedTab}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/prediction_black.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/prediction_white.png")} style={{ width: 24, height: 24 }}></Image>
            }
            <Text style={appStyle(themeMode).navbarText}>predictions</Text>
          </Box> : <Box style={[appStyle(themeMode).normalTab, { marginLeft: 30 }]}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/prediction_white.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/prediction_black.png")} style={{ width: 24, height: 24 }}></Image>}
          </Box>}
        </Pressable>
        <Pressable onPress={() => setStatus(1)}>
          {status == 1 ? <Box style={appStyle(themeMode).selectedTab}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/Tradebook_black.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/Tradebook_white.png")} style={{ width: 24, height: 24 }}></Image>}
            <Text style={appStyle(themeMode).navbarText}>Tradebook</Text>
          </Box> : <Box style={appStyle(themeMode).normalTab}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/Tradebook_white.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/Tradebook_black.png")} style={{ width: 24, height: 24 }}></Image>}
          </Box>}
        </Pressable>
        <Pressable onPress={() => setStatus(2)}>
          {status == 2 ? <Box style={appStyle(themeMode).selectedTab}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/CopyTrade_black.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/CopyTrade_white.png")} style={{ width: 24, height: 24 }}></Image>}
            <Text style={appStyle(themeMode).navbarText}>Copytrade</Text>
          </Box> : <Box style={appStyle(themeMode).normalTab}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/CopyTrade_white.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/CopyTrade_black.png")} style={{ width: 24, height: 24 }}></Image>}
          </Box>}
        </Pressable>
        <Pressable onPress={() => setStatus(3)}>
          {status == 3 ? <Box style={appStyle(themeMode).selectedTab}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/Profile_black.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/Profile_white.png")} style={{ width: 24, height: 24 }}></Image>}
            <Text style={appStyle(themeMode).navbarText}>Profile</Text>
          </Box> : <Box style={[appStyle(themeMode).normalTab, { marginRight: 30 }]}>
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/Profile_white.png")} style={{ width: 24, height: 24 }}></Image> :
              <Image source={require("@src/assets/svg/new/Profile_black.png")} style={{ width: 24, height: 24 }}></Image>}
          </Box>}
        </Pressable>
      </Box>
    </Box >
  )


};

MainPage.propTypes = {
  getUsername: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired
}
//export default MainPage;

const mapStateToProps = (state: any) => ({
  themeMode: state.auth.themeMode,
  username: state.auth.username,
  tableData: state.auth.tableData
});

const mapDispatchToProps = (dispatch: any) => ({
  getUsername: () => dispatch(getUserNameFromAuth()),
  deleteData: () => dispatch({ type: DELETE_DATA })
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);