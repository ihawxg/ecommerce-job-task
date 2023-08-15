

import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url } from '../utils/constants'
import axios from 'axios'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR, LOAD_MORE_PRODUCTS } from '../actions'


const initialState = {
  isSidebarOpen: false,
  product_loading: false,
  product_error: false,
  all_fetched_products:[],
  products: [],
  featured_products: [],
  single_product_loading : false,
  single_product_error : false,
  single_product : {},

}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchProduct = async (url) => {
    dispatch({type:GET_PRODUCTS_BEGIN})
    try{
      const response = await axios.get(url);
      const products = response.data;
      const displayedProducts = response.data.slice(0, 12);
      
      dispatch({type:GET_PRODUCTS_SUCCESS,payload:[products,displayedProducts]})
    }
    catch(err){
      dispatch({type:GET_PRODUCTS_ERROR})
    }

  }

  const fetchSingleProduct = async(url)=>{
    dispatch({type: GET_SINGLE_PRODUCT_BEGIN});
    try{
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload:singleProduct})
    }
    catch(err){
      dispatch({type: GET_SINGLE_PRODUCT_ERROR});
    }
  }

  const loadMoreProducts = ()=>{
    dispatch({type:LOAD_MORE_PRODUCTS})
  }

  useEffect(() => {
    fetchProduct(`${products_url}`);
  }, [])

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar,fetchSingleProduct,loadMoreProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
