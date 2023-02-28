/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  addToBasket,
  deleteBasketItem,
  getBasket,
  updateBasketItem,
} from './thunks'

const initialState = {
  items: [],
  error: '',
  isLoading: false,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(getBasket.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getBasket.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })

    builder.addCase(deleteBasketItem.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deleteBasketItem.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload
      state.error = ''
    })
    builder.addCase(deleteBasketItem.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(addToBasket.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(addToBasket.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })

    builder.addCase(updateBasketItem.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(updateBasketItem.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(updateBasketItem.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  },
})
export const basketActions = basketSlice.actions
