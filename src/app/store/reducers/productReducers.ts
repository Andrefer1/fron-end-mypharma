import {
  Product,
  ProductsState,
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../types";

const INITIAL_STATE: ProductsState = {
  products: [],
  loading: true,
};

export default function products(
  state = INITIAL_STATE,
  action: any
): ProductsState {
  let newProducts: Product[] | [] = [];
  let productIndex: number = -1;

  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case CREATE_PRODUCT:
      if (action.payload.message !== undefined) {
        return {
          ...state,
          loading: false,
        };
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };

    case UPDATE_PRODUCT:
      newProducts = [...state.products];

      productIndex = newProducts.findIndex(
        (product: Product) => product._id === action.payload._id
      );

      newProducts[productIndex] = action.payload;

      return {
        ...state,
        products: newProducts,
        loading: false,
      };

    case DELETE_PRODUCT:
      newProducts = [...state.products];

      productIndex = newProducts.findIndex(
        (product: Product) => product._id === action.payload
      );

      newProducts.splice(productIndex, 1);

      return {
        ...state,
        products: newProducts,
        loading: false,
      };

    default:
      return state;
  }
}
