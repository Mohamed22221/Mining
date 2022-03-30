
import React from 'react'
import styled from "styled-components"
import About from '../components/Home/About'
import HeaderHome from '../components/Home/HeaderHome'
import Map from '../components/Home/Map'
const Home = () => {
  return (
    <StyleHomePage>
      <HeaderHome/>
      <About/>
      <Map/>
    </StyleHomePage>
  )
}
const StyleHomePage = styled.div`
  
`
export default Home