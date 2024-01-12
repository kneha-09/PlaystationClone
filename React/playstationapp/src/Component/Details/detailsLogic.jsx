import React, { useState, useEffect } from 'react';
import './details.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../Header';

const base_url = "https://playstationapi-bfns.onrender.com";

const DetailsDisplay = () => {
    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let [restDetails, setrestDetails] = useState()
    let [categoryid] = useState(sessionStorage.getItem('categoryid'))


    let restId = searchParams.getAll('restId');
    const restDetail = async () => {
        const rdata = await axios.get(`${base_url}/details/${restId}`);
        setrestDetails(rdata.data[0])
    }


    useEffect(() => {
        restDetail()
    }, [])

    const proceed = () => {
        navigate(`/PlaceOrder/${restDetails.name}`)
    }

    const renderDetails = () => {
        if (restDetails) {
            return (
                <>
                    <div className="productDetails">
                        <div className="productImage">
                            <img src={restDetails.image} alt={restDetail.category} />
                        </div>
                        <div className="productinfo">
                            <h1>{restDetails.name}</h1>
                            <h2>Rs.{restDetails.price}<h3>{restDetails.rating} &#9733;</h3></h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nobis mollitia dolor accusantium dolorum aliquid, repellendus ea nesciunt molestias! Beatae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <hr />
                            <div className="col-md-12">
                                <Link className="btn btn-danger"
                                    to={`/listing/${categoryid}`}>Back</Link> &nbsp;&nbsp;
                                <button className="btn btn-success"
                                    onClick={proceed}>Proceed</button>
                            </div>
                        </div>
                    </div></>

            )
        }
    }

    return (
        <>
            <div className="productcontainer">
                {renderDetails()}
            </div>
        </>
    )
}

export default DetailsDisplay;
