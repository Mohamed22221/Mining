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