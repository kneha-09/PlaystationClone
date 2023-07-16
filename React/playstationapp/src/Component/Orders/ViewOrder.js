import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';

const url = "https://playstationapi-bfns.onrender.com/placeOrder";

const ViewOrder = () => {

    const [orders,setOrder] = useState();
    // let sessionData = sessionStorage.getItem('userInfo');
    // let data = JSON.parse(sessionData)

    useEffect(() => {
        axios.get(url).then((res)=>{setOrder(res.data)})
    })

    return(
        <>
        <DisplayOrder orderData={orders}/>
        </>
    )

        
}

export default ViewOrder;