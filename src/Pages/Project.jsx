import React from 'react'
import image1 from '../assets/Background/PurpleStarTrails.jpg'
import BackgroundImage from '../components/BackgroundImage'
import Container from '../components/Container'
import Header from '../components/Header/Header'
import ProjectContent from '../components/Project/ProjectContent'

function Project() {
  return (
     <BackgroundImage image={image1} overlay={true}>
          <Container>
            <Header />
            <ProjectContent/>
          </Container>
        </BackgroundImage>
  )
}

export default Project