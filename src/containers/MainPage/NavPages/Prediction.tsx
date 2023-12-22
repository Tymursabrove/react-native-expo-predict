import React, { useState, useEffect } from "react";
import { Box, Flex } from "@react-native-material/core";
import { Image, Pressable, Dimensions, ScrollView, Platform } from "react-native"
import { StickyHeader } from "react-native-paper";
import { Badge, DataTable, Icon, Text, Avatar } from "react-native-paper";
import { connect } from "react-redux";
import appStyle from "../../style";
import { PredictionProps } from "../types";
import style from "../../style";
import DataTableCell from "react-native-paper/lib/typescript/components/DataTable/DataTableCell";
import DataTableHeader from "react-native-paper/lib/typescript/components/DataTable/DataTableHeader";

const CustomImageComponent: React.FC<{ imageName: String }> = (props) => {
  const { imageName } = props;
  switch (imageName) {
    case "Platinum": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/Platinum.png")}></Image>
    case "Coffee": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/coffee.png")}></Image>
    case "Cocoa": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/Cocoa.png")}></Image>
    case "Natural Gas":
    case "E-Mini Natural Gas": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/Natural_Gas.png")}></Image>
    case "Gold":
    case "MINY Gold": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/Natural_Gas.png")}></Image>
    case "Cotton N.2": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/cotton.png")}></Image>
    case "Rough Rice": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/rice.png")}></Image>
    case "HRW Wheat":
    case "Mini Wheat":
      return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/wheat.png")}></Image>
    case "Heating Oil": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/Heating_Oil.png")}></Image>
    case "MINY Silver": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/silver.png")}></Image>
    case "Sugar N.11": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/silver.png")}></Image>
    case "Palladium": return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/silver.png")}></Image>
    default: return <Image style={{ width: 32, height: 32 }} source={require("@src/assets/svg/new/money.png")}></Image>
  }
}

