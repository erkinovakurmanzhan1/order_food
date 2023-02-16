import { fetchApi } from "../../fetchApi";

export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  idLoading: false,
  error: "",
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsActionTypes.GET_MEALS_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case mealsActionTypes.GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: "",
      };
    case mealsActionTypes.GET_MEALS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: mealsActionTypes.GET_MEALS_STARTED });

      const { data } = await fetchApi("foods");
      dispatch({
        type: mealsActionTypes.GET_MEALS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: mealsActionTypes.GET_MEALS_FAILED,
        payload: "something went wrong",
      });
    }
  };
};

