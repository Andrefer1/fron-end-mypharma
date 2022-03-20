import { PayloadAction } from "@reduxjs/toolkit";

import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../types";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
};

type ActionProps = {
  type: string;
  payload: Product | Product[];
};

type InitialStateProps = {
  products: Product[];
  loading: boolean;
};

const INITIAL_STATE: InitialStateProps = {
  products: [],
  loading: true,
};

export default function products(
  state = INITIAL_STATE,
  action: any //PayloadAction<ActionProps>
) {
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
