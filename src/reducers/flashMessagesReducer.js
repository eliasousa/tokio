import { FLASH_MESSAGE } from "../constants/types";

const initialState = {
  message: null,
  className: null
};

export default (state = initialState, action) => {
  if (action.type === FLASH_MESSAGE) {
    return action.payload;
  } else {
    return state;
  }
};
