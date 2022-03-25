import {
  Category,
  CategoriesState,
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../types";

const INITIAL_STATE: CategoriesState = {
  categories: [],
  loading: true,
};

export default function category(state = INITIAL_STATE, action: any) {
  let newCategories: Category[] | [] = [];
  let categoryIndex: number = -1;

  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case CREATE_CATEGORY:
      if (action.payload.message !== undefined) {
        return {
          ...state,
          loading: false,
        };
      }
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
