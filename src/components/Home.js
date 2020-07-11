import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Container from './Container'
import Spacer from './Spacer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Home.css'

function Home() {
  return (
    <div className={styles.homeView}>
      <Nav />
      <Banner
        title='Tom Dickman'
        subtitle='Web Developer'
      />
      <Container id='about' className={styles.about}>
        <h1>Hi there, I'm Tom</h1>
        <p>I am a <strong>full-stack developer</strong>, with a passion for contributing to open source projects and developing new features and APIs.</p>
        <p>You can view some of my contributions to open source projects, and plugins I've built over on my <a href='https://github.com/tomdickman'><strong>Github <FontAwesomeIcon icon={['fab', 'github']} /> page</strong></a>.</p>
        <p>If you want to see what features I have contributed to <strong>Moodle</strong>, the largest open-source learning platform on the web, you can look for my name in the <a href='https://moodle.org/dev/contributions.php'>developer credits</a></p>
      </Container>
      <Spacer height='20vh' />
      <Container id='skills' className={styles.skills}>
        <h1>Things I'm skilled with...</h1>
        <div className={styles.skillsIcons}>
          <div className={styles.skillsIcon}><FontAwesomeIcon icon={['fab', 'html5']}  size='4x' title='HTML5' /></div>
          <div className={styles.skillsIcon}><FontAwesomeIcon icon={['fab', 'css3']} size='4x' title='CSS' /></div>
          <div className={styles.skillsIcon}><FontAwesomeIcon icon={['fab', 'js']} size='4x' title='Javascript' /></div>
          <div className={styles.skillsIcon}><FontAwesomeIcon icon={['fab', 'php']} size='4x' title='PHP' /></div>
          <div className={styles.skillsIcon}><FontAwesomeIcon icon={['fab', 'react']} size='4x' title='ReactJS' /></div>
          <div className={styles.skillsIcon}><FontAwesomeIcon icon={['fab', 'aws']} size='4x' title='Amazon Web Services' /></div>
        </div>
      </Container>
      <Spacer height='20vh' />
      <Container id='education' className={styles.education}>

      </Container>
      <Spacer height='20vh' />
      <Container id='experience' className={styles.experience}>

      </Container>
    </div>
  )
}

export default Home