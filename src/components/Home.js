import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Container from './Container'
import Spacer from './Spacer'
import Footer from './Footer'
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
        <p>You can view some of my contributions to open source projects, and plugins I've built over on my <a href='https://github.com/tomdickman'>Github <FontAwesomeIcon icon={['fab', 'github']} /> page</a>.</p>
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
          <div className={styles.skillsIcon}>
            <FontAwesomeIcon icon={['fab', 'python']} size='6x' title='Python' />
            <p>Python</p>
          </div>
        </div>
      </Container>
      <Spacer height='20vh' />
      <Container id='education' className={styles.education}>
        <h1>Things I've learned...</h1>
        <h2>Qualifications</h2>
        <ul className={styles.textLeft}>
          <li>Graduate Certificate in Information Technology (Software Development) - Swinburne University of Technology</li>
          <li>Bachelor of Journalism - La Trobe University</li>
          <li>Advanced Diploma in Maritime Operations</li>
          <li>Certificate IV in Business Administration</li>
          <li>Certificate IV in Frontline Management</li>
        </ul>
        <h2>Other learnings</h2>
        <ul className={styles.textLeft}>
          <li><a href='https://www.freecodecamp.org/certification/techtiger7/responsive-web-design'>Responsive Web Design Certificate</a></li>
          <li><a href='https://www.freecodecamp.org/certification/techtiger7/javascript-algorithms-and-data-structures'>Javascript Algorithms and Data Structures Certificate</a></li>
          <li>Certified Associate in Asset Management (CAAM)</li>
          <li>ITIL Fundamentals</li>
        </ul>
      </Container>
      <Spacer height='20vh' />
      <Container id='experience' className={styles.experience}>
        <h1>What I've done...</h1>
        <p>I haven't followed the traditional path to becoming a web developer, but my wide array of diverse experience lead me to realise this is what I love, and has made me a more rounded and critical thinking developer.</p>
        <p>From a military background as a submarine navigator where I started to tinker with code by automating sunrise/sunset calculations, to teaching kids how to use Scratch and Python, I love all things code and technology related.</p>
        <h2>Work history</h2>
        <ul className={styles.textLeft}>
          <li>Web Developer - Catalyst IT Australia (January 2019 - Current)</li>
          <li>Volunteer - Code Club Australia Facilitator (2018 - Current)</li>
          <li>Business Development and Operations Manager - Scientific Management Associates (2016 - 2018)</li>
          <li>Project Manager - Scientific Management Associates (2015)</li>
          <li>Assistant Project Manager - Chief Information Officer Group (2014)</li>
          <li>Maritime Warfare Officer (Submariner) - Royal Australian Navy (2008 - 2014)</li>
        </ul>
        <h2>Projects</h2>
        <ul className={styles.textLeft}>
          <li>Metadata extraction API: I developed an <a href='https://github.com/catalyst/moodle-tool_metadata'>open-source Moodle plugin for extracting metadata</a> from existing resources in Moodle, along with subplugins for <a href='https://github.com/catalyst/moodle-metadataextractor_tika'>extracting different metadata using Apache Tika</a> and an open source <a href='https://github.com/catalyst/moodle-metadataextractor_readable'>readability API.</a></li>
          <li>Custom license creation: I amended the Moodle license API and added the ability to <a href='https://github.com/moodle/moodle/commit/4399e4759a07d2f38e8519860dcf3eb337275643'>create custom licenses</a> in Moodle.</li>
          <li>Improve dashboard pagination: I <a href='https://github.com/moodle/moodle/commit/c0add7c713c28b08e6247d61e9c5fb1b37b635dd'>added pagination options</a> to the Moodle dashboard for improved usability.</li>
          <li>Improved performance of class searching: I ran profiling on Moodle core code and made <a href='https://github.com/moodle/moodle/commit/0d6a45d2febf98b9e4c65b6428e5d012c112faab'>performance improvements</a> to reduce class loading times by around 80%.</li>
        </ul>
      </Container>
      <Spacer height='20vh' />
      <Footer />
    </div>
  )
}

export default Home