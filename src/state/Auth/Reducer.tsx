import { userUpdate } from "@src/controllers/Users";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED,
  GET_USERNAME,
  GET_USERDATA_SUCCESS,
  GET_TABLEDATA_SUCCESS,
  GET_CHANGECHART_VISIBLE
} from "./Constants";
/**
 * Initial state for this slice of store
 */
const initialState = {
  loading: "0",
  error: null,
  data: {},
  themeMode: 'light',
  date: '2023-12-08',
  userData: {},
  username: "",
  tableData: {},
  logout: "0",
  chartVisibility: false
};
/**
 * @author Usman Bashir
 * @description Pure function to manipulate state without mutating immutably
 * @returns states
 */
export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: "1",
        data: action.payload,
        error: null,
        logout: "0"
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: 0,
        data: null,
        error: null,
        userData: null,
        username: null,
        tableData: {},
        date: null,
        logout: "1"
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: "2",
        error: action.payload,
      };
    // case GET_USERNAME:
    //   return {
    //     ...state,
    //     username: "John Doe"
    //   };
    case GET_USERDATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        username: action.payload.users[0].userDetails.name
      }
    case GET_TABLEDATA_SUCCESS:
      return {
        ...state,
        tableData: action.payload
      }
    case "CHANGE_THEME":
      return {
        ...state,
        themeMode: action.payload.currentTheme
      };
    case "GET_TABLE_DATA":
      return {
        ...state,
        tableData: action.payload
      };
    case GET_CHANGECHART_VISIBLE:
      return {
        ...state,
        chartVisibility: action.payload.chartVisibility
      };
    default:
      return state;
  }
};
