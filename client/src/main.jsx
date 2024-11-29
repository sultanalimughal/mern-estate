import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import {Provider} from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
    <PersistGate loading={null} persistor = {persistor} >
    <App />
    </PersistGate>
  </Provider>
);
