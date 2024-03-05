import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';

const url = "http://localhost:3000/orders";

const ViewOrder = () => {

    const [orders,setOrder] = useState();
    // let sessionData = sessionStorage.getItem('userInfo');
    // let data = JSON.parse(sessionData)

    useEffect(() => {
        setTimeout(() => {
            axios.get(url).then((res)=>{
                console.log("respose1111",res);
                setOrder(res.data)
            }).catch((error) => {
                console.log("errrrrr",error)
            })
        }, 5000);
    })

    return(
        <>
        <DisplayOrder orderData={orders}/>
        </>
    )

        
}

export default ViewOrder;