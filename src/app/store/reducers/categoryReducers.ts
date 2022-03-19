import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../types";

type Category = {
  _id: string;
  name: string;
  description: string;
};

type InitialStateProps = {
  categories: Category[];
  loading: boolean;
};

const INITIAL_STATE: InitialStateProps = {
  categories: [],
  loading: true,
};

export default function category(state = INITIAL_STATE, action: any) {
  let newCategories: Category[] | [] = [];
  let categoryIndex: number = 0;

  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
      };

    case UPDATE_CATEGORY:
      newCategories = [...state.categories];

      categoryIndex = newCategories.findIndex(
        (category: Category) => category._id === action.payload._id
      );

      newCategories[categoryIndex] = action.payload;

      return {
        ...state,
        categories: newCategories,
        loading: false,
      };

    case DELETE_CATEGORY:
      newCategories = [...state.categories];

      categoryIndex = newCategories.findIndex(
        (category: Category) => category._id === action.payload
      );

      newCategories.splice(categoryIndex, 1);

      return {
        ...state,
        categories: newCategories,
        loading: false,
      };

    default:
      return state;
  }
}
