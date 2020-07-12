import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Footer.css'

function Footer() {
    return (
      <footer id='contact'>
        <div role='footer' className={styles.footerContainer}>
            <h4>Contact Me  </h4>
            <a href='mailto:twdickman@gmail.com'>
                <FontAwesomeIcon icon={['far', 'envelope']} size='2x' title='Email' />
            </a>
            <a href='https://github.com/tomdickman'>
                <FontAwesomeIcon icon={['fab', 'github']} size='2x' title='Github' />
            </a>
            <a href='https://www.linkedin.com/in/twdickman/'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' title='LinkedIn' />
            </a>
            <a href='https://twitter.com/tomwdickman'>
                <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' title='Twitter' />
            </a>
        </div>
      </footer>
    )
}

export default Footer