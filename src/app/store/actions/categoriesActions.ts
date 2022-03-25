import { Dispatch } from "redux";

import { api } from "../../../services/api";
import {
  Category,
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CATEGORIES_ERROR,
} from "../types";

export const getCategories = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.get("/categories");

    return dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: CATEGORIES_ERROR,
      payload: console.log(e),
    });
  }
};

export const createCategory =
  (category: Category) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.post("/categories", category);

      return dispatch({
        type: CREATE_CATEGORY,
        payload: data,
      });
    } catch (e) {
      return dispatch({
        type: CATEGORIES_ERROR,
        payload: console.log(e),
      });
    }
  };

export const updateCategory =
  (category: Category) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.put(`/categories/${category._id}`, category);

      return dispatch({
        type: UPDATE_CATEGORY,
        payload: data === null ? category : data,
      });
    } catch (e) {
      return dispatch({
        type: CATEGORIES_ERROR,
        payload: console.log(e),
      });
    }
  };

export const deleteCategory = (id: string) => async (dispatch: Dispatch) => {
  try {
    await api.delete(`/categories/${id}`);

    return dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
  } catch (e) {
    return dispatch({
      type: CATEGORIES_ERROR,
      payload: console.log(e),
    });
  }
};
