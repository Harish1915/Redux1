import { combineReducers } from "redux";
import { profileReducer } from "./gymTrackData/profileData/preducer";
import { runReducer } from "./gymTrackData/reducer";
import { productReducer } from "./products/reducer";
import { recipeReducer } from "./recipes/reducer";



export const singleReducer=combineReducers({
    profile:profileReducer,
    gym:runReducer,
    productData:productReducer,
    recipeData:recipeReducer
})