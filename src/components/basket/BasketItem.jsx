import styledComponent from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import styled from '@emotion/styled'
import ButtonMui from '../UI/ButtonMui'

const BasketItem = ({
  title,
  price,
  amount,
  incrementAmount,
  decrementAmount,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <StyledIconsButton
            borderstyle="squared"
            variant="outlined"
            onClick={decrementAmount}
          >
            <RemoveIcon />
          </StyledIconsButton>
          <StyledIconsButton
            borderstyle="squared"
            variant="outlined"
            onClick={incrementAmount}
          >
            <AddIcon />
          </StyledIconsButton>
        </CounterContainer>
      </Content>
    </Container>
  )
}

export default BasketItem

const StyledIconsButton = styled(ButtonMui)(({ theme }) => ({
  '&': {
    border: `1px solid${theme.palette.primary.dark}`,
    background: 'none',

    color: theme.palette.primary.dark,
  },
  '&:hover': {
    border: 'none',
    background: theme.palette.primary.dark,
  },
  '&:active': {
    background: theme.palette.primary.main,
  },
}))

const Container = styledComponent.div`
  padding: 24px 0;
  width: 100%;
`
const Title = styledComponent.p`
  margin: 0 0 12px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`
const Price = styledComponent.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`
const Amount = styledComponent.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 6px 14px;
  display: block;
`
const PriceAndAmountContainer = styledComponent.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`

const CounterContainer = styledComponent.div`
  display: flex;
  gap: 14px;
`
const Content = styledComponent.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
