import React from 'react'
import styled from 'styled-components'
import Doctor from './Doctor'


function OurTeam() {
    return (
        <Container>
            <Doctor/>
            <Doctor/>
        </Container>
    )
}

export default OurTeam

const Container = styled.div`
    padding-top: 101px;
    max-width: 1440px;
    margin: 0 auto;
`;

