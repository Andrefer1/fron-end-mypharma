import { PayloadAction } from "@reduxjs/toolkit";

import { GET_USER, CREATE_USER } from "../types";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

type ActionProps = {
  type: string;
  payload: User;
};

type InitialStateProps = {
  user: User;
  loading: boolean;
};

const INITIAL_STATE: InitialStateProps = {
  user: {
    _id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  loading: true,
};

export default function UserReducers(
  state = INITIAL_STATE,
  action: any //PayloadAction<ActionProps>
) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case CREATE_USER:
      if (action.payload.message !== undefined) {
        return {
          ...state,
          loading: false,
        };
      }
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
