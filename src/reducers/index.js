import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import adminsReducer from "./adminsReducer";

export default combineReducers({
  form: formReducer,
  admins: adminsReducer
});
