import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import Error from '../Components/Error'
import Loading from '../Components/Loading'


const SingleProductPage = () => {
  const { products, single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct, } = useProductsContext();

  const { id } = useParams();

  let urlId;

  products.forEach((product, index) => {
    if (product.id === id) {
      urlId = index + 1;
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
 

  return <h4>single product page</h4>
}


export default SingleProductPage
