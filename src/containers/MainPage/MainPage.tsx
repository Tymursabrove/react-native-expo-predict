import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserNameFromAuth } from '@src/state/Auth/Actions';
import { Box } from "@react-native-material/core";
import { View, Image, Pressable, BackHandler, Alert, Animated, Dimensions, TouchableOpacity, Platform } from "react-native";
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

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const MainPage: React.FC<MainpageProps> = (props) => {
  const { themeMode, getUsername, username, tableData, deleteData } = props;

  const [status, setStatus] = useState(0);
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  useEffect(() => {
    getUsername();
    const backAction = () => {
      Alert.alert('Welcome to GoPredict', 'Are you sure you want to exit this program?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES', onPress: () => {
            secureStore.deleteItemAsync(AUTH_TOKEN);
            BackHandler.exitApp()
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

  const topTab = createMaterialTopTabNavigator();

  function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{
        position: "absolute",
        bottom: Platform.OS == 'ios' ? 24 : null,
        top: Platform.OS == 'ios' ? null : 125,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width - 40,
        minWidth: 330,
        marginLeft: 20,
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        height: 72,
        backgroundColor: themeMode == "light" ? "#141414" : "white",
        borderRadius: 36,
        padding: 8,
        zIndex: 9999
      }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          // const opacity = position.interpolate({
          //   inputRange,
          //   outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          // });
          const CustomImage: React.FC<{ index: number }> = (props) => {
            const { index } = props;
            switch (index) {
              case 0: return isFocused ? themeMode == "light" ? <Image source={require("@src/assets/svg/new/prediction_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/prediction_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : themeMode == "light" ? <Image source={require("@src/assets/svg/new/prediction_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/prediction_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image>
              case 1: return isFocused ? themeMode == "light" ? <Image source={require("@src/assets/svg/new/Tradebook_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/Tradebook_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : themeMode == "light" ? <Image source={require("@src/assets/svg/new/Tradebook_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/Tradebook_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image>
              case 2: return isFocused ? themeMode == "light" ? <Image source={require("@src/assets/svg/new/CopyTrade_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/CopyTrade_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : themeMode == "light" ? <Image source={require("@src/assets/svg/new/CopyTrade_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/CopyTrade_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image>
              case 3: return isFocused ? themeMode == "light" ? <Image source={require("@src/assets/svg/new/Profile_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/Profile_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : themeMode == "light" ? <Image source={require("@src/assets/svg/new/Profile_white.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image> : <Image source={require("@src/assets/svg/new/Profile_black.png")} style={{ width: 24, height: 24, zIndex: 1000000 }}></Image>
            }
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: isFocused ? 9 : 4 }}
              key={index}
            >
              <Animated.View
                style={{ display: "flex", flexDirection: "row", backgroundColor: isFocused ? themeMode == "light" ? "white" : "#141414" : 'rgba(0,0,0,0)', height: 56, borderRadius: 29, justifyContent: "center", alignItems: "center", gap: 8 }}>
                <CustomImage index={index}></CustomImage>
                {isFocused ? <Animated.Text style={{
                  color: isFocused ? themeMode == "light" ? 'black' : "white" : themeMode == "light" ? 'white' : "black", fontSize: 16,
                  fontFamily: 'Visby CF',
                  fontWeight: '600',
                }}>
                  {label}
                </Animated.Text> : null}
              </Animated.View>

            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  return (
    // <NavigationContainer independent={true}>
    <topTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          elevation: 5,
          flexDirection: "column",
          justifyContent: "center",
        },
        tabBarIndicatorStyle: {
          backgroundColor: null,
        },
        tabBarItemStyle: {
          width: "auto"
        },
        tabBarScrollEnabled: true
      })}>
      <topTab.Screen
        name="Predictions"
        component={Predictions}
      />
      <topTab.Screen
        name="Tradebook"
        component={Tradebook}
      />
      <topTab.Screen
        name="Copy Trade"
        component={CopyTrade}
      />
      <topTab.Screen
        name="Profile"
        component={Profile}
      />
    </topTab.Navigator>
    // </NavigationContainer>


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
