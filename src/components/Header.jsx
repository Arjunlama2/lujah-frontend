import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="flex justify-between px-4">
        <div>
         <Link to={"/"}> <img src="/logo.png" alt="" /></Link>
        </div>
        <div className="hidden md:flex gap-4 list-none items-center ">
          <li><Link to={'/about'}>About</Link></li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </div>
        <div>button</div>
      </div>
    </>
  );
}

export default Header;
