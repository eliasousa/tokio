import berlim from "../apis/berlim";
import history from "../history";
import { stopSubmit } from "redux-form";

import { sendFlashMessage } from "./flashMessage";
import {
  CREATE_ADMIN,
  FETCH_ADMIN,
  FETCH_ADMINS,
  EDIT_ADMIN,
  DELETE_ADMIN
} from "./types";

const _showServerErrors = errors => {
  const formErrors = {};
  Object.entries(errors.response.data.errors).forEach(error => {
    formErrors[error[0]] = error[1].join(", ");
  });
  return stopSubmit("adminForm", formErrors);
};

export const createAdmin = formValues => async dispatch => {
  try {
    const response = await berlim.post("/admins", { admin: formValues });

    dispatch({ type: CREATE_ADMIN, payload: response.data.data });
    dispatch(sendFlashMessage("Admin criado com sucesso!", "green"));
    history.push("/admins");
  } catch (error) {
    dispatch(_showServerErrors(error));
  }
};

export const fetchAdmins = () => async dispatch => {
  const response = await berlim.get("/admins");
  dispatch({ type: FETCH_ADMINS, payload: response.data.data });
};

export const fetchAdmin = id => async dispatch => {
  const response = await berlim.get(`/admins/${id}`);

  dispatch({ type: FETCH_ADMIN, payload: response.data.data });
};

export const editAdmin = (id, formValues) => async dispatch => {
  try {
    const response = await berlim.patch(`/admins/${id}`, { admin: formValues });

    dispatch({ type: EDIT_ADMIN, payload: response.data.data });
    history.push("/admins");
    dispatch(sendFlashMessage("Admin editado com sucesso!", "green"));
  } catch (error) {
    dispatch(_showServerErrors(error));
  }
};

export const deleteAdmin = id => async dispatch => {
  await berlim.delete(`/admins/${id}`);

  dispatch({ type: DELETE_ADMIN, payload: id });
  history.push("/admins");
  dispatch(sendFlashMessage("Admin removido com sucesso!", "green"));
};
