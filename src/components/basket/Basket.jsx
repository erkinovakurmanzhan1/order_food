import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponent from 'styled-components'
import {
  deleteBasketItem,
  submitOrder,
  updateBasketItem,
} from '../../store/basket/thunks'
import { uiSLiceActions } from '../../store/ui/ui.slice'
import BasketItem from './BasketItem'
import TotalAmount from './TotalAmount'

const Basket = ({ onClose }) => {
  const items = useSelector((state) => state.basket.items)
  const dispatch = useDispatch()

  const decrementAmount = (id, amount) => {
    if (amount > 0) {
      dispatch(updateBasketItem({ amount: amount - 1, id }))
    } else {
      dispatch(deleteBasketItem(id))
    }
  }

  const incrementAmount = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id }))
  }
  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0)
  }, [items])

  const orderSubmitHandler = async () => {
    try {
      await dispatch(
        submitOrder({
          orderData: { items },
        })
      ).unwrap()
      dispatch(
        uiSLiceActions.showSnackBar({
          severity: 'success',
          message: 'Order completed successfully!',
        })
      )
    } catch (error) {
      dispatch(
        uiSLiceActions.showSnackBar({
          severity: 'error',
          message: 'Failed ,Try again later!',
        })
      )
    } finally {
      onClose()
    }
  }
  return (
    <Modal open={onClose}>
      <Container>
        <Content>
          {items.length ? (
            <FixedHeightConteiner>
              {items.map((item) => {
                return (
                  <BasketItem
                    incrementAmount={() =>
                      // eslint-disable-next-line no-underscore-dangle
                      incrementAmount(item._id, item.amount)
                    }
                    decrementAmount={() =>
                      // eslint-disable-next-line no-underscore-dangle
                      decrementAmount(item._id, item.amount)
                    }
                    // eslint-disable-next-line no-underscore-dangle
                    key={item._id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  />
                )
              })}
            </FixedHeightConteiner>
          ) : null}
          <TotalAmount
            price={getTotalPrice()}
            onClose={onClose}
            onOrder={orderSubmitHandler}
          />
        </Content>
      </Container>
    </Modal>
  )
}

export default Basket

const Content = styledComponent.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`
const FixedHeightConteiner = styledComponent.div`
  max-height: 228px;
  overflow-y: scroll;
`

const Container = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '20vh',
  background: theme.palette.secondary.light,
  color: theme.palette.primary.constrastText,
  padding: '1rem',
  borderRadius: '14px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  zIndex: '30',
  animation: 'slide-down 300ms ease-out forwards',
  width: ' 40rem',
  left: 'calc(50% - 20rem)',

  '@keyframes slide-down': {
    from: {
      opacity: '0',
      transform: 'translateY(-3rem)',
    },
    to: {
      opacity: ' 1',
      transform: 'translateY(0)',
    },
  },
}))
