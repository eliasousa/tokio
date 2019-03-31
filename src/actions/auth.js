import { flashSuccessMessage, flashErrorMessage } from "redux-flash";

import berlim from "../services/berlim";
import history from "../history";
import { loginUser } from "../services/auth";

export const authenticate = formValues => async dispatch => {
  try {
    const response = await berlim.post("/sessions", formValues);
    loginUser(response.data.token);
    history.push("/");
    dispatch(flashSuccessMessage("Login feito com sucesso!"));
  } catch (_error) {
    dispatch(flashErrorMessage("Falha ao logar!"));
  }
};
