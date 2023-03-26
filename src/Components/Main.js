import React, { createContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Main.css'
import Header from './Header'

function Main() {
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const NavigationContext = createContext();

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data)=>{
        setProduct(data)
    })
  }, [])

function handleProduct (id){
    navigate(`/product/${id}`, {replace:true})
}

    return (
        <>
        <Header />
        <div className='product-list'>
    {product.map((ele)=>{
        return (    
    <div className="single-product" key={ele.id} onClick={()=>{handleProduct(ele.id)}}>
        <div className="product-img"><img src={ele.image} alt="product" /></div>
        <div className="product-name">{ele.title}</div>
        <div className="product-category">Catagory : {ele.category}</div>
        <div className="product-price">Price : ${ele.price}</div>
        <div className="rating">Rating : {ele.rating.rate}/5</div>
    </div>)
    })}
    </div>
  </>
  )
}

export default Main