export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const USER_ERROR = "USER_ERROR";

export const GET_BRANDS = "GET_BRANDS";
export const CREATE_BRAND = "CREATE_BRAND";
export const UPDATE_BRAND = "UPDATE_BRAND";
export const DELETE_BRAND = "DELETE_BRAND";
export const BRANDS_ERROR = "PRODUCTS_ERROR";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const CATEGORIES_ERROR = "PRODUCTS_ERROR";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface Brand {
  _id: string;
  name: string;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
}

export interface CategoriesState {
  readonly categories: Category[];
  readonly loading: boolean;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}

export interface UserState {
  readonly user: User;
  readonly loading: boolean;
}

export interface BrandsState {
  readonly brands: Brand[];
  readonly loading: boolean;
}

export interface ProductsState {
  readonly products: Product[];
  readonly loading: boolean;
}

export interface CategoriesState {
  readonly categories: Category[];
  readonly loading: boolean;
}

// export interface ActionProps {
//   type: string;
//   payload: string | Product | Product[] | Category | Category[] | RequestError;
// }

// export type Payload = {
//   payload: {
//     message: string;
//     statusCode: number;
//   };
// };

export interface RequestError {
  message: string;
  statusCode: number;
}

export type Payload = {
  payload: Product;
  error: RequestError;
  //     | {
  //         message: string;
  //         statusCode: number;
  //       }
  //     | Product;
};
