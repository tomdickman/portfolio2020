import React from 'react'

import styles from './Container.css'

const Container = (props) => {

  return(
    <div id={props.id} className={`${styles.container} ${props.className ?? props.className}`}>
      {props.children}
    </div>
  )
}

export default Container