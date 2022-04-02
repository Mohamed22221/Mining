import { Container } from '@mui/material'
import React from 'react'
import styled from "styled-components"
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
                        
                    </LeftWork>
                    <RightWork>

                    </RightWork>
                </MainWork>

            </Container>
        </StyleMap>
    )
}
const StyleMap = styled.div`
padding: 50px 0;
.title{
    text-align: center;
}

`
const MainWork = styled.div`

`
const LeftWork = styled.div`

`
const RightWork = styled.div`

`

export default Work