import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
import { basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
  },
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));
