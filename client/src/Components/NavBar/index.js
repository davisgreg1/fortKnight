import React from 'react';
import {Link} from "react-router-dom";
import styles from "./styles.scss";

const navBarItems = [
  {
    id: 1,
    title: "Home",
    to: "/",
    className: "nav-link"
  }, {
    id: 2,
    title: "Weapons",
    to: "/weapons",
    className: "nav-link"
  }
]

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      {navBarItems.map(item => {
        return (
          <Link to={item.to} className={styles[item.className]}>{item.title}</Link>
        )
      })
}
    </nav>
  )
}
