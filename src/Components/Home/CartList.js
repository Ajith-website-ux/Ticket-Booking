import React, { useContext } from 'react';
import { CartContext } from './Carousel';

const CartList = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); 

  return (
    <div className="container">
      {cartItems.length > 0 ? (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4 my-3" key={index}>
              <div className="card">
                <img src={item.image} alt={item.name} className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.ticketprice}</p>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => removeFromCart(item)} 
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <h2>Your cart is empty</h2>
        </div>
      )}
    </div>
  );
};

export default CartList;
