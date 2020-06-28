import React from 'react'

import styles from './Nav.css'
import image from '../assets/tomdickmanlogo.png'

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
      const navItems = document.querySelector(`.${styles.navItems}`)

      navItems.style.display = 'none'
    }
  }

  setInitialNavItemsVisibility() {
    const width = window.innerWidth
    const navItems = document.querySelector(`.${styles.navItems}`)

    if (width > mobileBreakPoint) {
      navItems.style.display = 'flex'
    }
  }

  toggleNavItems() {
    const navItems = document.querySelector(`.${styles.navItems}`)

    if (navItems.style.display == 'none' || navItems.style.display == '') {
      navItems.style.display = 'flex'
    } else {
      navItems.style.display = 'none'
    }
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
      <nav>
        <div role='nav' className={styles.navContainer}>
          <a href='/'  className={styles.navBrand} onClick={this.handleBrandClick}>
            <img src={image} />
          </a>
          <div className={styles.navItems}>
            <a href='#about' className={styles.navItem}>About Me</a>
            <a href='#skills' className={styles.navItem}>Skills</a>
            <a href='#education' className={styles.navItem}>Education</a>
            <a href='#experience' className={styles.navItem}>Experience</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav