import axios from "axios";

export const productAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_LOADING" });// action to redux
      const finalResponse = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (finalResponse.status === 200) {
        dispatch({ type: "PRODUCT_FETCH_SUCCESS",payload:finalResponse.data });
      }
    } catch (error) {
      dispatch({ type: "PRODUCT_FETCH_ERROR" });
      console.log(error);
    }
  };
};
