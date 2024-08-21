const initialState = {
  recipeData: [],
  error: false,
  loading: true,
};
export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECIPE_LOADING":
      return { ...state, loading: true };
    case "RECIPE_SUCCESS":
      return {
        ...state,
        recipeData: action.payload,
        loading: false,
        error: false,
      };
    case "RECIPE_ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};
