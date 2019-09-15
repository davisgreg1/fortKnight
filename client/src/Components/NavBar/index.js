import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const navBarItems = [
  {
    title: 'Home',
    to: '/',
    className: 'nav-link'
  },
  {
    title: 'Weapons',
    to: '/weapons',
    className: 'nav-link'
  },
  {
    title: 'News',
    to: '/news',
    className: 'nav-link'
  },
]

export default function NavBar () {
  return (
    <nav className={styles.nav}>
      {navBarItems.map(item => {
        return (
          <Link key={navBarItems.title} to={item.to} className={styles[item.className]}>{item.title}</Link>
        )
      })
      }
    </nav>
  )
}
