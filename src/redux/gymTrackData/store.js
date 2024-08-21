import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { singleReducer } from "../multi-reducer";
import { thunk } from "redux-thunk";

export const reduxStore = createStore(singleReducer,applyMiddleware(thunk));
