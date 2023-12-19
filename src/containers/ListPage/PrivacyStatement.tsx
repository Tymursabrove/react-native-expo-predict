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
        persistentScrollbar={true}
        showsVerticalScrollIndicator={true}
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
              Introduction
            </Text>
            <Text style={appStyle(themeMode).termText}>
              NEXDAY ("we", "our", or "us") is committed to protecting the privacy and security of your information. This Privacy Statement explains how we collect, use, disclose, and safeguard your information when you engage with our services. Our services are primarily designed for business-to-business interactions, and our clients primarily include financial institutions such as Brokers, Dealers, Money Managers, Banks, etc. Although the end users of our software are Traders and Investors, we do not have a direct business relationship with them as we only sell our software to the financial entities through which they trade or invest.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Information Collection
            </Text>
            <Text style={appStyle(themeMode).termText}>
              We collect personal information from both financial institutions and end users, which may include names, email addresses, contact details, and other relevant information necessary for the provision of our services. This information is collected to facilitate the delivery of our market predictions and trading strategies, to improve our services, and to maintain a secure and optimized user experience.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Use of Information
            </Text>
            <Text style={appStyle(themeMode).termText}>
              The personal information collected is used to:{"\n"}
              1. Provide, operate, and maintain our services{"\n"}
              2. Improve, personalize, and expand our services{"\n"}
              3. Understand and analyse how you use our services{"\n"}
              4. Develop new products, services, features, and functionality{"\n"}
              5. Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes{"\n"}
              6. Send you emails{"\n"}
              7. Find and prevent fraud{"\n"}
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Cookies and Tracking Technologies:
            </Text>
            <Text style={appStyle(themeMode).termText}>
              NEXDAY employs both temporary and permanent cookies to enhance the User experience of our Services. Temporary cookies are deleted upon closing the browser, while selecting the 'Stay logged in' option will store a permanent cookie on your computer for quicker access to our Services. This option also allows NEXDAY to maintain and recall individual User preferences.{"\n"}
              {"\n"}Technologies like cookies, web beacons, tags, and scripts may be used by NEXDAY or our service providers for analytical purposes, site administration, tracking usage, and gathering demographic information about our user base. We may receive reports from these technologies on both an individual and aggregate basis.{"\n"}{"\n"}
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Information Sharing
            </Text>
            <Text style={appStyle(themeMode).termText}>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except when we believe release is required to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Security of Information
            </Text>
            <Text style={appStyle(themeMode).termText}>
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. Despite these measures, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our site.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Privacy of Minors
            </Text>
            <Text style={appStyle(themeMode).termText}>
              We do not offer our services to minors, and we do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected personal information from a minor without verification of parental consent, we will take steps to remove that information from our servers.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Changes to this Privacy Statement
            </Text>
            <Text style={appStyle(themeMode).termText}>
              We reserve the right to modify this Privacy Statement at any time. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
            </Text>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <Text
              style={appStyle(themeMode).termSubitle}>
              Contact Us
            </Text>
            <Text style={appStyle(themeMode).termText}>
              If you have any questions about this Privacy Statement, the practices of this site, or your dealings with this site, please contact us at Gopredict@nexday.ai{"\n"}{"\n"}
              This document was last updated on 24 November 2023
              {"\n"}{"\n"}{"\n"}
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
            width: "auto",
            height: 48,
          }}
          contentStyle={{ height: 48 }}
          onPress={() => { navigation.navigate("LogIn") }}
        ><Text style={{ fontFamily: 'Visby CF-Thin', fontWeight: '700', color: themeMode == "light" ? "white" : "black" }}>Close & GoPredict</Text></Button>
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
