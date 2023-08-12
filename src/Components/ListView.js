import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/utils'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
const ListView = ({ products }) => {
  return <Wrapper>
    {products.map(product => {
      const { id, image, name, price, description } = product;
      return <article key={id}>
        <div className="container">
          <img src={image} alt={name} />
          <Link to={`/products/${id}`} className='link'>
            <FaSearch></FaSearch>
          </Link>
        </div>
        <div>
          <h4>{name}</h4>
          <h5 className='price'>{formatPrice(price)}</h5>
          <p>{description.substring(0, 150)}...</p>
          <Link to={`/products/${id}`} className='btn'>
            Details
          </Link>
        </div>
      </article>
    })}
  </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  .container {
    position: relative;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
