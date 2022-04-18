
import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import logo from"../../assets/logo.png"
const Fotter = () => {
  return (
    <StyleMainFotter>
        <Container maxWidth="lg">
             <TopFotter>
                 <div className='logo'>
                    <a href='#Home'> <img src={logo}  /></a>
                 </div>
                <div className='a'>
                  <a href='#Home'>Home</a>
                  <a href='#About'>About</a> 
                  <a href='#Contact'>Contact</a>   
                  <a href='#Powerd BY'>Powerd BY</a>
                   
                </div>
           
            </TopFotter> 
 
        </Container>
    </StyleMainFotter>
  )
}
const StyleMainFotter = styled.div`
border-top: 1px solid #ebebeb69;
padding: 40px;
`
const TopFotter = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
           img{
               width: 80px;
               cursor: pointer;
           }
        }
    @media (max-width:1000px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        .logo{
            padding: 10px;
        }
    }
    .a{

         @media (max-width:600px) {
             display: flex;
        flex-direction: column;
        padding: 10px;
        opacity: 0.7;
    }   
    }

    a{
        padding: 10px;
        cursor: pointer;
        color: white;
    }

`

export default Fotter