import { store } from '../../store'

export const lightTheme = {
  palette: {
    primary: {
      main: '#4b0f00',
      light: '#7a1f09',
      dark: '#5f1c0b',
      constrastText: '#00000',
    },
    secondary: {
      main: '#5c5957',
      light: '#ffe1e1',
      dark: '#48085',
      constrastText: '#FFFF',
    },
    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      constrastText: '#FFFF',
    },
    success: {
      main: '#0ff',
      light: '#0ff',
      dark: '#0ff',
      constrastText: 'bisque',
    },
  },
  typoghraphy: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  // spacing: {},
}

export const darkTheme = {
  palette: {
    primary: {
      main: '#343232',
      light: '#5f5959',
      dark: '#1e1d1d',
      constrastText: '#FFFF',
    },
    secondary: {
      main: '#5c5957',
      light: '#6c6c6c',
      dark: '#48085',
      constrastText: '#FFFF',
    },
    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      constrastText: '#FFFF',
    },
    success: {
      main: '#0ff',
      light: '#0ff',
      dark: '#0ff',
      constrastText: '#fff',
    },
  },
  typoghraphy: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  // spacing: {},
}

export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode
  return currentTheme === 'light' ? lightTheme : darkTheme
}
