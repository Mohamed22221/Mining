import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import ButtonAsk from '../glopal/ButtonAsk'
import wats from "../../assets/wats.png"
import insta from "../../assets/insta.png"
import LinkIcon from '@mui/icons-material/Link';
const AskQuestion = () => {
  return (
    <StyleMainAsk id="Contact">
        <Container maxWidth="lg">
         <MainAsk>
        <RightAsk>
        <h1>Ask Questions in the chat and chat our the space 
            wondering how to start mining</h1>
            <ButtonAsk/>
        </RightAsk>
        <LeftAsk>
        <div className='item-left'>
            <img src={wats} />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/96522209570"><LinkIcon className='icon-link' /></a>
        </div>
        <div className='item-left'>
            <img src={insta}  />
            <h4>Instagram</h4>
            <a href='https://www.instagram.com/easymedia_agency/'><LinkIcon className='icon-link' /></a>
        </div>
       
        </LeftAsk>
        </MainAsk>   
        </Container>

    </StyleMainAsk>
  )
}
const StyleMainAsk = styled.div`
  
`

const MainAsk = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position:relative ;
z-index: 10;
@media (max-width:820px) {
    flex-direction: column;
    
}

`

const RightAsk = styled.div`

h1{
    width: 500px;
    color: white;
    @media (max-width:1180px ) {
        width: 360px;
    }
    @media (max-width:820px) {
    width: 100%;
}
}

  
`
const LeftAsk = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat( auto-fit, minmax(170px, 1fr) );
gap: 20px 30px;
padding-left: 40px;
@media (max-width:820px) {
    padding-left: 0px;
    
}
.item-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 50px;
    margin: 5px 0;
    border-radius: 5px;
    color: white;
    width: 100%;
    &:nth-child(1){
        background-color: #128C7E;
    }
    &:nth-child(2){
        background-color:  #C13584;
    }

    .icon-left{
        font-size:50px ;
        border: 2px solid white;
    }
    h4{
        opacity: 0.6;
        padding: 8px 0;
    }
    a{
        margin: 5px 0;
        padding: 5px 60px;
      background-color: transparent;
      transition: 0.5s;
      border: 3px solid white;
    border-radius: 30px;
    cursor: pointer;

    }
}
  
`
export default AskQuestion