import { ApiResponse } from "apisauce";

import { api } from "../../../services/api";
import {
  GET_BRANDS,
  CREATE_BRAND,
  UPDATE_BRAND,
  DELETE_BRAND,
  BRANDS_ERROR,
} from "../types";

type Brand = {
  _id: string;
  name: string;
};

export const getBrands = () => async (dispatch: any) => {
  try {
    const brands = await api
      .get("/brands")
      .then((response: ApiResponse<any>) => {
        const { ok, data } = response;

        if (ok) {
          return data;
        }
      });

    return dispatch({
      type: GET_BRANDS,
      payload: brands,
    });
  } catch (e) {
    return dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    });
  }
};

export const createBrand = (brand: Brand) => async (dispatch: any) => {
  try {
    const response = await api.post("/brands", brand);

    return dispatch({
      type: CREATE_BRAND,
      payload: response.data,
    });
  } catch (e) {
    return dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    });
  }
};

export const updateBrand = (brand: Brand) => async (dispatch: any) => {
  try {
    const response = await api.put(`/brands/${brand._id}`, brand);

    return dispatch({
      type: UPDATE_BRAND,
      payload: response.data === null ? brand : response.data,
    });
  } catch (e) {
    return dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    });
  }
};

export const deleteBrand = (id: string) => async (dispatch: any) => {
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
