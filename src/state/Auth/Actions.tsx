import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_TABLE_DATA,
  GET_USERNAME,
  GET_USERDATA_SUCCESS,
  GET_TABLEDATA_SUCCESS,
  GET_CHANGECHART_VISIBLE
} from "./Constants";
/**
 * @author Usman Bashir
 * @function loginRequest
 * @param {*} payload
 * @description Return type for login request to reducer
 * @returns state
 */
export const loginRequest = (payload: any) => ({
  type: LOGIN_REQUEST,
  payload,
});

/**
 * @author Tymur
 * @function loginSuccess
 * @param {*} payload
 * @description Return type for login success to reducer
 * @returns state
 */
export const loginSuccess = (payload: any) => ({
  type: LOGIN_SUCCESS,
  payload,
});

/**
 * @author Tymur
 * @function getTableData
 * @param {*} payload
 * @description Return type for prediction and Tradebook datatable to reducer
 * @returns state
 */
export const getTableData = (payload: any) => ({
  type: GET_TABLE_DATA,
  payload,
});

/**
 * @author Usman Bashir
 * @function loginError
 * @param {*} payload
 * @description Return type for login failed to reducer
 * @returns state
 */
export const loginError = (payload: any) => ({
  type: LOGIN_FAILED,
  payload,
});

/**
 * @author Usman Bashir
 * @function logoutRequest
 * @param {*} payload
 * @description Return type for logout request to reducer
 * @returns state
 */
export const logoutRequest = (payload: any) => ({
  type: LOGOUT_REQUEST,
  payload,
});

/**
 * @author Usman Bashir
 * @function logoutSuccess
 * @param {*} payload
 * @description Return type for logout success to reducer
 * @returns state
 */
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

/**
 * @author Usman Bashir
 * @function logoutError
 * @param {*} payload
 * @description Return type for logout failed to reducer
 * @returns state
 */
export const logoutError = (payload: any) => ({
  type: LOGOUT_FAILED,
  payload,
});

export const getUserNameFromAuth = () => ({
  type: GET_USERNAME
})

export const getUserdataSuccess = (payload: any) => ({
  type: GET_USERDATA_SUCCESS,
  payload
})

export const getTabledataSuccess = (payload: any) => ({
  type: GET_TABLEDATA_SUCCESS,
  payload
})

export const getChangeChartVisible = (payload: any) => ({
  type: GET_CHANGECHART_VISIBLE,
  payload
})
