import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { middleware as flashMiddleware } from "redux-flash";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import { setupResponseInterceptors } from "./services/berlim";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk, flashMiddleware()))
);

setupResponseInterceptors(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
