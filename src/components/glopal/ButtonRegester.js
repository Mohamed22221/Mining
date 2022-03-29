import React from 'react'
import styled from "styled-components"
const ButtonRegester = ({title}) => {
  return (
    <StyleButtonRegester>
        <button>{title}</button>
    </StyleButtonRegester>
  )
}
const StyleButtonRegester = styled.div`
button{
    all: unset;
    padding: 10px 30px;
    
    background-color: var(--primary-color-obacity) ;
    border:2px solid var(--primary-color-obacity);
    border-radius: 45px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        background-color: var(--primary-color);
        border:2px solid var(--primary-color-obacity)
    }
}
`
export default ButtonRegester