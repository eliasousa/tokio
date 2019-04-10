import { stopSubmit } from "redux-form";
import { flashSuccessMessage } from "redux-flash";

import berlim from "../services/berlim";
import history from "../history";
import { formatToFormErrors } from "./utils";
import {
  CREATE_SECTOR,
  FETCH_SECTOR,
  FETCH_SECTORS,
  UPDATE_SECTOR
} from "../constants/types";

export const createSector = formValues => async dispatch => {
  try {
    const response = await berlim.post("/sectors", {
      sector: formValues
    });

    dispatch({ type: CREATE_SECTOR, payload: response.data.data });
    history.push("/sectors");
    dispatch(flashSuccessMessage("Setor criado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("sectorForm", formatToFormErrors(error)));
  }
};

export const fetchSectors = () => async dispatch => {
  const response = await berlim.get("/sectors");
  dispatch({ type: FETCH_SECTORS, payload: response.data.data });
};

export const fetchSector = id => async dispatch => {
  const response = await berlim.get(`/sectors/${id}`);

  dispatch({ type: FETCH_SECTOR, payload: response.data.data });
};

export const updateSector = (id, formValues) => async dispatch => {
  try {
    const response = await berlim.patch(`/sectors/${id}`, {
      sector: formValues
    });

    dispatch({ type: UPDATE_SECTOR, payload: response.data.data });
    history.push("/sectors");
    dispatch(flashSuccessMessage("Setor editado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("sectorForm", formatToFormErrors(error)));
  }
};
