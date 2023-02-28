import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  themeMode: 'light',
  snackbar: {
    isOpen: false,
    message: '',
    severity: 'success',
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSnackBar(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.snackbar.isOpen = true
      // eslint-disable-next-line no-param-reassign
      state.snackbar.message = action.payload.message
      // eslint-disable-next-line no-param-reassign
      state.snackbar.severity = action.payload.severity
    },
    closeSnackBar(state) {
      // eslint-disable-next-line no-param-reassign
      state.snackbar = initialState.snackbar
    },
    changeTheme(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.themeMode = action.payload
    },
  },
})
export const uiSLiceActions = uiSlice.actions
