export default function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className='cart blue-grey'>
      <i class="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
