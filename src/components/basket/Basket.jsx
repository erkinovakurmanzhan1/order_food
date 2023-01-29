import React from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = () => {
  const items = [
    {
      title: "Sushi",
      price: 22.99,
      id: "1",
      amount: 32,
    },
    {
      title: "SusSchnitzel",
      price: 16.01,
      id: "2",
      amount: 2,
    },
    {
      title: "Barbecue Burger",
      price: 12.99,
      id: "3",
      amount: 4,
    },
    {
      title: "Green Bowl",
      price: 19.99,
      id: "4",
      amount: 3,
    },
  ];

  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? <FixedHeightConteiner>
        {items.map((item) => {
         return <BasketItem
            key={item.id}
            title={item.title}
            price={item.price}
            amount={item.amount}
          />;
        })}
        </FixedHeightConteiner> : null}
        <TotalAmount price={200.5034} onClose={() => {}} onOrder={() => {}} />
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
`