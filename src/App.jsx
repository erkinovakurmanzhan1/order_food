import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useCallback, useMemo, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Basket from './components/basket/Basket'
import Header from './components/header/Header'
import Meals from './components/meals/Meals'
import Summary from './components/summary/Summary'
import SnackBarModal from './components/UI/SnackBar'
import { darkTheme, lightTheme } from './lib/constants/theme'
import { store } from './store'
import { uiSLiceActions } from './store/ui/ui.slice'

function AppContent() {
  const dispatch = useDispatch()
  const [isBasketVisible, setBasketVisisble] = useState(false)

  const snackbar = useSelector((state) => state.ui.snackbar)
  const themeMode = useSelector((state) => state.ui.themeMode)

  const showBasketHandler = useCallback(() => {
    setBasketVisisble((prevState) => !prevState)
  }, [])

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === 'light'
        ? {
            ...lightTheme,
          }
        : { ...darkTheme }

    return createTheme(currentTheme)
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
        <SnackBarModal
          isOpen={snackbar.isOpen}
          severity={snackbar.severity}
          message={snackbar.message}
          onClose={() => dispatch(uiSLiceActions.closeSnackBar())}
        />
      </Content>
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

const Content = styled.div`
  margin-top: 101px;
`

// GET /foods
// Headers: { UserID: "your_name"  }
// GET /basket
// Headers: { UserID: "your_name"  }
// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }
// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
