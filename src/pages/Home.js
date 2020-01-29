import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <>
    <h2>Home</h2>
    <NavLink to="/contacts">Contacts</NavLink>
    <br></br>
    <NavLink to="/gallery">Gallery</NavLink>
  </>
);

export default Home;
