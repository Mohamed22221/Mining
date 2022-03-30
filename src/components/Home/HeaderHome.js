import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import Obacity from "../../assets/backopacity.svg"
import TimerHeader from './TimerHeader'
import TwoButtonHeader from './TwoButtonHeader'

const HeaderHome = () => {
  return (
    <StyleHeaderHome>
      <Container maxWidth="lg">
        <MainHeader>
            <LeftHeader>
                <h1>Safest Mining Network</h1>
                <p>We operate your mining equipment at a 400% cheaper electricity price compared to global averages so that you can enjoy mining Bitcoin long-term. Watch this new asset class grow and become an early adopter.</p>
                <TwoButtonHeader/>
            </LeftHeader>
            <RightHeader>
                <div className='header-timer'>
                <h1>cryptocash</h1>
                <p>Start At 17 january ,5PM GMT</p>
                </div>
                <TimerHeader/>
                <div className='fotter-Timer'>
                <h1>$35,500,600</h1>
                <p>colected for now</p>
                </div>
                <div className='color-line'>
                <div className='title-color'>
                <span>$4.5M</span>
                <span>$15.5M</span>
                </div>
                <div className='orange-line'>
                    <span></span>

                </div>
                </div>
            </RightHeader>
        </MainHeader>
      </Container>
    </StyleHeaderHome>
  )
}
const StyleHeaderHome = styled.div`
position: relative;


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
padding: 20px ;
background-color: var(--primary-color-obacity);
@media (max-width:739px) {
        margin-top: 50px;
    }
.header-timer ,.fotter-Timer{
    padding: 10px 0;
    width: 350px;
    @media (max-width:768px) {
        width: 320px;
    }
    @media (max-width:739px) {
        width: 310px;
    }
    @media (max-width:350px) {
        width: 250px;
    }
    h1{
    color: white;
    }
    p{
    color:var(--primary-color);
    padding: 3px;
    opacity: 0.8;
    
    }
}
.color-line{
    .title-color{
        display: flex;
        justify-content: space-between;
        color: wheat;
        font-size: 12px;
        font-weight: 800;
    }
    .orange-line{
        position: relative;
        width: 100%;
        height: 20px;
        background-color: var(--primary-color);
        border-radius: 14px;
        margin: 8px 0;
        
        &::after{
        content:"";
        position: absolute;
        top: -8px;
        width: 80%;
        height: inherit;
        background-color: var(--orange-color);
        border-radius: 14px;
        margin: 8px 0;   
        }
        
    }
}

    

`
export default HeaderHome