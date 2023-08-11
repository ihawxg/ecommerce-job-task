import React from 'react'
import PageHero from '../Components/PageHero'
import styled from 'styled-components';
import Filters from '../Components/Filters';
import ProductList from '../Components/ProductList';
import Sort from '../Components/Sort';


const ProductsPage = () => {
  return <main>
    <PageHero title="products"></PageHero>
    <Wrapper className='page'>
      <div className="section-center products">
        <Filters></Filters>
        <div>
          <Sort></Sort>
          <ProductList></ProductList>
        </div>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
