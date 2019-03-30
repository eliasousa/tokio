import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import flashMessagesReducer from "./flashMessagesReducer";
import adminsReducer from "./adminsReducer";

export default combineReducers({
  form: formReducer,
  flashMessage: flashMessagesReducer,
  admins: adminsReducer
});
