import React from 'react'
import image from '../assets/Background/Nebula.jpg'
import Container from '../components/Container'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header/Header'
import ContactFrom from '../components/Contact/ContactFrom'
function Contact() {
  return (
     <BackgroundImage image={image} overlay={true}>
      <Container>
        <Header />
        <ContactFrom/>
      </Container>
    </BackgroundImage>
  )
}

export default Contact