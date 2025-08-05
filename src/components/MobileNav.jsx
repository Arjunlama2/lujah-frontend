import React, { useState } from "react";
import { Link } from "react-router";

function MobileNav({ setIsMobile }) {
  return (
    <div
      className="md:hidden fixed  bg-black/70 h-[100vh] w-full"
      onClick={() => setIsMobile(false)}
    >
      <div
        className="absolute right-0 bg-red-600 h-full w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center list-none mt-5 gap-5 text-white ">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
