import { combineReducers } from "redux";

import { authReducer } from "./authReducer";

export default combineReducers({
  auth: authReducer //if we want to access sth from state i.e state.auth
});
