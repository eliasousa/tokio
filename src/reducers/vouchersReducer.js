import _ from "lodash";

import { FETCH_VOUCHERS } from "../constants/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VOUCHERS:
      return { ...{}, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
