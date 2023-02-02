import styled from "styled-components";
import Button from "../UI/Button";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plusIcon.svg";

const BasketItem = ({ title, price, amount,incrementAmount,decrementAmount }) => {
  
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button borderStyle="squared" variant="outlined" onClick={decrementAmount}>
            <StyledMinusIcon />
          </Button>
          <Button borderStyle="squared" variant="outlined" onClick={incrementAmount}>
            <StyledPlusIcon />
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

export default BasketItem;

const StyledMinusIcon = styled(MinusIcon)`
  display: flex;
  align-items: center;
`;
const StyledPlusIcon = styled(IconPlus)`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
`;
const Title = styled.p`
  margin: 0 0 12px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;
const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: block;
`;
const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`;

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
