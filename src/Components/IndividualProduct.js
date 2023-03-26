import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../CSS/IndividualProduct.css'

function IndividualProduct() {
    const [prodDetails, setProdDetails] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then((data)=>{
                setProdDetails(data)
                console.log(data.rating.rate)
            })
  },[])
    return (
    <div>
    <Header />
    <div className="detailed-product">
        <div className="left-section">
        <img src={prodDetails.image} alt="" />
        </div>
        <div className="right-section">
        <div className="product-name-dtl">{prodDetails.title}</div>
        <div className="product-disc-dtl">{prodDetails.description}</div>
        <div className="product-category-dtl">Catagory : {prodDetails.category}</div>
        <div className="product-price-dtl">Price : ${prodDetails.price}</div>
        <div className="rating-dtl">Rating : {prodDetails?.rating?.rate}/5</div>
        <button className="cart-btn">Add to cart</button>
        </div>
    </div>
    </div>
  )
}

export default IndividualProduct