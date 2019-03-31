import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as flashReducer } from "redux-flash";

import adminsReducer from "./adminsReducer";

export default combineReducers({
  form: formReducer,
  flash: flashReducer,
  admins: adminsReducer
});
