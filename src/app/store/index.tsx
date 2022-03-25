import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers'
import { UserState, BrandsState, CategoriesState, ProductsState } from "./types";

export interface ApplicationState {
    user: UserState
    brands: BrandsState
    categories: CategoriesState
    products: ProductsState;
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(thunk))

export default store
