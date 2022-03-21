import { ApiResponse } from "apisauce";

import { api } from "../../../services/api";
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCTS_ERROR,
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

export const getProducts = () => async (dispatch: any) => {
  try {
    const products = await api
      .get("/products")
      .then((response: ApiResponse<any>) => {
        const { ok, data } = response;

        if (ok) {
          return data;
        }
      });

    return dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  } catch (e) {
    return dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const createProduct = (product: Product) => async (dispatch: any) => {
  try {
    console.log(product);
    const response = await api.post("/products", product);

    console.log(response);

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

export const updateProduct = (product: Product) => async (dispatch: any) => {
  try {
    const response = await api.put(`/products/${product._id}`, product);

    return dispatch({
      type: UPDATE_PRODUCT,
      payload: response.data,
    });
  } catch (e) {
    return dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const deleteProduct = (id: string) => async (dispatch: any) => {
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
