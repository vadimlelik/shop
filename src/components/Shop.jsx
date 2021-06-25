import React,{useState , useEffect} from 'react';
import GoodList from './GoodList';
import   {API_KEY, API_URL} from '../config';



const Shop =()=>{

    const [goods,setGoods] = useState([])
    const [loading, setLoading]= useState(true)

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
            setLoading(false)
        })
    }, []);

    return(
        <main className="container content">
            <GoodList goods={goods} />
        </main>
    )
}

export default Shop 