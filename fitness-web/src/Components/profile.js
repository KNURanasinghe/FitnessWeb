import React, { useState } from "react";
import "./about.css";
import Header from "./header";
import Footer from "./footer";
import { useHistory } from "react-router-dom";
import bottomLeftImage from '../Asset/web.jpg';

const Profile = () => {
  const [mail] = useState("contact@yourwebsite.com");
  const [name] = useState("Asanga");
  const history = useHistory(); 
  const handleLogout = () => {
    // Perform any logout actions if needed

    // Redirect to the login page
    history.push("/login");
  };
  return (
    <div>
      <Header></Header>
      <div className="banner-container">
        <div className="container">
          <div className="centered-container">
            <div className="col">
              <section id="about">
                <h2>Profile</h2>
                <br></br>
              </section>
              <br></br>
              <section id="about1">
                <h3>Email</h3>
                <br></br>
                <p>{mail}</p>
              </section>
              <br></br>
              <section id="about1">
                <h3>Name</h3>
                <br></br>
                <p>{name}</p>
              </section>
             <section>
              <br></br>
             <div>
                <button id="lgout" className="logout"  onClick={handleLogout}>LogOut</button>
              </div>
             </section>
            </div>
          </div>
          <img src={bottomLeftImage} alt="Bottom Left Image" className="bottom-left-image" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
