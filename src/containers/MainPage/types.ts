export type Props = {
  username: any,
  getUserName: any
};
export type ProfileProps = {
  themeMode: string,
  changeTheme: Function,
  changeChartVisible: Function,
  chartVisibility: boolean,
  navigation: any,
  username: string,
  userData: any,
  deleteData: Function,
  logout: string,
}
export type TradebookProps = {
  themeMode: string;
  username: string,
  tableData: any,
  chartVisibility: boolean,
}
export type PredictionProps = {
  themeMode: string,
  username: string,
  tableData: any,
  chartVisibility: boolean
}

export type CopyTradeProps = {
  themeMode: string,
  username: string,
  tableData: any,
  chartVisibility: boolean,
}
export type MainpageProps = {
  getUsername: any,
  themeMode: string,
  username: string,
  tableData: any
}
