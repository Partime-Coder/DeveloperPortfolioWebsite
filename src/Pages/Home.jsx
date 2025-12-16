import React from 'react'
import HeroIntro from '../components/Home/HeroIntro'
import Container from '../components/Container'
import BackgroundImage from '../components/BackgroundImage'
import image from '../assets/Background/Desertsky.jpg'
import Header from '../components/Header/Header'


function Home() {
  return (
     <BackgroundImage image={image} overlay={true}>
      <Container>
        <Header />
        <HeroIntro />
      </Container>
    </BackgroundImage>
  )
}

export default Home