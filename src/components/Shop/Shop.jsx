import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const cartNew = [...cart, product];
    setCart(cartNew);
  };

  // Calculate total price
  const totalPrice = (cart) => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const total = cart.reduce(reducer, 0);
    return total;
  };
  const total = totalPrice(cart);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 grid grid-cols-3 gap-y-5 m-16 ml-48">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="bg-[#FFE0B3] col-end-6 p-6">
        <div className="flex items-center justify-center text-2xl">
          <h1 className="font-bold">Order Summary</h1>
        </div>
        <div className="mt-8">
          <Cart cart={cart} totalPrice={total}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
