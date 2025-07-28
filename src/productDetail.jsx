import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setProd(data));
  }, [id]);

  if (!prod) return <div className="product-detail">Loading...</div>;

  return (
    <div className="product-detail">
      <h2>{prod.title}</h2>
      <img src={prod.images[0]} alt={prod.title} style={{width: '100%', maxWidth: '300px', borderRadius: '8px'}} />
      <p>{prod.description}</p>
      <p><b>Price:</b> ${prod.price}</p>
      <p><b>Category:</b> {prod.category?.name}</p>
    </div>
  );
};

export default ProductDetail;
