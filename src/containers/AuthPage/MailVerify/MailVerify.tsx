import React, { useState, useEffect, useRef } from "react";
import appStyle from '../../style.js';
import { Box } from "@react-native-material/core";
import { TextInput, Text, Button, Icon } from "react-native-paper"
import {
  Image,
  Pressable
} from "react-native";

import * as SecureStore from "expo-secure-store";
import { connect } from "react-redux";
import { loginRequest } from "@src/state/Auth/Actions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/stacks/types";
import { Props } from "./types.js"

import { SafeAreaView, Text as TextN, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 }
});

const setToStore = async (title: string, value: string) => {
  await SecureStore.setItemAsync(title, value);
};

const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

const MailVerify: React.FC<Props> = (props) => {
  const { themeMode } = props;
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [what, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isValid, setIsValid] = useState(false);
  const [isConfirmValid, setIsConfirmValid] = useState(false);
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [pwdVisible, setPwdVisible] = useState(false);
  const [confirmPwdVisible, setConfirmPwdVisible] = useState(false);
  const [isPwdFocused, setIsPwdFocused] = useState(false);
  const [isConfirmPwdFocused, setIsConfirmPwdFocused] = useState(false);
  const [message, setMessage] = useState("");

  const pwdRef = useRef(null);
  const confirmPwdRef = useRef(null);
  const update = useRef(null);
  const validatePassword = (text: string) => {
    const regex = /^(?=.*[0-9])(?=.*[^a-zA-Z0-9])(.{8,})$/;
    const valid = regex.test(text);
    setIsValid(valid);
    setPwd(text);
  }

  const validateConfirmPassword = (text: string) => {
    const regex = /^(?=.*[0-9])(?=.*[^a-zA-Z0-9])(.{8,})$/;
    const valid = regex.test(text);
    setIsConfirmValid(valid);
    setConfirmPwd(text)
  }

  const checkTwoPwd = () => {
    if (!isValid) {
      console.log("Set password correctly");
      setMessage("Set password correctly")
      return;
    }
    if (!isConfirmValid) {
      console.log("Set confirm password correctly");
      setMessage("Set confirm password correctly");
      return;
    }
    if (pwd !== confirmPwd) {
      console.log("Two password is not the same.");
      setMessage("Two password is not the same.");
      return;
    }
    navigation.navigate("MainPage");
  }

  useEffect(() => {
    setMessage("");
  }
    , [isPwdFocused, isConfirmPwdFocused])
  return (
    <Box style={appStyle(themeMode).globalBackground}>
      <Box>
        {themeMode === "light" ?
          (<Image
            style={appStyle(themeMode).logo}
            source={require("@src/assets/svg/new/logo.svg")}
          />) :
          (<Image
            style={appStyle(themeMode).logo}
            source={require("@src/assets/svg/new/logo_dark.svg")}
          />)}
      </Box>
      <Box mt={61.59}>
        <Text style={appStyle(themeMode).title}>
          Request sent successfully!
        </Text>
        <Text style={appStyle(themeMode).subtitle} >
          We've sent a confirmation code to  your email.<br />
          Please enter the code in the box below to <br />
          continue with the password change
        </Text>
      </Box>
      <Box ml={32} mr={32} mt={32}>
        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...what}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <TextN
                key={index}
                style={[appStyle(themeMode).verificationCell, isFocused && appStyle(themeMode).focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </TextN>
            )}
          />
        </SafeAreaView>
      </Box>
      <Box ml={32} mr={32} id="form-section">
        <TextInput ref={pwdRef}
          label={<Text style={appStyle(themeMode).textInputLabel}>New Password</Text>}
          mode="outlined"
          secureTextEntry={pwdVisible ? false : true}
          onFocus={() => setIsPwdFocused(true)}
          onBlur={() => setIsPwdFocused(false)}
          value={pwd}
          right={<TextInput.Icon
            icon={pwdVisible ? "eye" : require('@src/assets/svg/new/eye-slash.svg')}
            color={themeMode === "light" ? "#141414" : "#E7E7E7"}
            onPress={() => pwdVisible ? setPwdVisible(false) : setPwdVisible(true)}
          />}
          outlineStyle={{ borderColor: isPwdFocused == true ? isValid ? "#B9B9B9" : "red" : "#B9B9B9", borderRadius: 8 }}
          onChangeText={text => { validatePassword(text) }}
          selectionColor="#E7E7E7"
          cursorColor={themeMode == "light" ? "#141414" : "#E7E7E7"}
          textColor={themeMode == "light" ? "#141414" : "#E7E7E7"}
          style={[appStyle(themeMode).textInput, { marginTop: 20 }]}
        />
        {!isValid ? <Text style={appStyle(themeMode).validationFont}>* The new password must contain at least one numerical or a Special aharacter and it must be at least eight</Text> : null}
        <TextInput ref={confirmPwdRef}
          label={<Text style={appStyle(themeMode).textInputLabel}>Confirm New Password</Text>}
          mode="outlined"
          secureTextEntry={confirmPwdVisible ? false : true}
          onFocus={() => setIsConfirmPwdFocused(true)}
          onBlur={() => setIsConfirmPwdFocused(false)}
          value={confirmPwd}
          selectionColor="#E7E7E7"
          cursorColor="#E7E7E7"
          textColor="#E7E7E7"
          right={<TextInput.Icon
            icon={confirmPwdVisible ? "eye" : require('@src/assets/svg/new/eye-slash.svg')}
            color={themeMode === "light" ? "#B9B9B9" : "#E7E7E7"}
            onPress={() => confirmPwdVisible ? setConfirmPwdVisible(false) : setConfirmPwdVisible(true)}
          />}
          left={<TextInput.Icon icon={require('@src/assets/svg/new/lock.svg')} color="#B9B9B9" size={20}></TextInput.Icon>}
          outlineStyle={{ borderColor: isConfirmPwdFocused == true ? isConfirmValid ? "#B9B9B9" : "red" : "#B9B9B9", borderRadius: 8 }}
          onChangeText={text => { validateConfirmPassword(text) }}
          style={[appStyle(themeMode).textInput, { marginTop: 20 }]}
        />
        {!isConfirmValid ? <Text style={appStyle(themeMode).validationFont}>* The new password must contain at least one numerical or a Special aharacter and it must be at least eight</Text> : null}
        <Button
          style={{ marginTop: 20 }}
          buttonColor={themeMode === "light" ? "#141414" : "#E7E7E7"}
          mode="contained"
          textColor={themeMode === "light" ? "white" : "#232627"}
          contentStyle={{ height: 60, borderRadius: 8 }}
          onPress={checkTwoPwd}><Text style={appStyle(themeMode).blackButtonText}>Update Password</Text></Button>
        <Text style={[appStyle(themeMode).validationFont, { textAlign: 'center', fontSize: 16 }]} ref={update}>{message} </Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          <Text style={appStyle(themeMode).font16Normal}>Don't you have a code? </Text>
          <Pressable onPress={() => props.navigation.navigate("ResetPwd")}>
            <Text style={appStyle(themeMode).font16BoldUnderline}>Resend code</Text>
          </Pressable>
        </Text>
        <Pressable onPress={() => navigation.navigate("LogIn")}>
          <Box mt={32} style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Icon
              source="menu-left"
              color={themeMode === "light" ? "#B9B9B9" : "white"}
              size={20}
            ></Icon>
            <Text style={appStyle(themeMode).font16Bold}>Return to Login</Text>
          </Box>
        </Pressable>
      </Box>
    </Box>
  );
};

// export default LoginPage;
const mapStateToProps = (state: any) => ({
  loading: state.loading,
  error: state.error,
  themeMode: state.auth.themeMode
});

const mapDispatchToProps = (dispatch: any) => ({
  requestLogin: (data: any) => dispatch(loginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailVerify);
