import React from 'react'
import styled from "styled-components";
import burger from '../sources/burger.png'
import ProductCard from './ProductCard';
import Footer from './Footer';

const Container = styled.div`
display: flex;
justify-content: center;
grid: 4;
height: 76vh;
gap: 10px
`

const Burger = styled.img`
    position: absolute;
    display: inline;
    width: 50px;
    height: 50px;
    left: 0px;
`

export default function Main() {
    return (
        <>
            <Container>
                <Burger src={burger}></Burger>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>

            </Container>
            <Footer></Footer>
        </>
    )
}
