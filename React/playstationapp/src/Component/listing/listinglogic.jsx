import React, { useEffect, useState } from "react";
import "./listing.css";
import { useParams } from "react-router-dom";
import ListingDisplay from "./listingDisplay";
import axios from "axios";


const base_url = "https://playstationapi-bfns.onrender.com";

const Listing = () => {
    let params = useParams();

    const [categoryItem, setCategoryItem]  = useState();

    useEffect(() => {
        let categoryid = params.categoryId;
        sessionStorage.setItem('categoryid',categoryid)
        axios.get(`${base_url}/categoryitem?categoryId=${categoryid}`)
            .then((res) => {
                setCategoryItem(res.data)
            })
    }, [])


    return (
        <>
            <div className="containers">
                <div className="heading"><h3>Bringing You The Extraordinary</h3>
                    <h1>PS5<sup>TM</sup> Consoles</h1></div>

                <ListingDisplay listData={categoryItem} />
            </div>
        </>
    )
}

export default Listing;