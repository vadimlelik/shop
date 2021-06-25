import GoodsItem from './GoodsItem';
const GoodList = (props) => {
  const { goods = [] ,addToBascet = Function.prototype} = props;
  return <div className='good-list'>
      {goods.map((item)=>{
          return <GoodsItem key={item.id} {...item} addToBascet={addToBascet}/>
      })}
  </div>;
};
export default GoodList;
