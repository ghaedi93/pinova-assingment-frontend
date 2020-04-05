import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// const store = createStore(rootReducer, applyMiddleware(thunk));
import store from "./store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
