import React from 'react'
import styled from "styled-components"
const TwoButtonHeader = () => {
  return (
    <StyleTwoButton>
        <button>Start Mining Now</button>
        <a href='#'>Learn More</a>

    </StyleTwoButton>
  )
}
const StyleTwoButton = styled.div`
width: 300px;
display: flex;
justify-content: space-between;
padding-top: 50px;

align-items: center;
button{
    all: unset;
    color: white;
    background-color: var(--orange-color);
    padding: 10px 28px;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
    transform:translateY(-7px) ;
    }
}
a{
    color: white;
    opacity: 0.7;
    text-decoration: underline;
    transition: 0.5s;
    &:hover{
    transform:translateY(-7px) ;
    }
}
`


export default TwoButtonHeader