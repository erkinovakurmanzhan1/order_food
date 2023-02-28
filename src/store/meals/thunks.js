import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/fetchApi'

const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchApi('foods')
      return data
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)
export default getMeals
