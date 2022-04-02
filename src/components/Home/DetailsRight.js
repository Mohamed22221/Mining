import React from 'react'
import styled from 'styled-components'
import mining1 from"../../assets/mining1.svg"
const DetailsRight = () => {
  return (
    <StyleRightDetalis>
       <img src={mining1}/>
    </StyleRightDetalis>
  )
}
const StyleRightDetalis = styled.div`
padding: 100px 0 0 0;
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
    width: 400px;
    @media (max-width:780px) {
        width: 350px;
    }
    @media (max-width:340px) {
        width: 300px;
    }
    
    
}


`
export default DetailsRight