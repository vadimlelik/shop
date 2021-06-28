import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { GoodsList } from './GoodList';
import { Cart } from './Cart';
import Preloader from './Preloader';
import BascetList from './BascetList';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBascetShow, setBascetShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGoods(data.featured);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(true);
      });
  }, []);

  const handleBasketShow = () => {
    setBascetShow(!isBascetShow);
  };
  const removeFromBasket = (itemId)=>{
    const newOrder  =  order.filter(el=> el.id !== itemId) 
    setOrder(newOrder)
  }

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />

      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBascetShow && (
        <BascetList 
        removeFromBasket={removeFromBasket}
        handleBasketShow={handleBasketShow} 
        order={order} />
      )}
    </main>
  );
};

export default Shop;
