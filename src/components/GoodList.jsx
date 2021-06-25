import GoodsItem from './GoodsItem';
const GoodList = (props) => {
  const { goods = [] } = props;
  return <div className='good-list'>
      {goods.map((item)=>{
          return <GoodsItem key={item.id} {...item}/>
      })}
  </div>;
};
export default GoodList;
