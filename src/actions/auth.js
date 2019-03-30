import berlim from "../apis/berlim";
import history from "../history";
import { loginUser } from "../apis/auth";
import { sendFlashMessage } from "./flashMessage";

export const login = formValues => async dispatch => {
  try {
    const response = await berlim.post("/sessions", formValues);
    loginUser(response.data.token);
    history.push("/");
    dispatch(sendFlashMessage("Login feito com sucesso!", "green"));
  } catch (_error) {
    dispatch(sendFlashMessage("Falha ao logar!", "red"));
  }
};
