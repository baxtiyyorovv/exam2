import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default Products;