import React from 'react'

import styles from './Banner.css'

const Subtitle = (props) => {
  if (props.text) {
    return (
      <p className={`${styles.subtitle} ${styles.bannerText}`}>
        <span>{props.text}</span>
      </p>
    )
  }
}

class Banner extends React.Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(event) {

  }

  render() {
    return(
      <div className={styles.banner}>
        <h1 className={styles.bannerText} onScroll={this.handleScroll}>
          <span className={styles.title}>{this.props.title}</span>
        </h1>
        <Subtitle text={this.props.subtitle} />
      </div>
    )
  }
}

export default Banner