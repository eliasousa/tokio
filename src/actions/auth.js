import _ from "lodash";
import { flashErrorMessage } from "redux-flash";

import berlim from "../services/berlim";
import history from "../history";
import { loginUser } from "../services/auth";

export const authenticate = formValues => async dispatch => {
  if (!_.every(["email", "password"], _.partial(_.has, formValues))) {
    return null;
  }

  try {
    const response = await berlim.post("/sessions", formValues);
    loginUser(response.data.token);
    history.push("/");
  } catch (error) {
    if (error.response && error.response.status === 401) {
      dispatch(flashErrorMessage("Usuário ou senha invalido!"));
    }
  }
};
