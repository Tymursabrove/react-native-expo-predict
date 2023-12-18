import React from "react";

import { Box } from "@react-native-material/core";
import { View, ScrollView, Dimensions } from "react-native";
import { Text, Button } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/stacks/types";
import { useNavigation } from "@react-navigation/native";
import appStyle from "../style";
import { connect } from "react-redux";
import { TermProps } from "./types";
const TermsOfUserPage: React.FC<TermProps> = (props) => {
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
      <Text style={appStyle(themeMode).termTitle}>Terms of Use</Text>
      <ScrollView
        persistentScrollbar={true}
        showsVerticalScrollIndicator={true}
        style={{
          marginTop: 27,
          marginLeft: 20,
          marginRight: 20,
          height: 500
        }}>
        <Box mt={27} style={{
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}>
          <Text style={appStyle(themeMode).termText}>
            Welcome to NEXDAY, (the “company”) and GoPredict application, hereafter the “application” designed to provide market predictions and trading strategies. By using our services, you agree to comply with and be bound by the following terms and conditions (the “Terms”). Please review them carefully.
          </Text>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              1. Acceptance of Terms
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Your access to and use of our services is conditioned upon your acceptance of and compliance with these Terms. If you do not agree to these Terms, you may not access or use our services.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              2. Service Description
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Our application publishes market predictions and trading strategies once daily, Monday through Friday, at a specific time before the opening bell. Our predictions are based on proprietary neural network algorithms that analyse financial instruments across a broad market, incorporating both fundamental and technical data.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              3. Accuracy and Performance
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Our predictions have been tested against live markets and historical data over the last 8 years, achieving an accuracy score of over 82%. However, it is crucial to understand that past performance is not indicative of future results. There are no guarantees that future predictions would achieve this kind of accuracy.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              4. No Advisory or Solicitation
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Our services are not to be interpreted as a solicitation for trading, or trading at any specific broker, intermediary or dealer nor should they be construed as an advisory service. The information and strategies provided are for informational purposes only.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              5. User Responsibility
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Users are solely responsible for how they use our predictions and strategies. We shall not be held liable for any damages or losses incurred as a result of using our services. Users should exercise their own judgment and seek advice from qualified professionals before making any investment decisions.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              6. Best Trading Opportunities (also known as “BTO”)
            </Text>
            <Text style={appStyle(themeMode).termText}>
              While our service may include information on what we believe to be the best trading opportunities, these are based on strict data modelling and have an accuracy rate of over 90%. Nonetheless, these opportunities are subject to the same disclaimers and limitations as our other predictions and strategies.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              7. Limitation of Liability
            </Text>
            <Text style={appStyle(themeMode).termText}>
              Under no circumstances shall NEXDAY be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use our services.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              8. Modifications to the Terms
            </Text>
            <Text style={appStyle(themeMode).termText}>
              We reserve the right to modify these Terms at any time. Your continued use of our services following the posting of changes will mean that you accept and agree to the changes.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              9. Governing Law
            </Text>
            <Text style={appStyle(themeMode).termText}>
              These Terms shall be governed by and construed in accordance with the laws as prescribed on our website and/or other contractual agreements without giving effect to any principles of conflicts of law.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              10. Contact Information
            </Text>
            <Text style={appStyle(themeMode).termText}>
              For any questions regarding these Terms, please contact us at gopredict@nexday.ai{"\n"}{"\n"}{"\n"}
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
        alignItems: "flex-end"
      }}>
        <Button
          mode="contained"
          textColor={themeMode == "light" ? "white" : "black"}
          buttonColor={themeMode == "light" ? "#141414" : "white"}
          style={{
            borderRadius: 8,
            width: "auto",
            height: 48,
          }}
          contentStyle={{ height: 48 }}
          onPress={() => { navigation.navigate("LogIn") }}
        ><Text style={{ fontFamily: 'Visby CF-Thin', fontWeight: '700', color: themeMode == "light" ? "white" : "black" }}>Close & GoPredict</Text></Button>
      </Box >
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

export default connect(mapStateToProps, null)(TermsOfUserPage);