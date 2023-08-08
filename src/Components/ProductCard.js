
import styled from 'styled-components';
import styles from "../Styles/ProductCard.module.css"
import favourite from '../sources/favourite.png'
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



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
  const [isProductFav, setIsProductFav] = useState(false);

  const addToCart = () => {
    setIsAddedToCart(true);
  }

  const removeFromCart = () => {
    setIsAddedToCart(false);
  }

  const favProduct = ()=>{
    setIsProductFav(true)
  }

  const unFavProduct = ()=>{
    setIsProductFav(false)
  }

  let button = !isAddedToCart ? <AddShoppingCartIcon className={styles.favourited} onClick={addToCart}>Добави в любими</AddShoppingCartIcon> : <DeleteIcon className={styles.unFavourited} onClick={removeFromCart}>Премахни от любими</DeleteIcon>;

  return (
    <Container className={props.className} onMouseLeave={props.onMouseLeave} onMouseEnter = {props.onMouseEnter}>
      {!isProductFav ?  <FavoriteBorderIcon onClick={favProduct} className={styles.favImage}/> : <FavoriteIcon onClick={unFavProduct} className={styles.favImage}/>}
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
