export default function BascetItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket,
    incQuantity,
    decQuantity,
  } = props;
  return (
    <li className="collection-item">
      {name} X <i className="material-icons"onClick={()=>decQuantity(id)}>remove</i> {quantity}{' '}
      <i className="material-icons"onClick={()=>incQuantity(id)}>add</i> ={price * quantity}
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
