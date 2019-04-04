import { stopSubmit } from "redux-form";
import { flashSuccessMessage } from "redux-flash";

import berlim from "../services/berlim";
import history from "../history";
import { formatToFormErrors } from "./utils";
import {
  CREATE_TAXI,
  FETCH_TAXI,
  FETCH_TAXIS,
  EDIT_TAXI
} from "../constants/types";

export const createTaxi = formValues => async dispatch => {
  try {
    const response = await berlim.post("/taxis", { taxi: formValues });

    dispatch({ type: CREATE_TAXI, payload: response.data.data });
    history.push("/taxis");
    dispatch(flashSuccessMessage("Taxi criado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("taxiForm", formatToFormErrors(error)));
  }
};

export const fetchTaxis = () => async dispatch => {
  const response = await berlim.get("/taxis");
  dispatch({ type: FETCH_TAXIS, payload: response.data.data });
};

export const fetchTaxi = id => async dispatch => {
  const response = await berlim.get(`/taxis/${id}`);

  dispatch({ type: FETCH_TAXI, payload: response.data.data });
};

export const editTaxi = (id, formValues) => async dispatch => {
  try {
    const response = await berlim.patch(`/taxis/${id}`, { taxi: formValues });

    dispatch({ type: EDIT_TAXI, payload: response.data.data });
    history.push("/taxis");
    dispatch(flashSuccessMessage("Taxi editado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("taxiForm", formatToFormErrors(error)));
  }
};
