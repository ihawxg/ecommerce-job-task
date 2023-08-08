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
    const [productsCount,setProductsCount] = useState(0);
    const [totalProducts,setTotalProducts] = useState(0);

    useEffect(() => {
        fetch("https://ecommerce-8c456-default-rtdb.europe-west1.firebasedatabase.app/products.json")
            .then(resp => resp.json())
            .then(data => {
                let filteredProducts = data.filter(product => product.id <= 8);
                setProducts(filteredProducts)
                setProductsCount(filteredProducts.length)
                setTotalProducts(data.length)
            })
    }, [])

    const loadMore = () =>{
        fetch("https://ecommerce-8c456-default-rtdb.europe-west1.firebasedatabase.app/products.json")
            .then(resp => resp.json())
            .then(data => {
                let filteredProducts = data.filter(product => product.id <= products.length+4);
                setProducts(filteredProducts)
                setProductsCount(filteredProducts.length);
            })
    }


    return (
        <>
            <div className={styles.container}>
                <Container>
                    <Filter></Filter>
                    <h1>{productsCount} от {totalProducts} Продукта</h1>
                    <div >
                        <div className={styles.card}>
                            {products.map((cloth, i) => { return <ProductCard img={cloth.image} title={cloth.title} description={cloth.description} price={cloth.price}></ProductCard> })}
                        </div>
                        {productsCount !== totalProducts ? <button onClick={loadMore} className={styles.loadMoreButton}>Load more</button> : null }
                    </div>
                    
                </Container>
            </div>

        </>
    )
}
