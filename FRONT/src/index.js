import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/App.js";
import reportWebVitals from "./reportWebVitals.js";
import { Provider } from "react-redux";
import { store } from "./REDUX/Store/index.js";
import { UserProvider } from "../src/Context/userContext.js";

import axios from "axios";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </Provider>
);

reportWebVitals();
