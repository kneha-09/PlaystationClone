import React, { component } from "react";
import "./listing.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ListingDisplay = (props) => {

    const listitem = ({ listData }) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (

                        <div className="item" >
                            <Link to={`/details?restId=${item._id}`}>
                                <div id="itemimage"><img src={item.image} alt={item.category} /></div>

                                <p>{item.name}</p>
                                <h2 id="price">Rs. {item.price}<h3>{item.rating} &#9733;</h3></h2>
                                <button>Add to card</button>

                            </Link>

                        </div>
                    )
                })
            }
            else {
                return (
                    <h2>No Data Found</h2>
                )
            }
        } else {
            return (
                <div className="loader">

                    <img src="https://i.ibb.co/9nb6475/loader.gif" alt="" />
                </div>
            )
        }
    }
    return (

        <div className="itemsrow">
            {listitem(props)}
        </div>
    )
}
export default ListingDisplay;
