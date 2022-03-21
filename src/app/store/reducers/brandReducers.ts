import { GET_BRANDS, CREATE_BRAND, UPDATE_BRAND, DELETE_BRAND } from "../types";

type Brand = {
  _id: string;
  name: string;
  description: string;
};

type InitialStateProps = {
  brands: Brand[];
  loading: boolean;
};

const INITIAL_STATE: InitialStateProps = {
  brands: [],
  loading: true,
};

export default function category(state = INITIAL_STATE, action: any) {
  let newBrands: Brand[] | [] = [];
  let brandIndex: number = 0;

  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
        loading: false,
      };

    case CREATE_BRAND:
      if (action.payload.message !== undefined) {
        return {
          ...state,
          loading: false,
        };
      }
      return {
        ...state,
        brands: [...state.brands, action.payload],
        loading: false,
      };

    case UPDATE_BRAND:
      newBrands = [...state.brands];

      brandIndex = newBrands.findIndex(
        (brand: Brand) => brand._id === action.payload._id
      );

      newBrands[brandIndex] = action.payload;

      return {
        ...state,
        brands: newBrands,
        loading: false,
      };

    case DELETE_BRAND:
      newBrands = [...state.brands];

      brandIndex = newBrands.findIndex(
        (brand: Brand) => brand._id === action.payload
      );

      newBrands.splice(brandIndex, 1);

      return {
        ...state,
        brands: newBrands,
        loading: false,
      };

    default:
      return state;
  }
}
