import React, { useEffect, useState } from "react";
import appStyle from '../../style';
import { Box } from "@react-native-material/core";
import { TextInput, Text, Button, Icon, Checkbox } from "react-native-paper"
import {
  Image,
  Pressable,
  ScrollView,
  BackHandler,
  Alert
} from "react-native";
import { SvgUri } from 'react-native-svg';
import * as SecureStore from "expo-secure-store";
import { Props } from "./types";
import { connect } from "react-redux";
import { loginRequest } from "@src/state/Auth/Actions";
const LoginPage: React.FC<Props> = (props) => {
  const { loading, error, requestLogin, themeMode } = props;
  const [pwdVisible, setPwdVisible] = useState(false);
  const [isSelected, setSelection] = useState('checked');
  const img = require('../../../assets/svg/new/logo.png');
  const img_dark = require('../../../assets/svg/new/logo_dark.png');
  //Payload
  const [password, setPassword] = useState("");
  const [emailOrUsername, setEmailOrUsername] = useState("");

  const login = () => {
    requestLogin({
      pathname: "/auth/login",
      data: { emailOrUsername: emailOrUsername, password: password },
    })
  }

  useEffect(() => {
    if (loading == "1" && error == null) {
      console.log("+++LogIn sucess");
      props.navigation.navigate("MainPage")
    }
    if (loading == "2") {
      Alert.alert('Hold on!', 'Login Failded. Please try again.' + error, [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
      ]);
      console.log("+++LogIn failed", error);
    }
  }, [loading])

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit App?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
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
  }, [])

  return (
    <ScrollView style={appStyle(themeMode).globalBackground}>
      <Box mt={100} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {themeMode === "light" ?
          (
            <Image
              resizeMode="cover"
              style={appStyle(themeMode).logo}
              source={img}
            />) :
          (<Image
            resizeMode="cover"
            style={appStyle(themeMode).logo}
            source={img_dark} />)
        }
      </Box>
      <Box mt={121.59}>
        <Text style={{ textAlign: "center" }}>
          <Text style={appStyle(themeMode).title}>Login to Go</Text>
          <Text style={[appStyle(themeMode).title, appStyle(themeMode).italic]}>Predict</Text>
        </Text>
        <Text style={appStyle(themeMode).subtitle} >Enter your registerd details below
        </Text>
      </Box>
      <Box mt={32} ml={32} mr={32}>
        <TextInput
          label={<Text style={appStyle(themeMode).textInputLabelOfEmail}>Email address or GPID</Text>}
          mode="outlined"
          placeholder="Example@gmail.com"
          value={emailOrUsername}
          outlineStyle={{ borderColor: themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)", borderRadius: 8 }}
          textColor={themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)"}
          onChangeText={(text) => setEmailOrUsername(text)}
          left={<TextInput.Icon style={{ marginTop: 15 }} icon={require('@src/assets/img/user.png')} color="#B9B9B9" size={24}></TextInput.Icon>}
          style={[appStyle(themeMode).textInput, { backgroundColor: themeMode === "light" ? "#F4F4F4" : "#1D1F21" }]}
        />
        <TextInput
          label={<Text style={appStyle(themeMode).textInputLabelOfPassword}>Password</Text>}
          mode="outlined"
          secureTextEntry={pwdVisible ? false : true}
          right={<TextInput.Icon
            icon={pwdVisible ? "eye" : require('@src/assets/svg/new/eye-slash.png')}
            color={themeMode === "light" ? "#141414" : "#E7E7E7"}
            size={24}
            style={{ marginTop: 15 }}
            onPress={() => pwdVisible ? setPwdVisible(false) : setPwdVisible(true)}
          />}
          outlineStyle={{ borderColor: themeMode === "light" ? "#141414" : "#E7E7E7", borderRadius: 8 }}
          onChangeText={text => setPassword(text)}
          style={[appStyle(themeMode).textInput, { marginTop: 20 }]}
          value={password}
          textColor={themeMode === "light" ? "#141414" : "#E7E7E7"}

        />
        <Box mt={20} mr={32} style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}>
          <Checkbox
            status={isSelected}
            onPress={() => isSelected == 'checked' ? setSelection('unchecked') : setSelection('checked')}
            style={appStyle(themeMode).checkbox}
          ></Checkbox>
          <Text variant="labelSmall">
            <Text style={appStyle(themeMode).font14Normal}>I have read and understood the </Text>
            <Pressable onPress={() => props.navigation.navigate("ResetPwd")}><Text style={appStyle(themeMode).font14BoldUnderline}>Terms of Use </Text></Pressable>
            <Text style={appStyle(themeMode).font14Normal}> and </Text>
            <Pressable onPress={() => props.navigation.navigate("ResetPwd")}><Text style={appStyle(themeMode).font14BoldUnderline}>Privacy Statement</Text></Pressable>
          </Text>
        </Box>
        <Button
          disabled={isSelected == "unchecked" ? true : false}
          style={{ marginTop: 20 }}
          buttonColor="#3CD981"
          mode="contained"
          contentStyle={{ height: 60, borderRadius: 8 }}
          onPress={() => login()}><Text style={{
            fontSize: 16,
            fontFamily: 'Visby CF',
            fontWeight: '700',
            color: "white"
          }}>Log In</Text></Button>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          <Text style={appStyle(themeMode).font16Normal}>Forgot your password? </Text>
          <Pressable onPress={() => props.navigation.navigate("ResetPwd")}>
            <Text style={appStyle(themeMode).font16BoldUnderline}>Reset Password</Text>
          </Pressable>
        </Text>
      </Box>
      <Box mt={40} mr={32} ml={32} mb={64} style={{ gap: 12 }}>
        <Pressable onPress={() => { props.navigation.navigate("TermsOfUser") }}>
          <Box borderBottom={1} pl={16} style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomColor: themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)"
          }}>
            <Text style={appStyle(themeMode).bottomList}>Terms of Use</Text>
            <Icon
              source="chevron-right"
              color={themeMode === "light" ? "black" : "white"}
              size={20}
            />
          </Box>
        </Pressable>
        <Pressable onPress={() => { props.navigation.navigate("PrivacyStatement") }}>
          <Box borderBottom={1} pl={16} style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomColor: themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)"
          }}>
            <Text style={appStyle(themeMode).bottomList}>Privacy Statement</Text>
            <Icon
              source="chevron-right"
              color={themeMode === "light" ? "black" : "white"}
              size={20}
            />
          </Box>
        </Pressable>
      </Box>
    </ScrollView>
  );
}

// export default LoginPage;
const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  themeMode: state.auth.themeMode,
});

const mapDispatchToProps = (dispatch: any) => ({
  requestLogin: (data: any) => dispatch(loginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
