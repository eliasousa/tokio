import _ from "lodash";

import {
  CREATE_ADMIN,
  FETCH_ADMIN,
  FETCH_ADMINS,
  UPDATE_ADMIN,
  DELETE_ADMIN
} from "../constants/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_ADMIN:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ADMIN:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_ADMIN:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ADMIN:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
