import React from 'react'

import styles from './Container.css'

const Container = (props) => {

  const componentStyles = {
    height: `${props.height}`
  }

  const customStyles = () => {
    return props.classes || styles.containerDefaults
  }

  return(
    <div className={`container ${customStyles()}`}
        style={componentStyles}>
      {props.children}
    </div>
  )
}

export default Container