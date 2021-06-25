import React,{useState , useEffect} from 'react';
import   {API_KEY, API_URL} from '../config';

import GoodList from './GoodList';
import Cart from './Cart';
import  Preloader from './Preloader';



const Shop =()=>{

    const [goods,setGoods] = useState([])
    const [loading, setLoading]= useState(true)
    const [order, setOrder]= useState([])

    const addToBascet = (item)=>{

        const itemIndex  = order.findIndex((orderItem )=> orderItem.id  === item.id)
        console.log(itemIndex);
        if(itemIndex <0 ){
            const newItem ={
                ...item,
                quantity:1
            }
            setOrder([...order, newItem ] )
        } else{
            const newOrder = order.map((orderItem ,index )=>{
                if(index === itemIndex) {
                    return{
                        ...orderItem,
                        quantity:orderItem.quantity +1
                    }
                } else{
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        
    }

    useEffect(() => {
        fetch(API_URL,{
            headers :{
                'Authorization':API_KEY,
            }
        })
        .then((response) => response.json())
        .then((data=>{
            
            console.log(data);
            setGoods(data.featured)
            setLoading(false)
        }))
        .catch((err)=>{
            console.error(err);
            setLoading(true)
        })
    }, []);

    return(
        <main className="container content">
            <Cart quantity ={order.length}/>
            <GoodList goods={goods} />
            {loading ? <Preloader/> :<GoodList goods={goods} addToBascet={addToBascet} />}
        </main>
    )
}

export default Shop 