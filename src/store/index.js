import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./basket/basketReducer";
import { mealsReducer } from "./meals/mealsReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  basket:basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
