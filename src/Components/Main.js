import styled from "styled-components";
import ProductCard from './ProductCard';
import styles from '../Styles/Main.module.css';
import Filter from './Filter';
import data from "../data";
import { useEffect, useState } from "react";

const Container = styled.div`
display: flex;
justify-content: center;
height: 78vh;
width: 1280px;
`



export default function Main(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://ecommerce-8c456-default-rtdb.europe-west1.firebasedatabase.app/products.json")
            .then(resp => resp.json())
            .then(data => {
                let filteredProducts = data.filter(product => product.id <= 8);
                setProducts(filteredProducts)
            })
    }, [])

    const loadMore = () =>{
        fetch("https://ecommerce-8c456-default-rtdb.europe-west1.firebasedatabase.app/products.json")
            .then(resp => resp.json())
            .then(data => {
                let filteredProducts = data.filter(product => product.id <= products.length+4);
                setProducts(filteredProducts)
            })
    }


    return (
        <>
            <div className={styles.container}>
                <Container>
                    <Filter></Filter>
                    <div >
                        <div className={styles.card}>
                            {products.map((cloth, i) => { return <ProductCard img={cloth.image} title={cloth.title} description={cloth.description} price={cloth.price}></ProductCard> })}
                        </div>
                        <button onClick={loadMore} className={styles.loadMoreButton}>Load more</button>
                    </div>

                </Container>
            </div>

        </>
    )
}
