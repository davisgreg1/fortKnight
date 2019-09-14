import React from 'react';
import {Link} from "react-router-dom";
import "./styles.scss";

export default function NavBar() {
  return (
    <nav clasName="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/weapons" className="nav-link">Weapons</Link>
    </nav>
  )
}
