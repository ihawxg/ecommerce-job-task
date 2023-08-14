import React from 'react'
import PageHero from '../Components/PageHero'
import styled from 'styled-components';
import Filters from '../Components/Filters';
import ProductList from '../Components/ProductList';
import Sort from '../Components/Sort';
import { useProductsContext } from '../context/products_context';
import { useFilterContext } from '../context/filter_context';


const ProductsPage = () => {

  const { filtered_products: products,all_filtered_products_by_category:filtered_products } = useFilterContext();

  const { loadMoreProducts } = useProductsContext();
  return <main>
    <PageHero title="products"></PageHero>
    <Wrapper className='page'>
      <div className="section-center products">
        <Filters></Filters>
        <div>
          <Sort></Sort>
          <ProductList></ProductList>
          {filtered_products.length !== products.length &&
            <div className='load-btn'>
              <button className='btn' onClick={loadMoreProducts}>Load more</button>
            </div>
          }
        </div>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .load-btn{
    position: relative;
    top: 30px;
    display: flex;
    justify-content: center;
  }
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
