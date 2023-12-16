import React, { useState } from "react";

import { Box, TextInput } from "@react-native-material/core";
import { View, ScrollView, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/stacks/types";
import { useNavigation } from "@react-navigation/native";
import { Text, Button } from 'react-native-paper';
import appStyle from "../style";
import { PrivacyProps } from "./types";
import { connect } from 'react-redux';
import { LinearGradient } from "expo-linear-gradient";

const PrivacyStatement: React.FC<PrivacyProps> = (props) => {
  const { themeMode } = props;
  const { width, height } = Dimensions.get("window");
  let scrollHeight = height - 1000;
  const scrollStyle = () => {
    return {
      marginTop: 27,
      marginLeft: 20,
      marginRight: 20,
      height: scrollHeight
    }
  }
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  return (
    <Box style={appStyle(themeMode).background}>
      <Text style={appStyle(themeMode).termTitle}>Privacy Statement</Text>
      <ScrollView
        persistentScrollbar="true"
        showsVerticalScrollIndicator="true"
        style={{
          marginTop: 27,
          marginLeft: 20,
          marginRight: 20,
          height: "78vh"
        }}>
        <Box mt={27} style={{
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Heading
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
            </Text>
          </Box>
        </Box>

      </ScrollView>
      <Box style={{
        width: "100%",
        height: 34
      }}></Box>
      <LinearGradient
        colors={themeMode == "light" ? ["rgba(244, 244, 244, 0)", "#F4F4F4"] : ["rgba(29, 31, 33, 0)", "#1D1F21"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 30,
          height: 50
        }}
      />
      <Box style={{
        position: "absolute",
        bottom: 34,
        right: 21,
        display: "flex",
        alignItems: "end"
      }}>
        <Button
          mode="contained"
          textColor={themeMode == "light" ? "white" : "black"}
          buttonColor={themeMode == "light" ? "#141414" : "white"}
          style={{
            borderRadius: 8,
            width: 167,
            height: 48,
          }}
          contentStyle={{ height: 48 }}
          onPress={() => { navigation.navigate("LogIn") }}
        ><Text style={{ fontFamily: 'Visby CF-thin', fontWeight: '700', color: themeMode == "light" ? "white" : "black" }}>Close & GoPredict</Text></Button>
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

export default connect(mapStateToProps, null)(PrivacyStatement);
