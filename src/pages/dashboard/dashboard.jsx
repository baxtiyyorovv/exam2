import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(prod => (
          <div
            className="product-card"
            key={prod.id}
            onClick={() => navigate(`/products/${prod.id}`)}
          >
            <img src={prod.images[0]} alt={prod.title} style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px'}} />
            <h3>{prod.title}</h3>
            <p>${prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;