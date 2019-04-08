import _ from "lodash";

import {
  CREATE_COMPANY,
  FETCH_COMPANY,
  FETCH_COMPANIES,
  UPDATE_COMPANY
} from "../constants/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_COMPANY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_COMPANY:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_COMPANY:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
