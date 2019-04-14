import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as flashReducer } from "redux-flash";

import adminsReducer from "./adminsReducer";
import taxisReducer from "./taxisReducer";
import companiesReducer from "./companiesReducer";
import sectorsReducer from "./sectorsReducer";
import employeesReducer from "./employeesReducer";

export default combineReducers({
  form: formReducer,
  flash: flashReducer,
  admins: adminsReducer,
  taxis: taxisReducer,
  companies: companiesReducer,
  sectors: sectorsReducer,
  employees: employeesReducer
});
