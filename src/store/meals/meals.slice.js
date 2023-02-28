import { createSlice } from '@reduxjs/toolkit'
import getMeals from './thunks'

const initialState = {
  meals: [],
  isLoading: false,
  error: '',
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMeals.fulfilled, (state, action) => {
      state.meals = action.payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(getMeals.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getMeals.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const mealsActions = mealsSlice.actions
