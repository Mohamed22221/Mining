import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import RightSlider from './RightSlider'
import BacKopacity3 from"../../assets/backopacity3.svg"

const RoadMap = () => {
  return (
    <StyleRoadMap>
        <Container maxWidth="lg">
           <h1 className='title'>Company Road Map </h1>
    <MainRoadMap>
               
        <LeftRoadMap>
        <h1>Meet The Advisors</h1>
        <p>Whether you’re looking for information on specific projects in the space, wondering how to start mining, or looking for expert direction on blockchain services, we can help. One or more of our team members will call you for a free consultation.</p>
        </LeftRoadMap>
        <RightSlider/>
    </MainRoadMap>      
        </Container>
    </StyleRoadMap>
  )
}
const StyleRoadMap = styled.div`

padding: 150px 0;
position: relative;
z-index: 1;
&::before{
content: "";
position: absolute;
top: -70px;
right: 0;
left: 0;
background-image: url(${BacKopacity3});
background-position: center center;
background-repeat: no-repeat;
height: 1380.154px;
z-index: -1;
}
.title{
    padding: 40px;
    text-align: center;
    color: white;
    font-size: 38px;
}
`
const MainRoadMap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:767px) {
flex-direction: column;
padding: 90px 0;
}
`
const LeftRoadMap = styled.div`
h1{
    font-size: 30px;
    color: white;
    padding: 15px 0;
}
p{
    width: 450px;
    color: white;
    opacity: 0.6;
    padding: 15px 0;
}
@media (max-width:767px) {
p{
    width: 100%;
}
}
`
const RightRoadMap = styled.div`
`
export default RoadMap