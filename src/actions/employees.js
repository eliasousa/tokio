import _ from "lodash";
import { stopSubmit } from "redux-form";
import { flashSuccessMessage } from "redux-flash";

import berlim from "../services/berlim";
import history from "../history";
import { formatToFormErrors } from "./utils";
import { fetchSector } from "../actions/sectors";
import {
  CREATE_EMPLOYEE,
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEES,
  UPDATE_EMPLOYEE
} from "../constants/types";

export const createEmployee = formValues => async dispatch => {
  try {
    const response = await berlim.post("/employees", {
      employee: formValues
    });

    dispatch({ type: CREATE_EMPLOYEE, payload: response.data.data });
    history.push("/employees");
    dispatch(flashSuccessMessage("Funcionário criado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("sectorForm", formatToFormErrors(error)));
  }
};

export const fetchEmployeesAndSectors = () => async (dispatch, getState) => {
  await dispatch(fetchEmployees());

  _.chain(getState().employees)
    .map("sector_id")
    .compact()
    .uniq()
    .forEach(id => dispatch(fetchSector(id)))
    .value();
};

const fetchEmployees = () => async dispatch => {
  const response = await berlim.get("/employees");
  dispatch({ type: FETCH_EMPLOYEES, payload: response.data.data });
};

export const fetchEmployee = id => async dispatch => {
  const response = await berlim.get(`/employees/${id}`);

  dispatch({ type: FETCH_EMPLOYEE, payload: response.data.data });
};

export const updateEmployee = (id, formValues) => async dispatch => {
  try {
    const response = await berlim.patch(`/employees/${id}`, {
      employee: formValues
    });

    dispatch({ type: UPDATE_EMPLOYEE, payload: response.data.data });
    history.push("/employees");
    dispatch(flashSuccessMessage("Funcionário editado com sucesso!"));
  } catch (error) {
    dispatch(stopSubmit("employeeForm", formatToFormErrors(error)));
  }
};
