import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/utils'
import PageHero from '../Components/PageHero'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import ProductImages from '../Components/ProductImages'
import AddToCart from '../Components/AddToCart'
import Stars from '../Components/Stars'


const SingleProductPage = () => {
  const { products, single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct, } = useProductsContext();

  const { id } = useParams();

  let urlId;

  products.forEach((product, index) => {
    if (product.id === id) {
      urlId = index ;
    }
  });

  // console.log(urlId);
  // console.log(id);

  useEffect(() => {
    fetchSingleProduct(`${url}/${urlId}.json`);
  }, [urlId])


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }


  const { name, price, description, stock, stars, reviews, id: productId, company, images } = product;

  return <Wrapper>
    <PageHero title={name} product></PageHero>
    <div className="section section-center page">
      <Link to="/products" className='btn'>
        back to products
      </Link>
      <div className="product-center">
        <ProductImages images={images}/>
        <section className="content">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews}></Stars>
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className='desc'>{description}</p>
          <p className='info'>
            <span>Available :</span>

            {stock > 0 ?'In Stock':'out of stock'}

          </p>
          <p className='info'>
            <span>ID :</span>
            {productId}
          </p>
          <p className='info'>
            <span>Brand :</span>
            {company}
          </p>
          <hr />
          {stock > 0 && <AddToCart product={product}/>}
        </section>
      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
