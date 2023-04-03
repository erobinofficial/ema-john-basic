import React from 'react';

const Cart = ({cart, totalPrice}) => {
    return (
        <div>
            <p>Selected items: {cart.length}</p>
          <p>Total price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;