
import React from 'react'
import styled from "styled-components"
import About from '../components/Home/About'
import Details from '../components/Home/Details'
import HeaderHome from '../components/Home/HeaderHome'
import Map from '../components/Home/Map'
import RoadMap from '../components/Home/RoadMap'
const Home = () => {
  return (
    <StyleHomePage>
      <HeaderHome/>
      <About/>
      <Map/>
      <Details/>
      <RoadMap />
    </StyleHomePage>
  )
}
const StyleHomePage = styled.div`
  
`
export default Home