const Predictions: React.FC<PredictionProps> = (props) => {
  const { themeMode, username, tableData, chartVisibility } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const { width, height } = Dimensions.get("window");
  const [localTableData, setLocalTableData] = useState([]);
  const [localTableData1, setLocalTableData1] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let tableHeight = height - 360;
  let iostableHeight = height - 290;
  let arrayData: [] = [];

  useEffect(() => {
    if (tableData.data) {
      tableData.data.forEach((row: any, index: number) => {
        row.phigh = row.phigh.toString();
        row.plow = row.plow.toString();
        let high = "";
        let low = "";
        if (row.phigh.length > 6) {
          high = row.phigh.substring(0, 6) + "..."
        } else high = row.phigh;
        if (row.plow.length > 6) {
          low = row.plow.substring(0, 6) + "..."
        } else low = row.plow
        let item = { name: row.name, date: row.sessionEnd.substring(0, 10), symbol: row.symbol, phigh: high, ptrend: row.ptrend, plow: low, bto: row.bto, securityType: row.securityType };
        arrayData.push(item);
        if (tableData.data.length === index + 1) {
          makeData();
        }
      })
    }
  }, [tableData])

  const makeData = () => {
    setLocalTableData(arrayData);
    setLocalTableData1(arrayData);
    setIsLoading(false);
  }
  useEffect(() => {
    if (localTableData) {
      if (tabIndex == 0) {
        setLocalTableData(localTableData1)
        console.log("-1", localTableData1)
      }
      if (tabIndex == 1) {
        console.log("1", localTableData1.filter(item => item['securityType'] == 'FOREX'))
        setLocalTableData(localTableData1.filter(item => item['securityType'] == 'FOREX'));
      }
      if (tabIndex == 2) {
        console.log("2", localTableData1.filter(item => item['securityType'] == 'FUTURE'))
        setLocalTableData(localTableData1.filter(item => item['securityType'] == 'FUTURE'));
      }
      if (tabIndex == 3) {
        console.log("3", localTableData1.filter(item => item['bto'] !== 0))
        setLocalTableData(localTableData1.filter(item => item['bto'] !== 0));
      }
    }
  }, [tabIndex]);

  let initialism = username.split(" ")[0].substring(0, 1) + username.split(" ")[1].substring(0, 1)

  return (
    <Box style={appStyle(themeMode).globalBackground}>
      <Box mt={59} ml={20} mr={20} style={{ minWidth: 330, minHeight: 820 }}>
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
            {themeMode == "light" ? <Image source={require("@src/assets/svg/new/notification_black.png")} style={{ width: 48, height: 48 }}></Image> : <Image source={require("@src/assets/svg/new/notification.png")} style={{ width: 48, height: 48 }}></Image>}
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
        <Box mt={Platform.OS == 'ios' ? 22 : 120} id="tab">
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
              <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                  fontSize: 16,
                  borderBottomWidth: tabIndex == 3 ? 2 : 0,
                  borderBottomColor: themeMode == "light" ? "black" : "white",
                  fontFamily: 'Visby CF',
                  fontWeight: tabIndex == 3 ? '600' : '500',
                  color: themeMode == "light" ? tabIndex == 3 ? "black" : "#575757" : tabIndex == 3 ? "white" : "#aaabac"
                }}>Hot</Text>
                <Image source={require("@src/assets/svg/new/fire.png")} style={{ width: 16, height: 16 }} />
              </Box>
            </Pressable>

          </Box>
          {/* {chartVisibility ? <Box mt={14} style={{ height: 271, backgroundColor: "#DDDBDB" }}>
            {tabIndex == 0 ? <All /> : null}
            {tabIndex == 1 ? <Forex /> : null}
            {tabIndex == 2 ? <Futures /> : null}
            {tabIndex == 3 ? <Hot /> : null}
          </Box> : null} */}

        </Box>
        <Box mt={24} id="instrument table" >
          <DataTable>
            <DataTable.Header
              style={{ backgroundColor: themeMode == "light" ? "#141414" : "#34383C", borderTopLeftRadius: 8, borderTopRightRadius: 8, height: 56, alignItems: "center" }}>
              <DataTable.Title style={appStyle(themeMode).columnSeparatorHeader} textStyle={appStyle(themeMode).tableHeaderText}>Instrument</DataTable.Title>
              <DataTable.Title style={{ justifyContent: "center", flex: 1 }} textStyle={appStyle(themeMode).tableHeaderText}>p.High</DataTable.Title>
              <DataTable.Title style={{ justifyContent: "center", flex: 1 }} textStyle={appStyle(themeMode).tableHeaderText}>p.Trend</DataTable.Title>
              <DataTable.Title style={{ justifyContent: "center", flex: 1 }} textStyle={appStyle(themeMode).tableHeaderText}>p.Low</DataTable.Title>
            </DataTable.Header>
            <ScrollView style={{ height: Platform.OS == 'ios' ? iostableHeight : tableHeight, overflow: "scroll" }}>
              {!isLoading && localTableData.map((item, index) => (
                <DataTable.Row key={index} style={appStyle(themeMode).dataTableRow}>
                  <DataTable.Cell style={appStyle(themeMode).columnSeparatorBody}>
                    <Box style={{ display: "flex", flexDirection: "row", gap: 3.5 }}>
                      <CustomImageComponent imageName={item.name}></CustomImageComponent>
                      <Box>
                        <Box style={{ flexDirection: 'row' }}><Text style={appStyle(themeMode).symbolName}>{item.name}</Text>
                          {item.bto !== 0 ? <Image source={require('@src/assets/svg/new/fire.png')} style={{ width: 16, height: 16 }}></Image> : null}</Box>
                        <Text style={appStyle(themeMode).symbolDate}>"{item.date}"</Text>
                      </Box>
                    </Box>
                  </DataTable.Cell>
                  <DataTable.Cell numeric style={{ flex: 1 }}><Text style={appStyle(themeMode).symbolName}>{item.phigh}</Text></DataTable.Cell>
                  <DataTable.Cell style={{ justifyContent: "center", flex: 1 }}><Image style={{
                    width: 20, height: 20
                  }} source={item.ptrend == "UP" ? require("@src/assets/svg/new/up.png") : require("@src/assets/svg/new/down.png")}></Image></DataTable.Cell>
                  <DataTable.Cell numeric><Text style={[appStyle(themeMode).symbolName, { flex: 1 }]}>{item.plow}</Text></DataTable.Cell>
                </DataTable.Row>
              ))
              }
              {/* {!isLoading && temp.map((item, index) => (
                <Text>{item}</Text>
              ))
              } */}
            </ScrollView>
          </DataTable>
        </Box>
      </Box >
    </Box >

  )
}

const mapStateToProps = (state: any) => ({
  themeMode: state.auth.themeMode,
  date: state.auth.date,
  username: state.auth.username,
  tableData: state.auth.tableData,
  chartVisibility: state.auth.chartVisibility
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeTheme: (changedThemeStatus: any) => dispatch({ type: "CHANGE_THEME", payload: changedThemeStatus })
  }
}

export default connect(mapStateToProps, null)(Predictions)