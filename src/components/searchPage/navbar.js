import { useState, useEffect } from "react";
import "../../App.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import React from 'react';


async function doLoginWithGoogle(token) {
  // Sesuaikan endpoint
  const response = await fetch("http://localhost:8000/api/v1/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token
    }),
  });
  const data = await response.json();
  return data.token;
}


const Navbar = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");


  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);


  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.replace('/')
  }

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if(response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((token) => {
            localStorage.setItem("token", token);
            setIsLoggedIn(token);
          })
        .catch((err) => console.log(err.message))
      
      // localStorage.setItem("token", response.tokenId);
      // setIsLoggedIn(response.tokenId);

    }
  }

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  }

    return(
        <nav className="navbar navbar-expand-lg navbar-expand-sm fixed-top" style={{backgroundColor: '#f1f3ff'}}>
        <div className="container">
          <a className="navbar-brand" href="#" style={{backgroundColor:'#0b00a3' , color: '#0b00a3'}}>Binarrrrrrr</a>
  
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
  
          <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Binar Rental Car</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#service">Our Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#whyus">Why Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimoni">Testimonial</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sewa">Sewa</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">FAQ</a>
                  </li>
                  <li className="nav-item">    

                  </li>
                  <form className="form-inline my-2 my-lg-0">
                  {!isLoggedIn ? (
                        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                          <GoogleLogin
                              onSuccess={credentialResponse => {
                                haldleSuccessGoogle(credentialResponse)
                              }}
                              onError={() => {
                                haldleFailureGoogle("error Login")
                              }}
                            />
                        </GoogleOAuthProvider>
                    ) : (
                        <input type="submit" className="btn btn-outline-danger" value="Logout" onClick={handleLogout}></input>
                    )}
                  </form>
                </ul>
              </div>
            </div>
        </div>
      </nav>
    )
}

export default Navbar