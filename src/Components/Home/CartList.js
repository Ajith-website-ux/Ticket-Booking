import React, { useContext } from "react";
import { CartContext } from "./Carousel";

const CartList = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.ticketprice * item.quantity,
    0
  );

  return (
    <>
      <div className="container text-white">
        <div className="row mt-4">
          <div className="col-lg-6 text-dark">
            <h2>Your Cart</h2>
          </div>
          <div className="col-lg-6 text-secondary">
            <h3 className="mt-4">Grand Total: <span className="text-dark">${totalPrice.toFixed(2)}</span></h3>
          </div>
        </div>
        <hr />
        <div className="row ">
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item._id} className="list-group-item">
                <div className="col-lg-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                    style={{ width: "300px", height: "60vh" }}
                  />
                  <h5>{item.name}</h5>
                  <p>Price: ${item.ticketprice}</p>
                 </div> 
                 <div className="col-lg-6">
                  <button
                    className="btn btn-secondary"
                    onClick={() => decrementQuantity(item._id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => incrementQuantity(item._id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                  <p>Total: ${(item.ticketprice * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartList;
