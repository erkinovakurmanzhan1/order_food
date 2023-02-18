import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";

const rootReducer = combineReducers({
  [mealsSlice.name]: mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
