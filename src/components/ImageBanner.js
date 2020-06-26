import React from 'react'

import styles from './ImageBanner.css'

const ImageBanner = (props) => {

  const componentStyles = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: `${props.height}`
  }

  const subtitle = () => {

    if (props.subtitle) {
      return(
        <p className={`${styles.subtitle} ${styles.textBackground}`}>
          <span>{props.subtitle}</span>
        </p>
      )
    }
  }

  return(
    <div className={`${styles.imageBanner}`} style={componentStyles}>
      <h1 className={styles.textBackground}>
        <span className={styles.title}>{props.title}</span>
      </h1>
      {subtitle()}
    </div>
  )
}

export default ImageBanner