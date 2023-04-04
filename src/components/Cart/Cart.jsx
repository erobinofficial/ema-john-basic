import React from "react";

const Cart = ({ cart, totalPrice, shipping, totalTax, subTotal, quantity }) => {
  
  return (
    <div className="sticky top-0">
      <div className="flex items-center justify-center text-2xl">
        <h1 className="font-bold">Order Summary</h1>
      </div>
      <div className="mt-8">
        <p>Selected items: {quantity}</p>
        <p>Total price: ${totalPrice}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: ${totalTax}</p>
        <h3 className="font-bold">Sub Total: ${subTotal}</h3>
      </div>
    </div>
  );
};

export default Cart;
