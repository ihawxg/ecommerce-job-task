
import styled from 'styled-components';
import styles from "../Styles/ProductCard.module.css"
import favourite from '../sources/favourite.png'
import { useState } from 'react';


const Container = styled.div`
position: relative;
display: flex;
flex-direction:column;
justify-content: center;
width: 200px;
height: 300px;
border: 1px solid black;
align-items: flex-start;
flex-wrap: wrap;
gap:8px
`


export default function ProductCard(props) {

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCart = () => {
    setIsAddedToCart(true);
  }

  const removeFromCart = () => {
    setIsAddedToCart(false);
  }

  let button = !isAddedToCart ? <button className={styles.favourited} onClick={addToCart}>Добави в любими</button> : <button className={styles.unFavourited} onClick={removeFromCart}>Премахни от любими</button>;

  return (
    <Container>
      <img className={styles.favImage} src={favourite} alt="" />
      <img className={styles.image} src={props.img} alt="" />
      <h1 className={styles.boldText}>{props.title}</h1>
      <p>{props.description}</p>
      <h1 className={styles.boldText} >{props.price}</h1>
      <div style={{ margin: "auto" }}>
        {button}
      </div>
    </Container>

  )
}
