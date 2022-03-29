import React from 'react'
import styled from "styled-components"

const ButtonLogin = ({titleLogin}) => {
  return (
    <StyleButtonLogin>
        <button>{titleLogin}</button>
    </StyleButtonLogin>
  )
}
const StyleButtonLogin = styled.div`
button{
    all: unset;
    padding: 10px 30px;
    background-color: var(--primary-color) ;
    border:2px solid var(--primary-color-obacity);
    border-radius: 45px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        background-color: var(--primary-color-obacity);
        border:2px solid var(--primary-color-obacity)
    }
}
`

export default ButtonLogin