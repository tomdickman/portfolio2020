import React from 'react'

const Spacer = (props) => {

  const styles = {
    height: (props.height ? props.height : 0),
    width: (props.width ? props.width : 0)
  }

  return(
    <div style={styles}>
    </div>
  )
}

export default Spacer