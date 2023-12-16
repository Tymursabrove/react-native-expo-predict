import React, { useEffect, useState } from "react";
import { Box } from "@react-native-material/core";
import { Badge, Icon, Text, TextInput, Avatar } from "react-native-paper";
import { Image, Pressable } from "react-native"
import appStyle from "../../style";
import SwitchToggle from 'react-native-switch-toggle';
import { ProfileProps } from '../types';
import { connect } from 'react-redux';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/stacks/types";
import { AUTH_TOKEN } from "@src/controllers/Users/constants";
import { DELETE_DATA } from "@src/state/Auth/Constants";
import { getChangeChartVisible } from "@src/state/Auth/Actions";
import * as secureStore from "expo-secure-store"
const lscache = require("lscache");

const Profile: React.FC<ProfileProps> = (props) => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const { themeMode, changeTheme, changeChartVisible, chartVisibility, username, userData, deleteData, logout } = props;
  let initialism = username.split(" ")[0].substring(0, 1) + username.split(" ")[1].substring(0, 1)


  const [isEnabledTheme, setIsEnabledTheme] = useState(themeMode == "light" ? false : true);
  const [isEnabledChart, setIsEnabledChart] = useState(chartVisibility);

  const switchTheme = () => {
    setIsEnabledTheme(previousState => !previousState);
    changeTheme({
      currentTheme: isEnabledTheme ? "light" : "dark"
    });
  }
  const switchChartVisible = () => {
    setIsEnabledChart(previousState => !previousState);
    changeChartVisible({ chartVisibility: !isEnabledChart })
  }


  const logOut = () => {
    //lscache.delete(AUTH_TOKEN);
    secureStore.deleteItemAsync(AUTH_TOKEN);
    deleteData();
    navigation.navigate("LogIn");
  }

  return (
    <Box style={appStyle(themeMode).globalBackground}>
      <Box mt={124} ml={32} mr={32} mb={120}>
        <Box style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}>
          <Box>
            <Avatar.Text size={80} label={initialism} color="#565656" style={{
              backgroundColor: props.themeMode == 'light' ? "#E7E7E7" : "#232627"
            }} />
            {props.themeMode == "light" ?
              <Image source={require("@src/assets/svg/new/avatar_reload.svg")} style={{ width: 24, height: 24, position: "absolute", right: 0, bottom: 0 }}></Image> :
              <Image source={require("@src/assets/svg/new/avatar_reload_black.svg")} style={{ width: 24, height: 24, position: "absolute", right: 0, bottom: 0 }}></Image>
            }
          </Box>
          <Text style={{
            // Jenny Wilson
            height: 48,
            color: props.themeMode == 'light' ? 'black' : 'white',
            fontSize: 24,
            fontFamily: 'Visby CF',
            fontWeight: '600',
            lineHeight: 48,
            marginLeft: 24
          }}>{username}</Text>
          <Box style={{
            width: 18,
            height: 18,
            marginLeft: 9.94
          }}>{props.themeMode == "light" ? <Image source={require("@src/assets/svg/new/edit2_white.svg")} style={{ width: 18, height: 18 }}>
          </Image> : <Image source={require("@src/assets/svg/new/edit2_black.svg")} style={{ width: 18, height: 18 }}>
          </Image>}
          </Box>

        </Box>
        <Box mt={32} id="form-section" style={{
          display: "flex",
          flexDirection: "column",
          gap: 20
        }}>
          <TextInput
            mode="outlined"
            label={<Text style={appStyle(themeMode).textInputLabelOfEmail}>Email address</Text>}
            value={userData.users[0].userDetails.email}
            disabled={true}
            style={appStyle(themeMode).textInput}
            outlineStyle={{ borderColor: props.themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)", borderRadius: 8 }}
            textColor={props.themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)"}
            right={<TextInput.Icon icon={require("@src/assets/svg/new/email.svg")} size={20} color="#434343" />}></TextInput>
          <TextInput
            mode="outlined"
            label={<Text style={appStyle(themeMode).textInputLabelOfEmail}>Phone Number</Text>}
            value={userData.users[0].userDetails.mobileNo}
            disabled={true}
            style={appStyle(themeMode).textInput}
            outlineStyle={{ borderColor: props.themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)", borderRadius: 8 }}
            textColor={props.themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)"}
            right={<TextInput.Icon icon={require("@src/assets/svg/new/phone.svg")} size={20} color="#434343" />}></TextInput>
          <Pressable onPress={() => navigation.navigate("ResetPwd")}>
            <TextInput
              style={appStyle(themeMode).textInput}
              editable={false}
              mode="outlined"
              value="Reset Password"
              outlineStyle={{ borderRadius: 8 }}
              textColor={props.themeMode === "light" ? "#141414" : "white"}
              outlineColor={props.themeMode === "light" ? "#F4F4F4" : "#1D1F21"}
              right={<TextInput.Icon icon={require("@src/assets/svg/new/lock.svg")} size={20} color={props.themeMode == "light" ? "black" : "white"} />}></TextInput>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("EventPage")}>
            <TextInput
              style={appStyle(themeMode).textInput}
              editable={false}
              mode="outlined"
              value="Events"
              outlineStyle={{ borderRadius: 8 }}
              textColor={props.themeMode === "light" ? "#141414" : "white"}
              outlineColor={props.themeMode === "light" ? "#F4F4F4" : "#1D1F21"}
              right={<TextInput.Icon icon={require("@src/assets/svg/new/bell_white.svg")} size={20} color={props.themeMode == "light" ? "black" : "white"} />}></TextInput>
          </Pressable>

          <Box style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 12,
            width: "100%"
          }}>
            <Box style={{
              width: 177,
              height: 60,
              borderRadius: 8,
              backgroundColor: "white",
              alignContent: "center",
              backgroundColor: props.themeMode == "light" ? "#FFFCFC" : "#232627",
              flexShrink: 2
            }}>
              <Box m={20} style={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={appStyle(themeMode).font16Normal}>Hide</Text>
                <SwitchToggle
                  switchOn={isEnabledChart}
                  circleColorOn="white"
                  circleColorOff="black"
                  backgroundColorOn="black"
                  backgroundColorOff="white"
                  duration={100}
                  containerStyle={{ width: 42, height: 24, borderWidth: 1, borderColor: "black", borderRadius: 12, padding: 2 }}
                  circleStyle={{ width: 20, height: 20, borderRadius: 10 }}
                  onPress={switchChartVisible} />
                <Text style={appStyle(themeMode).font16Normal}>Show</Text>
              </Box>
              <Text style={{
                position: "absolute",
                top: -6,
                left: 20,
                color: themeMode == "light" ? '#616264' : '#b1b1b1',
                fontSize: 12,
                fontFamily: 'Visby CF',
                fontWeight: '500'
              }}>Chart</Text>
            </Box>
            <Box style={{
              width: 177,
              height: 60,
              borderRadius: 8,
              backgroundColor: "white",
              alignContent: "center",
              backgroundColor: themeMode == "light" ? "#FFFCFC" : "#232627",
              flexShrink: 2
            }}>
              <Box m={20} style={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={appStyle(themeMode).font16Normal}>Light</Text>
                <SwitchToggle
                  switchOn={isEnabledTheme}
                  circleColorOn="white"
                  circleColorOff="black"
                  backgroundColorOn="black"
                  backgroundColorOff="white"
                  duration={100}
                  containerStyle={{ width: 42, height: 24, borderWidth: 1, borderColor: "black", borderRadius: 12, padding: 2 }}
                  circleStyle={{ width: 20, height: 20, borderRadius: 10 }}
                  onPress={switchTheme} />
                <Text style={appStyle(themeMode).font16Normal}>Dark</Text>
              </Box>
              <Text style={{
                position: "absolute",
                top: -6,
                left: 20,
                color: themeMode == "light" ? '#616264' : '#b1b1b1',
                fontSize: 12,
                fontFamily: 'Visby CF',
                fontWeight: '500'
              }}>App theme</Text>
            </Box>
          </Box>
          <Pressable onPress={logOut}>
            <Box style={{
              border: "solid 1px",
              borderColor: "#FE2828",
              borderRadius: 8,
              height: 60,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 12
            }}>
              <Icon source="login" color="#FE2828" size={16}></Icon>
              <Text style={{// Log out
                color: '#FE2828',
                fontSize: 16,
                fontFamily: 'Visby CF',
                fontWeight: '700',
                lineHeight: 60
              }}>Log out</Text>
            </Box>
          </Pressable>
          <Box style={{
            display: "relative",
            border: "solid 1px",
            borderColor: props.themeMode == "light" ? "rgba(20, 20, 20, 0.30)" : "rgba(231, 231, 231, 0.30)",
            borderRadius: 8
          }}>
            <Text style={{// Log out
              color: props.themeMode == "light" ? "rgba(20, 20, 20, 0.30)" : "rgba(231, 231, 231, 0.30)",
              fontSize: 16,
              fontFamily: 'Visby CF',
              fontWeight: '700',
              lineHeight: 60,
              textAlign: "center"
            }}>gopredict@nexday.ai</Text>
            <Box style={{
              position: "absolute",
              top: -6,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}>
              <Text style={{
                fontSize: 12,
                fontFamily: 'Visby CF',
                fontWeight: '500',
                backgroundColor: props.themeMode == "light" ? "#F4F4F4" : "#1D1F21",
                color: props.themeMode == "light" ? "rgba(20, 20, 20, 0.30)" : "rgba(231, 231, 231, 0.30)"
              }}>contact us</Text>
            </Box>
          </Box>
        </Box>
      </Box >
    </Box >

  )
}
const mapStateToProps = (state: any) => ({
  themeMode: state.auth.themeMode,
  username: state.auth.username,
  userData: state.auth.userData,
  logout: state.auth.logout,
  chartVisibility: state.auth.chartVisibility
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeTheme: (changedThemeStatus: any) => dispatch({ type: "CHANGE_THEME", payload: changedThemeStatus }),
    changeChartVisible: (status: any) => { dispatch(getChangeChartVisible(status)) },
    deleteData: () => dispatch({ type: DELETE_DATA })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);