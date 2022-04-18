import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"

import BacKopacity2 from"../../assets/backopacity2.svg"
import Circle from"../../assets/circle.svg"

const About = () => {
  return (
    <StyleAbout id="About">
      <Container maxWidth="lg">
        <StyleMainAbout>
          <LeftAbout>
           <p></p>
          </LeftAbout>
          <RightAbout>
          <h1>What Is Crypto Cash ?</h1>
          <p>Every transaction made on the digital currency is added encrypted to the block chain network or blockchain
          in order for it to be considered a successful and valid transaction. Transactions are validated and added to
t         he blockchain by miners, which are powerful computers that are part of the network and confirm their
            transactions</p>
          <p>And in front of each added block / transaction, authenticated and valid, the miner gets a reward, which is
          the digital currency on which the network as a whole is based.</p>
          <button>Learn More About This Project</button>
          </RightAbout>
        </StyleMainAbout>
        </Container>
    </StyleAbout>
  )
}
const StyleAbout =styled.div`
padding: 40px 0;
position: relative;
z-index: 40;
&::before{
content: "";
position: absolute;
top: -20px;
right: 0;
left: 0;
background-image: url(${BacKopacity2});
background-position: center center;
height: 1380.154px;
z-index: -1;
}

`

const StyleMainAbout =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 80px;
margin-top: 50px;
@media (max-width:780px) {
flex-direction: column;
margin-top: 20px;
  }

`
const LeftAbout =styled.div`
p{
  width: 400px;
  height: 400px;
  background-color:var(--primary-color) ;
  border-radius:50% ;
  position: relative;
  overflow: hidden;
  outline: 15px solid var(--primary-color);
  @media (max-width:982px) {
    width: 300px;
    height: 300px;
  }

  &::before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url(${Circle});
    height: inherit;
    width: inherit;
    

  }
}
`
const RightAbout =styled.div`

h1{
color: white;
padding: 25px 0;
font-weight: bold;
font-size: 45px;
@media (max-width:982px) {
  font-size: 30px;
   
  }
}

p{
  width: 600px;
  padding: 15px 0;
  color: white;
  opacity: 0.6;
  font-size: 15px;
  @media (max-width:982px) {
    width: 380px;
  }
  @media (max-width:780px) {
    width: 100%;
  }
}
button{
  all: unset;
  background-color: var(--primary-color-obacity);
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.5s;
  &:hover{
    transform: translateY(-8px);
  }
}

`




export default About