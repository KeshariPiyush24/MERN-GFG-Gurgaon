import React, { useState, useEffect } from "react";

import "./Product.css";

function Product({ product }) {
    return (
        <div key={Math.random()} className='productContainer' >
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p><bold>Price:</bold> {product.price}</p>
            <p><bold>Rate:</bold> {product.rating.rate}</p>
            <p><bold>Count:</bold> {product.rating.count}</p>
        </div>
    );
}

export default Product;