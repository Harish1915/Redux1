import { legacy_createStore as createStore } from "redux";
import { runReducer } from "./reducer";

export const reduxStore = createStore(runReducer);
