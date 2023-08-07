import styled from "styled-components";
import ProductCard from './ProductCard';
import styles from '../Styles/Main.module.css';
import Filter from './Filter';
import data from "../data";
import { useState } from "react";

const Container = styled.div`
display: flex;
justify-content: center;
height: 78vh;
width: 1280px;
`



export default function Main(props) {

    const [loadMoreClothes, setLoadMoreClothes] = useState(false)

    let clothCount = 0;

    const clothes = props.clothes;

    const loadMore = () => {
        setLoadMoreClothes(true);
    }

    return (
        <>
            <div className={styles.container}>
                <Container>
                    <Filter></Filter>
                    <div className={styles.card}>

                        {data.map(cloth => {
                            if (cloth.id > 12) {
                                clothCount = cloth.id;
                                return;
                            }
                            return <ProductCard img={cloth.image} title={cloth.title} description={cloth.description} price={cloth.price}></ProductCard>
                        })}
                        {data.length > 12 && <button onClick={loadMore} className={styles.loadMoreButton}>Load more</button>}
                    </div>
                </Container>
            </div>

        </>
    )
}
