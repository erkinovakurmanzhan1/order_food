import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../../lib/fetchApi'

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchApi('basket')
      return data.items
    } catch (error) {
      return rejectWithValue('something went wrong getBasket ')
    }
  }
)

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: 'POST',
        body: { amount: newItem.amount },
      })
      dispatch(getBasket())
      return data.items
    } catch (error) {
      return rejectWithValue('something went wrong basket')
    }
  }
)

export const deleteBasketItem = createAsyncThunk(
  'basket/deleteBasket',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await fetch(`basketitem/${id}/delete`, {
        method: 'DELETE',
      })
      dispatch(getBasket())
      return data.items
    } catch (error) {
      return rejectWithValue('something  went wrong delete ')
    }
  }
)

export const updateBasketItem = createAsyncThunk(
  'basket/updateBasket',
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await fetchApi(`basketitem/${id}/update`, {
        method: 'PUT',
        body: { amount },
      })
      dispatch(getBasket())
      return data.items
    } catch (error) {
      return rejectWithValue('something went wrong update')
    }
  }
)

export const submitOrder = createAsyncThunk(
  'basket/submitOrder',
  async ({ orderData }, { dispatch, rejectWithValue }) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: orderData,
      })
      return dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('something went wrong submitorder')
    }
  }
)
