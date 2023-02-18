import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteBasketItem, updateBasketItem } from "../../store/basket/basketSlice";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const items = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const decrementAmount = 
    (id, amount) => {
      if (amount > 1) {
        dispatch(updateBasketItem({ amount: amount - 1, id: id }));
      } else {
        dispatch(deleteBasketItem(id));
      }
    }

  const incrementAmount = 
    (id, amount) => {
      dispatch(updateBasketItem({ amount: amount + 1, id: id }));
    }
   const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  }, [items]);

  return (
    <Modal onClose={onClose}>
      <Content>
        {items.length ? (
          <FixedHeightConteiner>
            {items.map((item) => {
              return (
                <BasketItem
                  incrementAmount={() => incrementAmount(item._id, item.amount)}
                  decrementAmount={() => decrementAmount(item._id, item.amount)}
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedHeightConteiner>
        ) : null}
        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;
const FixedHeightConteiner = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
