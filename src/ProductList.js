import React, { useState, useEffect } from 'react';
import productsData from './data/products.json'; // Import local JSON data
import './ProductList.css'; // Your CSS file for styling

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData); // Set products data from local JSON
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{`$${product.price.toFixed(2)}`}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
