const GoodsItem = (props) => {
  const { description, name, id, price, full_background ,addToBascet } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={()=> addToBascet({
          id,
          name,
          price
        })}>Купить</button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
};
export default GoodsItem;
