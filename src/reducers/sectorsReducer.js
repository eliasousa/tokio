import _ from "lodash";

import {
  CREATE_SECTOR,
  FETCH_SECTOR,
  FETCH_SECTORS,
  UPDATE_SECTOR
} from "../constants/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SECTORS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_SECTOR:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SECTOR:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_SECTOR:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
