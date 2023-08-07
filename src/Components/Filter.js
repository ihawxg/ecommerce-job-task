import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height: 100% ;
width: 300px;
border: 1px solid black;
`

export default function Filter() {
    return (
        <Container>
            <ul>
                <li>filter</li>
                <li>filter</li>
                <li>filter</li>
                <li>filter</li>
                <li>filter</li>
                <li>filter</li>
            </ul>
        </Container>
    )
}
