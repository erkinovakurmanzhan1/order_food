import React, { memo, useCallback, useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const { items, updateBasketItem, deleteBasketItem } =
    useContext(BasketContext);


  const decrementAmount = useCallback((id, amount) => {
    console.log('basket');

    if (amount > 1) {
      updateBasketItem({ amount: amount - 1, id: id });
    } else {
      deleteBasketItem(id);
    }
  },[updateBasketItem,deleteBasketItem]);
  const incrementAmount = useCallback((id, amount) => {
    updateBasketItem({ amount: amount + 1, id: id });
  },[updateBasketItem]);
  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  },[items]);

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
