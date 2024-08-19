import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/gymTrackData/store.js";
import { profileRedux } from "./redux/gymTrackData/profileData/pstore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={reduxStore}> */}
    <Provider store={profileRedux}>
      <App />
    </Provider>
  </StrictMode>
);
