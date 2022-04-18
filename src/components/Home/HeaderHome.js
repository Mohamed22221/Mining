import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import Obacity from "../../assets/backopacity.svg"
import Header from "../../assets/header.svg"

import TwoButtonHeader from './TwoButtonHeader'

const HeaderHome = () => {
  return (
    <StyleHeaderHome id="Home">
      <Container maxWidth="lg">
        <MainHeader>
            <LeftHeader>
                <h1  >Safest Mining Network</h1>
                <p>We operate your mining equipment at 400% cheaper electricity compared to global averages so that you
                can enjoy bitcoin mining in the long term. Watch the new asset class grow and become an early adopter
                </p>
                <TwoButtonHeader/>
            </LeftHeader>
            <RightHeader>
               <img src={Header} />
            </RightHeader>
        </MainHeader>
      </Container>
    </StyleHeaderHome>
  )
}
const StyleHeaderHome = styled.div`
position: relative;
z-index: 40;

&::after{
content: "";
position: absolute;
top: -350px;
right: 0;
left: 0;
height: 1221px;
background-image: url(${Obacity});
z-index: -1;
background-position: center center;
}
`
const MainHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;
@media (max-width:739px) {
flex-direction: column;
margin-top: 7px;
}
`
const LeftHeader = styled.div`
h1{
    color: white;
    font-size: 70px;
    margin: 40px 0;
    line-height: 70px;
    @media (max-width:920px) {
        font-size: 45px;
        line-height: 50px;
    }
}
p{
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 550px;
    padding: 15px 0;
    @media (max-width:1200px) {
        width: 450px;
    }
    @media (max-width:920px) {
        width: 320px;
    }
    @media (max-width:739px) {
        width: 100%;
    }
}
`
const RightHeader = styled.div`
img{
    animation-name: MoveUpDown;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
    animation-direction: alternate;
    animation-timing-function: linear;
    width: 450px;
}
@media (max-width:768px) {
    img{
    width: 340px;
}
    }
    @media (max-width:350px) {
    img{
    width: 310px;
}
    }


    

`
export default HeaderHome