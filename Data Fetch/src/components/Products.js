import React, { useState, useEffect } from "react";

import Product from "./Product/Product";

function Products({ products }) {
    return (
        <div className='container'>
            {products.map((product) => (
                <Product product={product} />
            ))}
        </div>
    );
}

export default Products; 