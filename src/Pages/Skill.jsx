import React from 'react'
import image from '../assets/Background/StarCluster.jpg'
import BackgroundImage from '../components/BackgroundImage'
import Container from '../components/Container'
import Header from '../components/Header/Header'
import SkillContent from '../components/Skill/SkillContent'
import SkillGrid from '../components/Skill/SkillGrid'
import Footer from '../components/Footer/Footer'


Header
function Skill() {
  return (
    <>
    <BackgroundImage image={image} overlay={true}>
      <Container>
        <Header />
        <SkillContent />
      </Container>
    </BackgroundImage>


    <div className='w-full border-t-2 border-white bg-black text-white xl:hidden'>
      <Container>
        <SkillGrid/>
        <Footer className='pb-5'/>
      </Container>
    </div>
    </>
  )
}

export default Skill