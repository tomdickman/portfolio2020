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
          <div className={styles.skillsIcon}>
            <FontAwesomeIcon icon={['fab', 'html5']}  size='6x' title='HTML5' />
            <p>HTML5</p>
          </div>
          <div className={styles.skillsIcon}>
            <FontAwesomeIcon icon={['fab', 'css3']} size='6x' title='CSS' />
            <p>CSS</p>
          </div>
          <div className={styles.skillsIcon}>
            <FontAwesomeIcon icon={['fab', 'js']} size='6x' title='Javascript' />
            <p>Javascript</p>
          </div>
          <div className={styles.skillsIcon}>
            <FontAwesomeIcon icon={['fab', 'php']} size='6x' title='PHP' />
            <p>PHP</p>
          </div>
          <div className={styles.skillsIcon}>
            <FontAwesomeIcon icon={['fab', 'react']} size='6x' title='ReactJS' />
            <p>ReactJS</p>
          </div>
          <div className={styles.skillsIcon}>
            <FontAwesomeIcon icon={['fab', 'aws']} size='6x' title='Amazon Web Services' />
            <p>AWS</p>
          </div>
        </div>
      </Container>
      <Spacer height='20vh' />
      <Container id='education' className={styles.education}>

      </Container>
      <Spacer height='20vh' />
      <Container id='experience' className={styles.experience}>

      </Container>
      <Spacer height='20vh' />
    </div>
  )
}

export default Home