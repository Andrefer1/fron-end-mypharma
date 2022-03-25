import { Dispatch } from "redux";

import { api } from "../../../services/api";
import {
  Brand,
  GET_BRANDS,
  CREATE_BRAND,
  UPDATE_BRAND,
  DELETE_BRAND,
  BRANDS_ERROR,
} from "../types";

export const getBrands = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.get("/brands");

    return dispatch({
      type: GET_BRANDS,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    });
  }
};

export const createBrand = (brand: Brand) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.post("/brands", brand);

    return dispatch({
      type: CREATE_BRAND,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    });
  }
};

export const updateBrand = (brand: Brand) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.put(`/brands/${brand._id}`, brand);

    return dispatch({
      type: UPDATE_BRAND,
      payload: data === null ? brand : data,
    });
  } catch (e) {
    return dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    });
  }
};

export const deleteBrand = (id: string) => async (dispatch: Dispatch) => {
  try {
    await api.delete(`/brands/${id}`);

    return dispatch({
      type: DELETE_BRAND,
      payload: id,
    });
  } catch (e) {
    return dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    });
  }
};
