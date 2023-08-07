import React from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard';
import styles from '../Styles/Main.module.css';
import Filter from './Filter';

const Container = styled.div`
display: flex;
justify-content: center;
height: 78vh;
width: 1280px;
`


export default function Main() {
    return (
        <>
            <div className={styles.container}>
                <Container>
                    <Filter></Filter>
                    <div className={styles.card}>

                        <ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard><ProductCard img={"https://static.glami.bg/img/800x800bt/415076623.webp"} title="Calvin Klein" description="Green" price="59.99 BGN"></ProductCard>
                    </div>
                </Container>
            </div>

        </>
    )
}
