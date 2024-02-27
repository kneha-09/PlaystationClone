import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

const url = "http://3.17.216.66:5000/api/auth/userinfo";

const Headerbutton = () => {
  const [userData, setUserData] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("ltk") !== null) {
      fetch(url, {
        method: "GET",
        headers: {
          "x-access-token": sessionStorage.getItem("ltk"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("userInfo");
    setUserData("");
    navigate("/");
  };

  const ConditionalHeader = () => {
    if (userData) {
      if (userData.name) {
        sessionStorage.setItem("userInfo", JSON.stringify(userData));
        return (
          <>
            <Link to="register" className="btn btn-primary">
              <img src="https://i.ibb.co/PThcwRS/user.png"></img> Hi{" "}
              {userData.name}
            </Link>{" "}
            &nbsp;
            <button onClick={handleLogout} className="btn btn-danger">
              <img src="https://i.ibb.co/ZH9qD67/log-out.png"></img> Logout
            </button>
          </>
        );
      }
    } else {
      return (
        <>
          <Link to="register" className="btn btn-primary">
            <img src="https://i.ibb.co/SXCmqPq/add-user.png"></img> Sign Up
          </Link>{" "}
          &nbsp;
          <Link to="login" className="btn btn-success">
            <img src="https://i.ibb.co/Mh2mCCP/log-in.png"></img> Login
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <div id="social">{ConditionalHeader()}</div>
    </>
  );
};

export default Headerbutton;
