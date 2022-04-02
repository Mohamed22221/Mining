import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import WorkImg from "../../assets/work.png"


import DoneIcon from '@mui/icons-material/Done';
const Work = () => {
    return (
        <StyleMap>
            <Container maxWidth="lg">
                <div className='title'>
                    <p>WHAT IS CRYPTOCASH</p>
                    <h1>How it Works</h1>
                </div>
                <MainWork>
                    <LeftWork>
                        <img src={WorkImg}/>
                    </LeftWork>
                    <RightWork>
                    <h1>We’ve built a platform to buy and sell shares.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                    <div className='three-work'>
                    <span><DoneIcon className='done-icon'/>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                    <span><DoneIcon className='done-icon'/>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                    <span><DoneIcon className='done-icon'/>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                    </div>
                    </RightWork>
                </MainWork>

            </Container>
        </StyleMap>
    )
}
const StyleMap = styled.div`
padding: 50px 0;
position: relative;
z-index: 10;
.title{
    text-align: center;
    h1{
        color: white;
    }
    p{
        opacity: 0.5;
        color: white;
        
    }
}

`
const MainWork = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width:916px) {
    flex-direction: column;
}
`
const LeftWork = styled.div`
padding: 50px 0 0 0;
img{
    -webkit-animation: Rotate 9s linear infinite;
     animation: Rotate 16s linear infinite;
    width: 350px;
    position: relative;
    @media (max-width:960px) {
        width:95%
    }
    }
@media (max-width:960px) {
    width: 300px;
}

`
const RightWork = styled.div`
padding: 50px 0 0 0;
width: 600px;
@media (max-width:1070px) {
    width: 550px; 
}
@media (max-width:960px) {
    width: 500px;
}
@media (max-width:916px) {
    width: 100%;
}
h1{
        color: white;
}
p{
    padding: 18px 0;
    color: white;
    opacity: 0.6;
}
.three-work{
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    span{
    padding:8px 0 ;
    color: white;
    }
    .done-icon{
        color: black;
        background-color: white;
        margin: 7px 7px 0 0;
        border-radius: 50%;
    }
}
`

export default Work