import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import Test from "./components/Test";

const initialState = {
  id: 1,
  name: "good",
  number: 4,
};

const reducer = (state = initialState, action) => {
  let number = 0;
  let member_info = {};

  switch (action.type) {
    case "증가":
      number = state.number + 1;
      return { ...state, number };
    case "감소":
      number = state.number - 1;
      return { ...state, number };
    case "로그인":
      member_info = {
        id: "jiwooproity",
        pwd: "023thwldndkdlel!",
        unique_id: 1,
      };
      return {
        ...state,
        member_info,
      };
    default:
      return state;
  }
};

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Test />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
