import  axios  from './Axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ProductContext=createContext();

const Context = (props) => {
 const [products, setProducts] = useState(null);
 
 const getProducts=async()=>{
  try{
    const {data} =await axios("/products");
    setProducts(data);
  }
  catch(e)
  {
    console.log(e);
  }
 }

 useEffect(()=>{getProducts()},[])
  return <ProductContext.Provider value={[products, setProducts]}>{props.children}</ProductContext.Provider>
};

export default Context
