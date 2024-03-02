import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const HeaderDisplay = (props) => {

    const listcategory = ({ categorydata }) => {
        if (categorydata) {
            return categorydata.map((item) => {
                return (
                    
                    <Link to={`/listing/${item.categoryId}`}>
                        <li><a className="dropdown-item" href="../pagging/second.html">
                            <div className="GameOptionImg"><img src={item.image}
                                alt={item.category} />
                                <figcaption>{item.category}</figcaption>
                            </div>
                        </a></li></Link>)
            })
        }
    }
    return (
        <div className="navMenu">
            {/* <!--div for putting inner list's option into it-->
            <!--inner list first option (Gameoption Gameoption1 GameOptionImg)--> */}
            {listcategory(props)}
        </div>
    )
}

export default HeaderDisplay;


























{/* <li><a className="dropdown-item" href="../pagging/second.html">
                <div className="GameOptionImg"><img src=""
                    alt="" />
                    {/* {rendercategory(shopcategory)} */}
//     </div>
// </a></li>
{/* <!--inner list second option-->
                                        <li><a className="dropdown-item" href="#">
                                            <div className="GameOptionImg"><img src="https://i.ibb.co/t2dD9cm/PS5.png"
                                                alt="" />
                                               {rendercategory(shopcategory)}
                                            </div>
                                        </a></li>
                                        <!--inner list third option-->
                                     <li><a className="dropdown-item" href="#">
                                            <div className="GameOptionImg"><img src="https://i.ibb.co/99R7J29/PSVR2.png"
                                                alt="" />
                                                {rendercategory(shopcategory)}
                                            </div>
                                        </a></li> 
                                        <li><a className="dropdown-item" href="#">
                                            <div className="GameOptionImg"><img src="https://i.ibb.co/99R7J29/PSVR2.png"
                                                alt="" />
                                                {rendercategory(shopcategory)}
                                            </div>
                                        </a></li>  */} 