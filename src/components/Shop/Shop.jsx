import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart]= useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

    const handleAddToCart = (product) => {
      const cartNew = [...cart, product];
      setCart(cartNew);
    }

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 grid grid-cols-3 gap-y-5 m-16 ml-48">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="col-end-6">
        <h1 className='text-white'>Order Summary</h1>
        <p>Selected items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;