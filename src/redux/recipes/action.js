import axios from "axios";

export const recipeAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "RECIPE_LOADING" });
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        dispatch({ type: "RECIPE_SUCCESS",payload:response.data });
      }
    } catch (error) {
      dispatch({ type: "RECIPE_ERROR" });
      console.log(error);
    }
  };
};
