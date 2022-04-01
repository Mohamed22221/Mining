import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import ButtonAsk from '../glopal/ButtonAsk'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
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
            <span><LinkedInIcon className='icon-left' /></span>
            <h4>Linked</h4>
            <p><LinkIcon className='icon-link' /></p>
        </div>
        <div className='item-left'>
            <span><FacebookIcon className='icon-left' /></span>
            <h4>Facebook</h4>
            <p><LinkIcon className='icon-link' /></p>
        </div>
        <div className='item-left'>
            <span><TwitterIcon className='icon-left' /></span>
            <h4>Twitter</h4>
            <p><LinkIcon className='icon-link' /></p>
        </div>
        <div className='item-left'>
            <span><TelegramIcon className='icon-left' /></span>
            <h4>Telegram</h4>
            <p><LinkIcon className='icon-link' /></p>
        </div>
        <div className='item-left'>
            <span><GitHubIcon className='icon-left' /></span>
            <h4>GitHub</h4>
            <p><LinkIcon className='icon-link' /></p>
        </div>
        <div className='item-left'>
            <span><LinkedInIcon className='icon-left' /></span>
            <h4>Linked</h4>
            <p><LinkIcon className='icon-link' /></p>
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
        background-color: #0A66C2;
    }
    &:nth-child(2){
        background-color: #4267B2;
    }
    &:nth-child(3){
        background-color: #1DA1F2;
    }
    &:nth-child(4){
        background-color: #0088cc;
    }
    &:nth-child(5){
        background-color:#303030;
    }
    &:nth-child(6){
        background-color: #0A66C2;
    }
    
    .icon-left{
        font-size:50px ;
        border: 2px solid white;
    }
    h4{
        opacity: 0.6;
        padding: 8px 0;
    }
    p{
        margin: 5px 0;
        padding: 5px 60px;
      background-color: transparent;
      transition: 0.5s;
      border: 3px solid var(--primary-color-obacity);
    border-radius: 30px;
    cursor: pointer;
    &:hover{
        background-color: var(--primary-color-obacity);  
    }
    }
}
  
`
export default AskQuestion