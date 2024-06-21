import React from 'react';

function ProductList({ products, addToCart, removeFromCart, cart }) {
  return (
    <div style={{ marginRight: '20px' }}>
      <h2>Products</h2>
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>+</button>
            <span style={{ margin: '0 10px' }}>{cartItem ? cartItem.quantity : 0}</span>
            <button onClick={() => removeFromCart(product)}>-</button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
