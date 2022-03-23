import { api } from "../../../services/api";
import { GET_USER, CREATE_USER, USER_ERROR } from "../types";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const getUser = (user: User) => async (dispatch: any) => {
  try {
    console.log(user);
    const response = await api.post("/auth/login", user);

    console.log(response);

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

export const createUser = (user: User) => async (dispatch: any) => {
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
