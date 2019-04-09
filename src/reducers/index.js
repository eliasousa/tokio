import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as flashReducer } from "redux-flash";

import adminsReducer from "./adminsReducer";
import taxisReducer from "./taxisReducer";
import companiesReducer from "./companiesReducer";
import sectorsReducer from "./sectorsReducer";

import { CLEAR_STORE } from "../constants/types";

const appReducer = combineReducers({
  form: formReducer,
  flash: flashReducer,
  admins: adminsReducer,
  taxis: taxisReducer,
  companies: companiesReducer,
  sectors: sectorsReducer
});

export default (state, action) => {
  if (action.type === CLEAR_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};
