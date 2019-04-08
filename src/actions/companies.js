import { stopSubmit } from "redux-form";
import { flashSuccessMessage } from "redux-flash";

import berlim from "../services/berlim";
import history from "../history";
import { formatToFormErrors } from "./utils";
import {
  CREATE_COMPANY,
  FETCH_COMPANY,
  FETCH_COMPANIES,
  UPDATE_COMPANY
} from "../constants/types";

export const createCompany = formValues => async dispatch => {
  try {
    const response = await berlim.post("/companies", { company: formValues });

    dispatch({ type: CREATE_COMPANY, payload: response.data.data });
    history.push("/companies");
    dispatch(flashSuccessMessage("Empresa criada com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("companyForm", formatToFormErrors(error)));
  }
};

export const fetchCompanies = () => async dispatch => {
  const response = await berlim.get("/companies");
  dispatch({ type: FETCH_COMPANIES, payload: response.data.data });
};

export const fetchCompany = id => async dispatch => {
  const response = await berlim.get(`/companies/${id}`);

  dispatch({ type: FETCH_COMPANY, payload: response.data.data });
};

export const updateCompany = (id, formValues) => async dispatch => {
  try {
    const response = await berlim.patch(`/companies/${id}`, {
      company: formValues
    });

    dispatch({ type: UPDATE_COMPANY, payload: response.data.data });
    history.push("/companies");
    dispatch(flashSuccessMessage("Empresa editada com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("companyForm", formatToFormErrors(error)));
  }
};
