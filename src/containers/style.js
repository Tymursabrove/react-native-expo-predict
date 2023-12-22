import { StyleSheet } from 'react-native';
import { getViewportUnits} from "@src/utils/viewportVariable"

const units = getViewportUnits();

export default appStyle = (themeMode) => StyleSheet.create({
  globalBackground: {
    scrollEnabled: "true",
    height: "100%",
    overflowY: "scroll",
    backgroundColor: themeMode === "light" ? "#F4F4F4" : "#1D1F21"
  },
  logo: {
    width: 211.625,
    height: 36.409
  },
  title: {
    fontFamily: "Visby CF-Bold",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 44,
    textAlign: 'center',
    color: themeMode === "light" ? "#141414" : "#E7E7E7"
  },
  subtitle: {
    fontFamily: "Visby CF-Bold",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 24,
    color: themeMode === "light" ? "#141414" : "#E7E7E7"
  },
  italic: { fontStyle: 'italic' },
  bottomList: {
    fontFamily: "Visby CF",
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: themeMode === "light" ? "#141414" : "#E7E7E7"
  },
  font16Normal: {
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '400',
    lineHeight: 20,
    color: themeMode === "light" ? "rgba(20, 20, 20, 0.7)" : "#E7E7E7"
  },
  font16BoldUnderline: {
    fontSize: 16,
    fontFamily: 'Visby CF-Bold',
    fontWeight: '600',
    lineHeight: 20,
    textDecorationLine: "underline",
    color: themeMode === "light" ? "#141414" : "#E7E7E7"
  },
  font14Normal: {
    fontSize: 14,
    fontFamily: 'Visby CF',
    fontWeight: '400',
    lineHeight: 20,
    color: themeMode === "light" ? "rgba(20, 20, 20, 0.7)" : "#E7E7E7"
  },
  font14BoldUnderline: {
    fontSize: 14,
    fontFamily: 'Visby CF-Bold',
    fontWeight: '600',
    lineHeight: 20,
    textDecorationLine: "underline",
    color: themeMode === "light" ? "#141414" : "#E7E7E7"
  },
  font16Bold: {
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '600',
    color: themeMode === "light" ? "#141414" : "#E7E7E7"
  },
  textInput: {
    height: 6.437*units.vh,
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '400',
    lineHeight: 20,
    color: themeMode === "light" ? "#F4F4F4" : "white",
    backgroundColor: themeMode === "light" ? "white" : "#232627"
  },
  textInputLabel: {
    color: '#FE2828', //red color
    fontSize: 14,
    fontFamily: 'Visby CF',
    fontWeight: '500',
    color: themeMode === "light" ? "#141414" : "#B9B9B9",
    backgroundColor: themeMode === "light" ? "white" : "#232627"
  },
  textInputLabelOfEmail: {
    fontSize: 14,
    fontFamily: 'Visby CF',
    fontWeight: '500',
    color: themeMode === "light" ? "rgba(20, 20, 20, 0.3)" : "rgba(231, 231, 231, 0.3)",
    backgroundColor: themeMode === "light" ? "#F4F4F4" : "#1D1F21"
  },
  textInputLabelOfPassword: {
    fontSize: 14,
    fontFamily: 'Visby CF',
    fontWeight: '500',
    color: themeMode === "light" ? "#141414" : "#E7E7E7",
    backgroundColor: themeMode === "light" ? "rgba(0, 0, 0, 0)" : "#1D1F21"
  },
  validationFont: {
    color: '#FE2828',
    fontSize: 11,
    fontFamily: 'Visby CF',
    fontWeight: '400',
    lineHeight: 15
  },
  confirmConde: {
    textAlign: 'center',
    width: 51,
    backgroundColor: themeMode === "light" ? "white" : "#232627"
  },
  checkbox: {
    borderRadius: 4,
    width: 100,
    height: 100
  },
  columnSeparatorHeader: {
    borderColor: themeMode == "light" ? "#DDDBDB" : "#1D1F21",
    borderRightWidth: 1,
    flex: 2.8
  },
  columnSeparatorBody: {
    borderColor: themeMode == "light" ? "#DDDBDB" : "#1D1F21",
    borderRightWidth: 1,
    flex: 2.8
  },
  selectedTab: {
    flex: 3,
    backgroundColor: themeMode == "light" ? "white" : "#232627",
    borderRadius: 29,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    width: 155,
    gap: 8
  },
  normalTab: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 40
  },
  navbarText: {
    color: themeMode == "light" ? "#141414" : "#E7E7E7",
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '600',
  },
  smallTextInput: {
    width: 185,
    height: 48,
    borderRadius: 8
  },
  fontStyle: {
    color: "#141414",
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '400'
  },
  colorButton: {
    height: 48,
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '700',
    borderRadius: 8,
    lineHeight: 48,
    color: "white",
    flex:1
  },
  termTitle: {
    color: themeMode === "light" ? '#141414' : "white",
    fontSize: 24,
    fontFamily: 'Visby CF-Bold',
    fontWeight: '700',
    marginTop: 60,
    textAlign: 'center'
  },
  termSubitle: {
    color: themeMode === "light" ? '#141414' : "white",
    fontSize: 20,
    fontFamily: 'Visby CF-Bold',
    fontWeight: '700',
  },
  termText: {
    color: themeMode === "light" ? 'rgba(20,20,20,0.70)' : "rgba(231.03, 231.03, 231.03, 0.70)",
    fontSize: 12,
    fontFamily: 'Visby CF',
    fontWeight: '500',
    lineHeight: 16
  },
  background: {
    height: "100%",
    backgroundColor: themeMode === "light" ? "#F4F4F4" : "#1D1F21"
  },
  blackButtonText: {
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '700',
    color: themeMode === "light" ? "#E7E7E7" : "#141414"
  },
  eventPassage: {
    backgroundColor: themeMode == "light" ? "white" : "#232627"
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Visby CF',
    fontWeight: '700',
    lineHeight: 20,
    color: themeMode === "light" ? "black" : "#E7E7E7"
  },
  eventContent: {
    fontSize: 12,
    fontFamily: 'Visby CF',
    fontWeight: '500',
    lineHeight: 16,
    color: themeMode === "light" ? "black" : "#E7E7E7",
    marginTop: 8
  },
  eventDate: {
    fontSize: 12,
    fontFamily: 'Visby CF',
    fontWeight: '700',
    lineHeight: 16,
    color: themeMode === "light" ? "black" : "#E7E7E7",
    marginTop: 14
  },
  dataTableRow: {
    backgroundColor: themeMode == "light" ? "white" : "#232627",
    height: 55
  },
  tableHeaderText: {
    color: themeMode == "light" ? "white" : "rgba(231, 231, 231, 0.7)",
    fontSize: 14, fontFamily: 'Visby CF',
    fontWeight: '600'
  },
  symbolName: {
    color: themeMode == "light" ? "black" : "#E7E7E7",
    fontSize: 12,
    fontFamily: 'Urbanist-Regular',
    fontWeight: '600'
  },
  symbolDate: {
    color: themeMode == "light" ? "#575757" : "#aaabac",
    fontSize: 12,
    fontFamily: 'Urbanist-Regular',
    fontWeight: '400'
  },
  entryPriceInput: {
    color: themeMode == "light" ? "#B9B9B9" : "#5A5C5D",
    backgroundColor: themeMode == "light" ? "#F4F4F4" : "#1D1F21",
    flex:1
  },
  entryPriceLabel: {
    color: themeMode == "light" ? "#B9B9B9" : "#5A5C5D",
    backgroundColor: themeMode == "light" ? "#F4F4F4" : "#1D1F21"
  },
  entryPriceOutlineColor: {
    color: themeMode=="light"? "#B9B9B9":"#5A5C5D"
  },
  takeProfitInput: {
    color: themeMode =="light"? "#141414" : "#E7E7E7",
    backgroundColor: themeMode == "light" ? "#e1f2e9" : "#1d3129",
    flex:1
  },
  takeProfitLabel: {
    color: themeMode =="light" ? "#36DD84" : "#36DD84",
    backgroundColor: themeMode=="light"? "#F4F4F4":"#1D1F21"
  },
  // takeProfitOutlineColor: {
  //   color: themeMode=="light"? "":"#36DD84"
  // },
  stopLossInput: {
    color: themeMode =="light"? "#141414" : "E7E7E7",
    backgroundColor: themeMode == "light" ? "#f5e0e0" : "#332022",
    flex:1
  },
  stopLossLabel: {
    color: themeMode=="light" ? "#FE2828" : "#FE2828",
    backgroundColor: themeMode == "light" ? "#F4F4F4" : "#1D1F21"
  },
  dropdown: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: themeMode =="light"?"B9B9B9": "#E7E7E7",
    paddingHorizontal: 16
  },
  verificationCell: {
    width: 51,
    height: 59,
    color: themeMode == "light" ? "#141414": "#E7E7E7",
    fontSize: 16,
    fontFamily: 'Visby CF-Bold',
    fontWeight: '500',
    lineHeight: 59,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: themeMode == "light" ? "#B9B9B9" : "#5A5C5D",
    textAlign: 'center'
  },
   focusCell: {
    borderColor: themeMode == "light" ?'#141414': "#5A5C5D"
  },
})
