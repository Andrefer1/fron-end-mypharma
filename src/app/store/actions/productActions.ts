import { Dispatch } from "redux";

import { api } from "../../../services/api";
import {
  Product,
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCTS_ERROR,
} from "../types";

export const getProducts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.get("/products");

    return dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const createProduct =
  (product: Product) => async (dispatch: Dispatch) => {
    try {
      const response = await api.post("/products", product);

      return dispatch({
        type: CREATE_PRODUCT,
        payload: response.data,
      });
    } catch (e) {
      return dispatch({
        type: PRODUCTS_ERROR,
        payload: console.log(e),
      });
    }
  };

export const updateProduct =
  (product: Product) => async (dispatch: Dispatch) => {
    try {
      const response = await api.put(`/products/${product._id}`, product);

      return dispatch({
        type: UPDATE_PRODUCT,
        payload: response.data === null ? product : response.data,
      });
    } catch (e) {
      return dispatch({
        type: PRODUCTS_ERROR,
        payload: console.log(e),
      });
    }
  };

export const deleteProduct = (id: string) => async (dispatch: Dispatch) => {
  try {
    await api.delete(`/products/${id}`);

    return dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (e) {
    return dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};
