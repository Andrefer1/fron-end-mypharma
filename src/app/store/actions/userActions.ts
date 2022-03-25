import { Dispatch } from "redux";

import { api } from "../../../services/api";
import { User, GET_USER, CREATE_USER, USER_ERROR } from "../types";

export const getUser = (user: User) => async (dispatch: Dispatch) => {
  try {
    const response = await api.post("/auth/login", user);

    return dispatch({
      type: GET_USER,
      payload: response.data,
    });
  } catch (e) {
    return dispatch({
      type: USER_ERROR,
      payload: console.log(e),
    });
  }
};

export const createUser = (user: User) => async (dispatch: Dispatch) => {
  try {
    const response = await api.post("/auth/register", user);

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
