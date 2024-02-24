import React, { useEffect, useState } from "react";
import "./Games.css";
import { useParams } from "react-router-dom";
import ListingDisplay from "../listing/listingDisplay";
import axios from "axios";
import DeviceFilter from "../Filters/deviceFilter";

const base_url = "https://playstationapi-bfns.onrender.com";

const Games = () => {
    let params = useParams();
 
    const [categoryItem, setCategoryItem] = useState();
    let gameid=params.gameId;
    useEffect(() => {
        let categoryid = params.categoryId;
        sessionStorage.setItem('categoryid', categoryid)
        axios.get(`${base_url}/categoryitem?categoryId=${categoryid}`)
            .then((res) => {
                setCategoryItem(res.data)
            })
    }, [])

    

    const setDataPerFilter = (data) => {
        setCategoryItem(data)
    }


    return (
        <>
            <div className="containers">
                <div className="heading"><h3>Bringing You The Extraordinary</h3>
                    <h1>PS5<sup>TM</sup> Consoles</h1></div>
                <div className="itemcontainer">
                    <div className="filtercontainer">
                        <DeviceFilter gameId={gameid}
                            itemperdevice={(data) => {
                                setDataPerFilter(data)
                            }} />
                            {/* <GenreFilter gameId={gameid}
                            restPerGenre={(data)=>{
                                setDataPerFilter(data)}}/>  */}
                    </div>
                    <div className="leftcontainer">
                        <ListingDisplay listData={categoryItem} /></div>
                </div>


            </div>
        </>
    )
}

export default Games;