import { Email } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"
const ButtonAsk = () => {
  return (
    <MainInput>
        <input type={Email} placeholder="Enter Your Email"/>
        <button>Subscribe</button>
    </MainInput>
  )
}
const MainInput = styled.form`
  margin: 40px 0; 
  input{
      all: unset;
      background-color: transparent;
      border: 4px solid var(--primary-color-obacity);
      border-right:transparent ;
      border-top-left-radius:30px ;
      border-bottom-left-radius:30px ;
      padding: 15px 90px 15px 20px;
      @media (max-width:1180px ) {
        padding: 15px 20px 15px 20px;
    }
      @media (max-width: 500px) {
        padding: 15px 15px 15px 15px;  
      }
  }
  button{
      all:unset;
      cursor: pointer;
      color: white;
      padding: 15px 50px 15px ;
      background-color: var(--orange-color);
      border: 4px solid var(--orange-color);
      border-top-right-radius:30px ;
      border-bottom-right-radius:30px ;
      @media (max-width:1180px ) {
        padding: 15px 20px 15px 10px;
    }
      @media (max-width: 500px) {
        padding: 15px 10px 15px 15px;  
      }
  }
`
export default ButtonAsk