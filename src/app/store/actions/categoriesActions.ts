import { ApiResponse } from "apisauce";

import { api } from "../../../services/api";
import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CATEGORIES_ERROR,
} from "../types";

type Category = {
  _id: string;
  name: string;
  description: string;
};

export const getCategories = () => async (dispatch: any) => {
  try {
    const categories = await api
      .get("/categories")
      .then((response: ApiResponse<any>) => {
        const { ok, data } = response;

        if (ok) {
          return data;
        }
      });

    return dispatch({
      type: GET_CATEGORIES,
      payload: categories,
    });
  } catch (e) {
    return dispatch({
      type: CATEGORIES_ERROR,
      payload: console.log(e),
    });
  }
};

export const createCategory = (category: Category) => async (dispatch: any) => {
  try {
    const response = await api.post("/categories", category);

    return dispatch({
      type: CREATE_CATEGORY,
      payload: response.data,
    });
  } catch (e) {
    return dispatch({
      type: CATEGORIES_ERROR,
      payload: console.log(e),
    });
  }
};

export const updateCategory =
  ({ _id, name, description }: Category) =>
  async (dispatch: any) => {
    try {
      await api.put(`/categories/${_id}`, {
        name,
        description,
      });

      return dispatch({
        type: UPDATE_CATEGORY,
        payload: { _id, name, description },
      });
    } catch (e) {
      return dispatch({
        type: CATEGORIES_ERROR,
        payload: console.log(e),
      });
    }
  };

export const deleteCategory = (id: string) => async (dispatch: any) => {
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
