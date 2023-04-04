import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // handle add to cart
  const handleAddToCart = (product) => {
    const cartNew = [...cart, product];
    setCart(cartNew);
    addToDb(product.id);
  };

  // // calculate quantity of saved cart
  // const calculateQuantity = (cart) => {
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue.quantity;
  //   const quantity = cart.reduce(reducer, 0);
  //   return quantity;
  // };
  // const totalQuantity = calculateQuantity(cart);

  // // Calculate total price
  // const totalPrice = (cart) => {
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.price;
  //   const total = cart.reduce(reducer, 0);
  //   return total;
  // };
  // const total = totalPrice(cart);

  // // calculate total shipping cost
  // const totalShipping = (cart) => {
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.shipping;
  //   const total = cart.reduce(reducer, 0);
  //   return total;
  // };
  // const totalShippingCost = totalShipping(cart);

  // //  calculate total tax
  // const totalTax = (cart) => {
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.price;
  //   const total = cart.reduce(reducer, 0);
  //   return (total*0.05).toFixed(2);
  // };
  // const totalTaxCost = parseFloat(totalTax(cart));

  // const subTotal = total + totalShippingCost + totalTaxCost;

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
