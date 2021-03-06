import { createTextMask } from "redux-form-input-masks";

export const phoneMask = createTextMask({
  pattern: "(999) 99999-9999"
});

export const cpfMask = createTextMask({
  pattern: "999.999.999-99"
});

export const cnpjMask = createTextMask({
  pattern: "99.999.999.9999/99"
});
