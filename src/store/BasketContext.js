import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../fetchApi";

export const BasketContext = createContext({
  items: [],
});
const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const updateBasketItem = async ({id,amount})=>{
    
    try {
      const response = await fetchApi(`basketitem/${id}/update`, {
        method: "PUT",
        body: { amount},
      });
      setItems(response.data.items)
    } catch (error) {
      console.log(error);
    }
  }

  const getBasket = async () => {
    try {
      const { data } = await fetchApi("basket");
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  const addToBasket = async (newItem) => {
    
    try {
      const response = await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount :newItem.amount},
      });
      setItems(response.data.items)
    } catch (error) { 
      console.log(error);
    }
   
  };

  const deleteBasketItem = async (id)=>{
    try{
      const {data} = await fetchApi(`basketitem/${id}/delete`, {
        method: "DELETE",
      });
      setItems(data.items)
    } catch (error) { 
      console.log(error);
    }
   
    }
 

  const state = {
    items,
    addToBasket,
    updateBasketItem,
    deleteBasketItem,
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
  }

  export default BasketProvider;