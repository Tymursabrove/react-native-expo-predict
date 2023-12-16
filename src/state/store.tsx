import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import AuthReducer from "./Auth/Reducer";

import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
