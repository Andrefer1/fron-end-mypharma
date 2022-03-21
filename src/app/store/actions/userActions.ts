import { ApiResponse } from "apisauce";

import { api } from "../../../services/api";
import { GET_USER, CREATE_USER, USER_ERROR } from "../types";

type User = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
};

export const getUser = () => async (dispatch: any) => {
  try {
    const user = await api.get("/user").then((response: ApiResponse<any>) => {
      const { ok, data } = response;

      if (ok) {
        return data;
      }
    });

    return dispatch({
      type: GET_USER,
      payload: user,
    });
  } catch (e) {
    return dispatch({
      type: USER_ERROR,
      payload: console.log(e),
    });
  }
};

export const createUser = (user: User) => async (dispatch: any) => {
  try {
    const response = await api.post("/user", user);

    return dispatch({
      type: CREATE_USER,
      payload: response.data,
    });
  } catch (e) {
    return dispatch({
      type: USER_ERROR,
      payload: console.log(e),
    });
  }
};
