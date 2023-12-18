import React, { useState, useEffect } from "react";
import appStyle from "../../style";
import { Box, Text } from "@react-native-material/core";
import { TextInput, Button, Icon } from "react-native-paper";
import { Image, Pressable, BackHandler } from "react-native";

import { Props } from "./types";
import { connect } from "react-redux";

const ResetPwdPage: React.FC<Props> = (props) => {
  const { navigation, themeMode } = props;
  const [email, setEmail] = useState("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setEmail(event.currentTarget.value);
  };

  const resetPwdFunction = () => {
    navigation.navigate("MailVerify")
  }

  const returnToLogin = () => {
    navigation.navigate("LogIn")
  }

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
    <Box style={appStyle(themeMode).globalBackground}>
      <Box mt={100} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {themeMode === "light" ?
          (<Image
            style={appStyle(themeMode).logo}
            source={require("@src/assets/svg/new/logo.png")}
          />) :
          (<Image
            style={appStyle(themeMode).logo}
            source={require("@src/assets/svg/new/logo_dark.png")}
          />)}
      </Box>
      <Box mt={169.59}>
        <Text style={appStyle(themeMode).title}>Forgot your password?
        </Text>
        <Text style={appStyle(themeMode).subtitle} >To reset your password enter the email{"\n"} address you use to sign in to the GoPredict
        </Text>
      </Box>
      <Box m={32}>
        <TextInput
          label={<Text style={appStyle(themeMode).textInputLabelOfPassword}>Email address</Text>}
          mode="outlined"
          textColor={themeMode === "light" ? "#141414" : "#E7E7E7"}
          outlineStyle={{ borderColor: themeMode === "light" ? "#141414" : "#E7E7E7", borderRadius: 8 }}
          onChangeText={text => { setEmail(text) }}
          style={appStyle(themeMode).textInput}
        />
        <Button
          style={[appStyle(themeMode).font16Bold, { marginTop: 20 }]}
          mode="contained"
          buttonColor={themeMode === "light" ? "#141414" : "white"}
          textColor={themeMode === "light" ? "white" : "#232627"}
          contentStyle={{
            height: 60,
            borderRadius: 8
          }}
          onPress={resetPwdFunction}><Text style={appStyle(themeMode).blackButtonText}>Reset Password</Text></Button>
      </Box>


      <Box style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Pressable onPress={returnToLogin}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }} >
            <Icon
              source="menu-left"
              color={themeMode === "light" ? "black" : "white"}
              size={20}
            ></Icon>
            <Text style={appStyle(themeMode).font16Bold}>Return to Login</Text>
          </Box>
        </Pressable>
      </Box>

    </Box >
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPwdPage);

