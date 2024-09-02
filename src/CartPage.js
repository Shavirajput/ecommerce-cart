import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css'; // Your CSS file for styling

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const subtotal = calculateSubtotal();
  const total = subtotal; // Apply discounts here if needed

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{`$${item.price.toFixed(2)}`}</p>
              <input
                type="number"
                value={item.quantity || 1}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
            </div>
          ))}
          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
