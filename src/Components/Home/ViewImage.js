import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './Carousel';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext); 


  useEffect(() => {
    fetch(`https://backend-crud-one.vercel.app/product/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to load product details');
      });
  }, [id]);


  const handleAddToCart = () => {
    addToCart(product); 
    alert(`${product.name} added to cart!`);
  };


  return (
    <>
      <div className="container text-dark">
        <div className="row mt-4">
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              <div className="col-md-6">
                <div className="card">
                  {product ? (
                    <img src={product.image} alt={product.name} className="img-fluid" />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                {product ? (
                  <div>
                    <h2>{product.name}</h2>
                    <p><b>Director:</b> {product.director}</p>
                    <p><b>Release Date:</b> {product.releasedate}</p>
                    <p><b>Budget:</b> {product.budget}</p>
                    <p><b>Description :</b> {product.description}</p>
                    <p><b>Ticket Price:</b> ${product.ticketprice}</p>
                    <button className="btn btn-danger"  >Book a Ticket <i className="bi bi-ticket-detailed fs-5"></i></button> <br />
                    <button className="btn btn-danger mt-3" onClick={handleAddToCart}>
                      Add to Cart <i className="bi bi-cart2 fs-5"></i>
                    </button>
                  </div>
                ) : (
                  <p>Loading product details...</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
