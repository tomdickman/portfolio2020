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
      <Container id='about' className={styles.aboutMe} >
        <h1>Hi there, I'm Tom</h1>
        <p>I am a <strong>full-stack developer</strong>, with a passion for contributing to open source projects and developing new features and APIs.</p>
        <p>You can view some of my contributions to open source projects, and plugins I've built over on my <a href='https://github.com/tomdickman'><strong>Github <FontAwesomeIcon icon={['fab', 'github']} /> page</strong></a>.</p>
        <p>If you want to see what features I have contributed to <strong>Moodle</strong>, the largest open-source learning platform on the web, you can look for my name in the <a href='https://moodle.org/dev/contributions.php'>developer credits</a></p>
      </Container>
      <Spacer height='10vh' />
      <Container id='skills'>
        <FontAwesomeIcon icon={['fab', 'html5']} />
        <FontAwesomeIcon icon={['fab', 'css3']} />
        <FontAwesomeIcon icon={['fab', 'js']} />
        <FontAwesomeIcon icon={['fab', 'php']} />
        <FontAwesomeIcon icon={['fab', 'react']} />
        <FontAwesomeIcon icon={['fab', 'aws']} />
      </Container>
      <Container id='education'>

      </Container>
      <Container id='experience'>

      </Container>
    </div>
  )
}

export default Home