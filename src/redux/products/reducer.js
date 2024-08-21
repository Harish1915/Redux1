const initialState = {
  productDate: [],
  error: false,
  loading: true,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING":
      return { ...state, loading: true };
    case "PRODUCT_FETCH_SUCCESS":
      return {
        ...state,
        productData: action.payload,
        loading: false,
        error: false,
      };
    case "PRODUCT_FETCH_ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};
