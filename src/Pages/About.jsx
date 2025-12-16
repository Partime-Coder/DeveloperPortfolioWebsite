import React from 'react'
import image from '../assets/Background/Me.jpg'
import BackgroundImage from '../components/BackgroundImage'
import Container from '../components/Container'
import Header from '../components/Header/Header'
import AboutContent from '../components/About/AboutContent'
function About() {
  return (
    <BackgroundImage image={image} overlay={true}>
          <Container>
            <Header />
            <AboutContent/>
          </Container>
        </BackgroundImage>
  )
}

export default About