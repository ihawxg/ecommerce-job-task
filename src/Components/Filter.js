import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height: 100% ;
width: 300px;
border: 1px solid black;
`

export default function Filter(props) {

    let filterData = props.data;

    const brandsSet = new Set();
    const colorsSet = new Set();
    const pricesSet = new Set();

    filterData.forEach(cloth => {
        brandsSet.add(cloth.title);
        colorsSet.add(cloth.description);
        pricesSet.add(cloth.price);
    })

    console.log(brandsSet);

    let brands = Array.from(brandsSet);
    let colors = Array.from(colorsSet);
    let prices= Array.from(pricesSet);

    console.log(brands);

    console.log(props.data);

    return (
        <Container>
            <ul>
                <li>Brands: {brands}</li>
                <li>colors : {colors}</li>
                <li>prices : {prices}</li>
            </ul>
        </Container>
    )
}
