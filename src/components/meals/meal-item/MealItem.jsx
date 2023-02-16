import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  return (
    <div>
      <Container>
        <StyledItemInfo>
          <StyledTitle>{meal.title}</StyledTitle>
          <p>{meal.description}</p>
          <StyledPrice>${meal.price}</StyledPrice>
        </StyledItemInfo>
        <div>
          <StyledInput>
            <MealItemForm id={meal._id} price={meal.price} title={meal.title} />
          </StyledInput>
        </div>
      </Container>
    </div>
  );
};

export default MealItem;

const Container = styled.li`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(214, 214, 214, 1);
  margin-bottom: 20px;
  :last-child() {
    border: none;
  }
`;
const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-style: italic;
    color: #222222;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
`;
const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
  margin-top: 4px;
`;

const StyledPrice = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
  margin-top: 4px;
`;

const StyledInput = styled.div``;
