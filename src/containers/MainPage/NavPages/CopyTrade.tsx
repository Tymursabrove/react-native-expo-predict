import React, { useState, useEffect } from "react";
import { Box } from "@react-native-material/core";
import { Image, Pressable, Dimensions } from "react-native"
import { Badge, Button, Text, TextInput, Avatar } from "react-native-paper";
import { CopyTradeProps } from "../types";
import appStyle from "../../style";
import { connect } from 'react-redux'
import All from "../TabPages/All";
import Forex from "../TabPages/Forex";
import Futures from "../TabPages/Futures";
import Hot from "../TabPages/Hot";
import { Dropdown } from 'react-native-element-dropdown';


const CopyTrade: React.FC<CopyTradeProps> = (props) => {
  const { themeMode, username, tableData, chartVisibility } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const [entryPrice, setEntryPrice] = useState("0");
  const [amount, setAmount] = useState("0");
  const [takeProfit, setTakeProfit] = useState("0");
  const [stopLoss, setStopLoss] = useState("0");

  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState([]);
  const { width, height } = Dimensions.get("window");

  let tableHeight = height - 578;
  let initialism = username.split(" ")[0].substring(0, 1) + username.split(" ")[1].substring(0, 1)

  let name = [];
  let EOD = [];
  if (tableData.data) {
    tableData.data.forEach((row: any, index: number) => {
      name.push({ label: row.name, value: index });
    })
  }
  const changeInputValue = (item) => {
    setEntryPrice(tableData.data[item._index].entryPrice);
    setTakeProfit(tableData.data[item._index].takeProfit);
    setStopLoss(tableData.data[item._index].stopLoss);
  }
  // const name = [
  //   { label: 'MT5', value: 'MT5' },
  //   { label: 'MT4', value: 'MT4' },
  //   { label: 'MT3', value: 'MT3' },
  //   { label: 'MT2', value: 'MT2' }
  // ]
  const [dropdown1, setDropdown1] = useState(name)

  const Data2 = [
    { label: 'Forex', value: '1' },
    { label: 'Futures', value: '2' },
    { label: 'Hot', value: '3' },
    { label: 'ALL', value: '4' }
  ]
  const [dropdown2, setDropdown2] = useState(Data2);

  const Data3 = [
    { label: '2023-12-19', value: '1' },
    { label: '2023-12-19', value: '2' },
    { label: '2023-12-19', value: '3' }
  ]
  const [dropdown3, setDropdown3] = useState(Data3);

  return (
    <Box style={appStyle(themeMode).globalBackground}>
      <Box mt={59} ml={20} mr={20} mb={100}>
        <Box style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <Box style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 12
          }}>
            <Avatar.Text size={48} label={initialism} color="#565656" style={{
              backgroundColor: themeMode == "light" ? "#E7E7E7" : "#232627"
            }} />
            <Text style={{
              // Jenny Wilson
              height: 48,
              color: themeMode == "light" ? 'black' : '#E7E7E7',
              fontSize: 16,
              fontFamily: 'Visby CF',
              fontWeight: '600',
              lineHeight: 48
            }}>{username}</Text>
          </Box>
          <Box style={{
            position:
              "relative"
          }} >
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/notification_black.svg")} style={{ width: 48, height: 48 }}></Image> : <Image source={require("@src/assets/svg/new/notification.svg")} style={{ width: 48, height: 48 }}></Image>}
            <Badge
              size={16}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "red"
              }}>99</Badge>
          </Box>

        </Box>
        <Box mt={22} id="tab">
          <Box style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 35,
            paddingLeft: 12
          }}>
            <Pressable onPress={() => setTabIndex(0)}>
              <Text style={{
                fontSize: 16,
                borderBottomWidth: tabIndex == 0 ? 2 : 0,
                borderBottomColor: themeMode == "light" ? "black" : "white",
                fontFamily: 'Visby CF',
                fontWeight: tabIndex == 0 ? '600' : '500',
                color: themeMode == "light" ? tabIndex == 0 ? "black" : "#575757" : tabIndex == 0 ? "white" : "#aaabac"
              }}>ALL</Text>
            </Pressable>
            <Pressable onPress={() => setTabIndex(1)}>
              <Text style={{
                fontSize: 16,
                borderBottomWidth: tabIndex == 1 ? 2 : 0,
                borderBottomColor: themeMode == "light" ? "black" : "white",
                fontFamily: 'Visby CF',
                fontWeight: tabIndex == 1 ? '600' : '500',
                color: themeMode == "light" ? tabIndex == 1 ? "black" : "#575757" : tabIndex == 1 ? "white" : "#aaabac"
              }}>Forex</Text>
            </Pressable>
            <Pressable onPress={() => setTabIndex(2)}>
              <Text style={{
                fontSize: 16,
                borderBottomWidth: tabIndex == 2 ? 2 : 0,
                borderBottomColor: themeMode == "light" ? "black" : "white",
                fontFamily: 'Visby CF',
                fontWeight: tabIndex == 2 ? '600' : '500',
                color: themeMode == "light" ? tabIndex == 2 ? "black" : "#575757" : tabIndex == 2 ? "white" : "#aaabac"
              }}>Futures</Text>
            </Pressable>
            <Pressable onPress={() => setTabIndex(3)}>
              <Text style={{
                fontSize: 16,
                borderBottomWidth: tabIndex == 3 ? 2 : 0,
                borderBottomColor: themeMode == "light" ? "black" : "white",
                fontFamily: 'Visby CF',
                fontWeight: tabIndex == 3 ? '600' : '500',
                color: themeMode == "light" ? tabIndex == 3 ? "black" : "#575757" : tabIndex == 3 ? "white" : "#aaabac"
              }}>Hot</Text>
            </Pressable>

          </Box>
          {chartVisibility ? <Box mt={14} style={{ height: 271, backgroundColor: "#DDDBDB" }}>
            {tabIndex == 0 ? <All /> : null}
            {tabIndex == 1 ? <Forex /> : null}
            {tabIndex == 2 ? <Futures /> : null}
            {tabIndex == 3 ? <Hot /> : null}
          </Box> : <Box mt={14} style={{ height: 271 }}></Box>}
        </Box>
        <Box mt={20} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
          gap: 20
        }}>
          <Box style={{ flex: 54 }}>
            <Dropdown
              style={appStyle(themeMode).dropdown}
              selectedTextStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7",
              }}
              data={dropdown1}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Heating Oil"
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              itemContainerStyle={{
              }}
              itemTextStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7",
              }}
              placeholderStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7"
              }}
              containerStyle={{
                borderColor: themeMode == "light" ? "black" : "white",
                backgroundColor: themeMode == "light" ? "white" : "#232627",
                borderRadius: 8,
                overflow: "scroll",
              }}
              activeColor={themeMode == "light" ? "#F4F4F4" : "#141414"}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
                changeInputValue(item);
              }}
            >
            </Dropdown>
          </Box>
          <Box style={{ flex: 20 }}>
            <Dropdown
              style={appStyle(themeMode).dropdown}
              selectedTextStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7",
              }}
              data={dropdown2}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="MT5"
              value={value2}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              itemContainerStyle={{
              }}
              itemTextStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7",
              }}
              placeholderStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7"
              }}
              containerStyle={{
                borderColor: themeMode == "light" ? "black" : "white",
                backgroundColor: themeMode == "light" ? "white" : "#232627",
                borderRadius: 8,
                overflow: "scroll",
              }}
              activeColor={themeMode == "light" ? "#F4F4F4" : "#141414"}
              onChange={(item) => {
                setValue2(item.value);
                setIsFocus(false);
              }}
            >
            </Dropdown>
          </Box>
        </Box>
        <Box mt={20} style={{
          display: "flex",
          flexDirection: "row",
          gap: 20
        }}>
          <TextInput
            mode="outlined"
            value={entryPrice}
            textColor={themeMode == "light" ? "#B9B9B9" : "#5A5C5D"}
            label={<Text style={appStyle(themeMode).entryPriceLabel}>Entry Price</Text>}
            outlineColor={themeMode == "light" ? "#B9B9B9" : "#5A5C5D"}
            style={appStyle(themeMode).entryPriceInput}
            onChangeText={(str) => setEntryPrice(str)}
          ></TextInput>
          <TextInput
            mode="outlined"
            value={amount}
            textColor={themeMode == "light" ? "#B9B9B9" : "#5A5C5D"}
            label={<Text style={appStyle(themeMode).entryPriceLabel}>Amount</Text>}
            outlineColor={themeMode == "light" ? "#B9B9B9" : "#5A5C5D"}
            style={appStyle(themeMode).entryPriceInput}
            onChangeText={(str) => setAmount(str)}
          ></TextInput>
        </Box>
        <Box mt={20} style={{
          display: "flex",
          flexDirection: "row",
          gap: 20
        }}>
          <TextInput
            mode="outlined"
            value={takeProfit}
            textColor={themeMode == "light" ? "#141414" : "#E7E7E7"}
            label={<Text style={appStyle(themeMode).takeProfitLabel}>Take Profit</Text>}
            outlineColor="#36DD84"
            style={appStyle(themeMode).takeProfitInput}
            onChangeText={(str) => { takeProfit }}
          ></TextInput>
          <TextInput
            mode="outlined"
            value={stopLoss}
            textColor={themeMode == "light" ? "#141414" : "#E7E7E7"}
            label={<Text style={appStyle(themeMode).stopLossLabel}>Stop Loss</Text>}
            outlineColor="#FE2828"
            style={appStyle(themeMode).stopLossInput}
            onChangeText={(str) => setStopLoss(str)}
          ></TextInput>
        </Box>
        <Box mt={20} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 20,
          borderRadius: 8,
          backgroundColor: themeMode == "light" ? "white" : "#232627",
          padding: 20
        }}>
          <Button buttonColor="#3CD981" style={appStyle(themeMode).colorButton} textColor="white" contentStyle={{ height: 48 }}>BUY</Button>
          <Box style={{ width: 80, height: 40 }}>
            <Dropdown
              style={appStyle(themeMode).dropdown}
              selectedTextStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7",
              }}
              data={dropdown3}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="EOD"
              value={value3}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              itemContainerStyle={{
              }}
              itemTextStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7",
              }}
              placeholderStyle={{
                color: themeMode == "light" ? "#141414" : "#E7E7E7"
              }}
              containerStyle={{
                borderColor: themeMode == "light" ? "black" : "white",
                backgroundColor: themeMode == "light" ? "white" : "#232627",
                borderRadius: 8,
                overflow: "scroll",
              }}
              activeColor={themeMode == "light" ? "#F4F4F4" : "#141414"}
              onChange={(item) => {
                setValue3(item.value);
                setIsFocus(false);
              }}
            >
            </Dropdown></Box>
          <Button buttonColor="#FE2828" style={appStyle(themeMode).colorButton} textColor="white" contentStyle={{ height: 48 }}>SELL</Button>
        </Box>
      </Box>
    </Box >
  )
}

const mapStateToProps = (state: any) => ({
  themeMode: state.auth.themeMode,
  username: state.auth.username,
  tableData: state.auth.tableData,
  chartVisibility: state.auth.chartVisibiliy
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeTheme: (changedThemeStatus: any) => dispatch({ type: "CHANGE_THEME", payload: changedThemeStatus })
  }
}

export default connect(mapStateToProps, null)(CopyTrade);