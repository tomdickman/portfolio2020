import React from 'react'

import styles from './Nav.css'
import image from '../assets/tomdickmanlogo.svg'

const mobileBreakPoint = 576;

class Nav extends React.Component {

  constructor(props) {
    super(props)

    this.handleBrandClick = this.handleBrandClick.bind(this)
    this.handleWindowClick = this.handleWindowClick.bind(this)
    this.setInitialNavItemsVisibility = this.setInitialNavItemsVisibility.bind(this)
    this.toggleNavItems = this.toggleNavItems.bind(this)
  }

  componentDidMount() {
    this.setInitialNavItemsVisibility()
    window.addEventListener('click', this.handleWindowClick)
  }

  handleWindowClick(event) {
    const navNode = document.querySelector('nav')
    if (!navNode.contains(event.target)) {
      const navItems = document.querySelectorAll(`.${styles.navItem}`)

      navItems.forEach(element => {
        element.style.display = 'none'
      })
    }
  }

  setInitialNavItemsVisibility() {
    const width = window.innerWidth
    const navItems = document.querySelectorAll(`.${styles.navItem}`)

    if (width > mobileBreakPoint) {
      navItems.forEach(element => {
        element.style.display = 'block';
      })
    }
  }

  toggleNavItems() {
    const navItems = document.querySelectorAll(`.${styles.navItem}`)

    navItems.forEach(element => {
      if (element.style.display == 'none' || element.style.display == '') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    })
  }

  handleBrandClick(event) {
    // Don't follow the link.
    event.preventDefault()
    const width = window.innerWidth

    if (width < mobileBreakPoint) {
      this.toggleNavItems()
    }
  }

  render() {

    return (
    <nav class='container'>
      <div role='nav' className={styles.navContainer}>
        <a href='/'  className={styles.navBrand} onClick={this.handleBrandClick}>
          <img src={image} />
        </a>
        <a href='#' className={styles.navItem}>About Me</a>
        <a href='#' className={styles.navItem}>Skills</a>
        <a href='#' className={styles.navItem}>Education</a>
        <a href='#' className={styles.navItem}>Experience</a>
        </div>
    </nav>
    )
  }
}

export default Nav