import berlim from "../services/berlim";
import { FETCH_VOUCHERS } from "../constants/types";
import { flashSuccessMessage } from "redux-flash";
import { formatCurrency } from "./utils";
import history from "../history";

export const fetchVouchers = filter => async dispatch => {
  const response = await berlim.get("/vouchers", { params: filter });

  dispatch({ type: FETCH_VOUCHERS, payload: response.data.data });
};

export const payVouchers = ids => async dispatch => {
  const response = await berlim.put("/vouchers", {
    vouchers: ids
  });

  history.push("/vouchers/payment");

  dispatch(
    flashSuccessMessage(
      `Total pago: ${formatCurrency(response.data.data.total_paid)}`,
      { timeout: 10000 }
    )
  );
};
