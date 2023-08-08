import React from 'react'
import styled from 'styled-components';
import styles from "../Styles/Filter.module.css"
import  Select  from './Select';

const Container = styled.div`
position: relative;
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
    let prices = Array.from(pricesSet);

    return (
        <Container>

            

            {/* <h1 className={styles.filterText}>Филтрирай</h1> */}
            <ul className={styles.filterUl}>

            <Select brands={brands}></Select>
                <h1 className={styles.filterLi}>prices : <li> {prices}</li> </h1>
                <h1 className={styles.filterLi}>colors :  <li> {colors}</li></h1>
                <h1 className={styles.filterLi}>brands : <li> {brands}</li></h1>
            </ul>


        </Container>
    )
}
