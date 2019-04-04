import { stopSubmit } from "redux-form";
import { flashSuccessMessage } from "redux-flash";

import berlim from "../services/berlim";
import history from "../history";
import { formatToFormErrors } from "./utils";
import {
  CREATE_ADMIN,
  FETCH_ADMIN,
  FETCH_ADMINS,
  EDIT_ADMIN,
  DELETE_ADMIN
} from "../constants/types";

export const createAdmin = formValues => async dispatch => {
  try {
    const response = await berlim.post("/admins", { admin: formValues });

    dispatch({ type: CREATE_ADMIN, payload: response.data.data });
    history.push("/admins");
    dispatch(flashSuccessMessage("Admin criado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("adminForm", formatToFormErrors(error)));
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
    dispatch(flashSuccessMessage("Admin editado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("adminForm", formatToFormErrors(error)));
  }
};

export const deleteAdmin = id => async dispatch => {
  await berlim.delete(`/admins/${id}`);

  dispatch({ type: DELETE_ADMIN, payload: id });
  history.push("/admins");
  dispatch(flashSuccessMessage("Admin removido com sucesso!"));
};
