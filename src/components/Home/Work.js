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
                    <p>WHAT IS MINING SYSTEM</p>
                    <h1>How it Works</h1>
                </div>
                <MainWork>
                    <LeftWork>
                        <img src={WorkImg}/>
                    </LeftWork>
                    <RightWork>
                    <h1>Why 64 mining  is you choice ?</h1>
                    <p>When you deal with us in your mining construction, you can monitor the revenue, collect through us, maintain and you can sell at high prices, which will definitely benefit you to be one of the largest capital in trading. Join our team now and don't hesitate, we offer you steps to ensure your success</p>
                    <div className='three-work'>
                    <span><DoneIcon className='done-icon'/>The costs of setting up and installing mines. </span>
                    <span><DoneIcon className='done-icon'/>Hardware maintenance.</span>
                    <span><DoneIcon className='done-icon'/>Withdraw cash of any risk</span>
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
        width:260px
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
    @media (max-width:398px) {
        font-size: 14px;
    }
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