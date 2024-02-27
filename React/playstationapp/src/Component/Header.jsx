import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDisplay from "./HeaderDisplay";
import "./Header.css";
import { Link } from "react-router-dom";
import Headerbutton from "./Headerbutton";

const base_url = "https://playstationapi-bfns.onrender.com";

// window.onload = loadcoupon();
// var icon = document.getElementById('icon');
// icon.onclick = function () {
//     document.body.classList.toggle('myDark');

//     if (document.body.classList.contains('myDark')) {
//         icon.src = "https://i.ibb.co/qFk8C4m/icons8-sun-30.png";
//     }
//     else {
//         icon.src = "https://i.ibb.co/7V1s1yw/icons8-moon-symbol-30.png";
//     }
// }

// const loadcoupon=()=>{
//     document.getElementById("coupon").style.visibility='visible';
//     document.getElementById("main").style.opacity='1';
// }
// const closecoupon=()=>{
//     document.getElementById("coupon").style.visibility='hidden';
//     document.getElementById('main').style.display="none"
// }

// const Header = () => {//var Shopcategory and se Shopcategory is a method name
//     const  Shopcategory,se Shopcategory] = useState("")

//     useEffect(() => {//when state update and when page get load first time
//         fetch(`${base_url}/category`,{method:`GET`})
//         .then((res)=>res.json())
//         .then((data)=>{
//             se Shopcategory(data)
//         })
// }, [])//only get called once cause of empty square bracket, do not look for state update

// const rendercategory =(data)=>{
//     if(data){
//         return data.map((category)=>{
//             return(
//                 <figcaption key={category._id} value={category.categoryId}>
//                     {category.category}
//                 </figcaption>
//             )
//         })
//     }
// }

const Shopcategory = () => {
  const [categorytype, setcategorytype] = useState();

  useEffect(() => {
    fetch(`${base_url}/category`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setcategorytype(data);
      });
  }, []);

  return (
    <>
      {/* <div id="main">
        <div id="coupon">
            <button onclick={closecoupon()}>&times;</button>
            <div class="left2">
                <Link href="">
                    <div class="content">
                        <img class="couponimg1" src="https://i.ibb.co/g4nskTT/gift-box.png" alt=""/>
                        <img class="couponimg2" src="https://i.ibb.co/g4nskTT/gift-box.png" alt=""/>

                        <h1 class="couponheading">70% OFF</h1>
                        <p class="couponpara">Biggest deal on bestseller</p>
                        <p class="couponpara couponpara2">Hurry! Grab the best deal

                        </p>

                </div>
                </Link>
            </div>
            <div class="left3"></div>
            <div class="left4"></div>
            <div class="left5"></div>
            <div class="left6"></div>

        </div>
    </div> */}

      <header>
        {/* //top of header */}
        <div className="top">
          <Link to={"..paggingsony.html"} className="image-link">
            <img
              className="image"
              src="https://i.ibb.co/MVkRqfD/sony.png"
              alt=""
            />
          </Link>
        </div>

        <nav className="navbar navbar-expand-lg navbar-Light bg-Light navContainerbg1 sticky darkModecClr">
          <div className="container-fluid navContainerbg2 ">
            <Link to={"/#"} id="pslogo">
              <a className="navbar-brand ps-logo " href="#">
                <img
                  src="https://i.ibb.co/Tw7TMKd/icons8-playstation-50-2.png"
                  alt=""
                />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavLightDropdown"
              aria-controls="navbarNavLightDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navContainerbg3 "
              id="navbarNavLightDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown dropDownColor dropDownColor">
                  {/* <!--list of main navbar option like games software services--> */}

                  <a
                    className="nav-link dropdown-toggle dropDownOption2 darkmodeclr"
                    href="#"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shops
                  </a>
                  {/* <!--option text of main nav bar list--> */}

                  {/* <!--inner navbar list (dropDownMenuSize)--> */}

                  <ul
                    className="dropdown-menu dropdown-menu-Light dropDownMenuSize dropdown-menu-dark"
                    aria-labelledby="navbarLightDropdownMenuLink"
                  >
                    <HeaderDisplay categorydata={categorytype} />

                    <hr />
                  </ul>
                </li>
                <li className="nav-item dropdown dropDownColor dropDownColor">
                  {/* <!--list of main navbar option like games software services--> */}

                  <a
                    className="nav-link darkmodeclr"
                    href="#"
                    aria-expanded="false"                  >
                    News{" "}
                  </a>
                </li>
                <li className="nav-item dropdown dropDownColor dropDownColor">
                  {/* <!--list of main navbar option like games software services--> */}

                  <a
                    className="nav-link darkmodeclr"
                    href="#"
                    aria-expanded="false"                  >
                    About Us{" "}
                  </a>
                </li>
              </ul>

              <Headerbutton />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Shopcategory;

//only for shop about new and support section
// <div className="collapse navbar-collapse navContainerbg3 " id="navbarNavLightDropdown">
// <ul className="navbar-nav">
//     <li className="nav-item dropdown dropDownColor dropDownColor">
//         {/* <!--list of main navbar option like games software services--> */}

//         <a className="nav-link dropdown-toggle dropDownOption2 darkmodeclr" href="#"
//             id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
//             aria-expanded="false">Shops
//         </a>
//         {/* <!--option text of main nav bar list--> */}

//         {/* <!--inner navbar list (dropDownMenuSize)--> */}

//         <ul className="dropdown-menu dropdown-menu-Light dropDownMenuSize dropdown-menu-dark"
//             aria-labelledby="navbarLightDropdownMenuLink">
//             <HeaderDisplay categorydata={categorytype} />

//             <hr />
//             <div className="extraOptionContainer">
//                 <div className="extraOptions">
//                     <ul>
//                         <li>PlayStation Indies</li>
//                         <li>PS4 games on PS5</li>
//                         <li>Free to play</li>
//                         <li>PlayStation games on pc</li>
//                         <li>Deals & offers</li>

//                     </ul>
//                 </div>
//             </div>

//         </ul>

//     </li>
// </ul>
// <ul className="navbar-nav ">
//     <li className="nav-item ">

//         <a className="nav-link darkmodeclr" href="#"
//             id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
//             aria-expanded="false">News
//         </a>
//     </li>
// </ul>
// <ul className="navbar-nav ">
//     <li className="nav-item ">

//         <a className="nav-link darkmodeclr" href="#"
//             id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
//             aria-expanded="false">Support
//         </a>
//     </li>
// </ul>
// <ul className="navbar-nav ">
//     <li className="nav-item ">

//         <a className="nav-link darkmodeclr" href="#"
//             id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
//             aria-expanded="false">About
//         </a>
//     </li>
//     <button onClick="geolocation()" className="weather">
//             <p id="weatherid"></p>
//             <img className="weathericon" src="https://i.ibb.co/CQyrsQd/icons8-weather-48.png" alt="" />
//         </button>
//     <span className="signin"><a href=""><button>Sign in</button></a></span>
//         <span className="search"><a href=""><img src="https://i.ibb.co/pdZvxYf/icons8-search-30.png"
//             alt="search icon" /></a></span>
// </ul>

// </div>
