export default function BascetItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item">
      {name} X {quantity} ={price}
      <span className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
