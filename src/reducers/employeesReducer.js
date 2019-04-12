import _ from "lodash";

import {
  CREATE_EMPLOYEE,
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEES,
  UPDATE_EMPLOYEE
} from "../constants/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_EMPLOYEE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EMPLOYEE:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_EMPLOYEE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
