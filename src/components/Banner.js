import React from 'react'

import styles from './Banner.css'

const Banner = (props) => {

  const subtitle = () => {

    if (props.subtitle) {
      return(
        <p className={`${styles.subtitle} ${styles.bannerText}`}>
          <span>{props.subtitle}</span>
        </p>
      )
    }
  }

  return(
    <div className={styles.banner}>
      <h1 className={styles.bannerText}>
        <span className={styles.title}>{props.title}</span>
      </h1>
      {subtitle()}
    </div>
  )
}

export default Banner