import { combineReducers } from "redux";

import user from "./userReducers";
import products from "./productReducers";
import categories from "./categoryReducers";
import brands from "./brandReducers";

export default combineReducers({
  user,
  products,
  categories,
  brands,
});
