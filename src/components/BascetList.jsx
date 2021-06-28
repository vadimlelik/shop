import React from 'react';
import BascetItem from './BascetItem';

export default function BascetList(props) {
  const { order = [] , 
    handleBasketShow= Function.prototype,
    removeFromBasket= Function.prototype,
    incQuantity,
    decQuantity,
  } = props;
  const totalPrice = order.reduce((sum,el )=>{
    return(sum + el.price * el.quantity)
  },0)
  return (
    <ul className="collection basket-list">
      <li className="collection-item active ">Корзина</li>
      {order.length ? (
        order.map((item) => {
          return <BascetItem key={item.id} {...item} 
          removeFromBasket={removeFromBasket}
          decQuantity={decQuantity}
          incQuantity={incQuantity}
          />;
        })
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость:{totalPrice} руб </li>
      <i className='material-icons basket-close ' 
      onClick={handleBasketShow}>close</i>
    </ul>
  );
}
