import _ from "lodash";

import {
  CREATE_TAXI,
  FETCH_TAXI,
  FETCH_TAXIS,
  UPDATE_TAXI
} from "../constants/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TAXIS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_TAXI:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TAXI:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_TAXI:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
