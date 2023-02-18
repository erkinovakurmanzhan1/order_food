import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../../fetchApi";

export const basketActionTypes = {
  ADD_ITEM_SUCCESS: "ADD_ITEM_SUCCESS",
  GET_BASKET_SUCCESS: "GET_BASKET_SUCCESS",
};

const initialState = {
  items: [],
  error: "",
  isLoading: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  extraReducers: (builder) => {
    // getBasket
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getBasket.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBasket.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    // deleteBasket

    builder.addCase(deleteBasketItem.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBasketItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = "";
    });
    builder.addCase(deleteBasketItem.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // addBasket

    builder.addCase(addToBasket.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addToBasket.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    // updateBasket

    builder.addCase(updateBasketItem.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(updateBasketItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBasketItem.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
export const basketActions = basketSlice.actions;

// getBasket
export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchApi("basket");
      return data.items;
    } catch (error) {
      return rejectWithValue("something went wrong getBasket ");
    }
  }
);


//addToBasket

export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });
      dispatch(getBasket());
      return data.items;
    } catch (error) {
      return rejectWithValue("something went wrong basket");
    }
  }
);

// deleteBasket
export const deleteBasketItem = createAsyncThunk(
  "basket/deleteBasket",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await fetchApi(`basketitem/${id}/delete`, {
        method: "DELETE",
      });
      dispatch(getBasket());
      return data.items;
    } catch (error) {
      return rejectWithValue("something  went wrong delete ");
    }
  }
);

// updateBasket
export const updateBasketItem = createAsyncThunk(
  "basket/updateBasket",
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await fetchApi(`basketitem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
      return data.items;
    } catch (error) {
      return rejectWithValue("something went wrong update");
    }
  }
);
