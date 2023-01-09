import React from "react";
import "../styles/Navbar.css";
import phone from "../assets/images/phone.png";
import location from "../assets/images/location.gif";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-main width-50vh">
          <div className="navbar-top">
            <div className="left-section">
              <p>
                <img src={phone} />
                <a href="/#" className="main-logo">
                  Get in app
                </a>
              </p>
            </div>
            <div className="list-items">
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  Add Restaurant
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  Sign Up
                </a>
              </li>
              <li className="nav-item ">
                <a href="/#" className="nav-link">
                  LOGOUT
                </a>
              </li>
            </div>
          </div>
          <div className="main-nav">
            <h1>ZOMATO</h1>
            <h3>Discover the best food & drinks in Your Home</h3>

            <div className="search-container">
              <div className="location-bar">
                <div className="flex justify-center">
                  <div className="mb-4 xl:w-96 flex bg-white ">
                    <div className="block flex" width={"300px"}>
                      <img src={location} width={"30px"} />
                      <input
                        type="text"
                        placeholder="Place"
                        className="block w-3/8"
                      />
                    </div>
                    {/* <label
                      for="exampleText0"
                      class="form-label inline-block mb-2 text-gray-700"
                    ></label> */}
                    <div className="flex">
                      <input
                        type="text"
                        className="input-box w-5/8 "
                        id="exampleText0"
                        placeholder="Search Place"
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
