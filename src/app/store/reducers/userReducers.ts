import { UserState, GET_USER, CREATE_USER } from "../types";

const INITIAL_STATE: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  loading: true,
};

export default function UserReducers(state = INITIAL_STATE, action: any) {
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
