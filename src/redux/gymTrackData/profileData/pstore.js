import { legacy_createStore as createStore } from "redux";
import { profileReducer } from "./preducer";


export const profileRedux=createStore(profileReducer)