import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="bg-header-bg h-20 flex items-center justify-between px-32">
      <img src={logo} alt="" />
      <div className="flex space-x-5 text-[#fff]">
        <a href="/home">
          Home
        </a>
        <a href="/about">About</a>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
      </div>
    </nav>
  );
};

export default Header;