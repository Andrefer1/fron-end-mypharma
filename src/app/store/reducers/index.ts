import { combineReducers } from "@reduxjs/toolkit";

import products from "./productReducers";
import categories from "./categoryReducers";
import brands from "./brandReducers";

export default combineReducers({
  products,
  categories,
  brands,
});
