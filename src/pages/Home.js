
import React from 'react'
import styled from "styled-components"
import About from '../components/Home/About'
import AskQuestion from '../components/Home/AskQuestion'
import Details from '../components/Home/Details'
import Fotter from '../components/Home/Fotter'
import HeaderHome from '../components/Home/HeaderHome'
import Work from '../components/Home/Work'
import RightSlider from '../components/Home/RightSlider'
import RoadMap from '../components/Home/RoadMap'
import SlideLogo from '../components/Home/SlideLogo'
const Home = () => {
  return (
    <StyleHomePage>
      <HeaderHome/>
      <About/>
      <Work/>
      <Details/>
      <RoadMap />
      <AskQuestion />
      <SlideLogo/>
      <Fotter/>
    </StyleHomePage>
  )
}
const StyleHomePage = styled.div`
  
`
export default Home