import React from 'react'
import Nav from './Nav'
import ImageBanner from './ImageBanner'
import Container from './Container'

import styles from './Home.css'

import banner from '../assets/banner.jpg'

function Home() {
  return (
    <div id='homeView'>
      <Nav />
      <ImageBanner
        image={banner}
        height='50vh'
        title='Tom Dickman'
        subtitle='Web Developer'
      />
      <Container>
        <h1>Hi</h1>
      </Container>
    </div>
  )
}

export default Home