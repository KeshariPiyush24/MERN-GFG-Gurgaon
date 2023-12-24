import React, { useState, useEffect } from "react";

import axios from "axios";
import Loader from "./Loader";
import Products from "./Products";

function DataFetchUsingAPI() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (loading ? <Loader /> : <Products products={products} />);
}

export default DataFetchUsingAPI;