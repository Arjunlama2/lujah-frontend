import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import MobileNav from "./MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";


function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate=useNavigate()

  return (
    <>
      <div className="flex justify-between px-4 mt-5">
        <div>
          <Link to={"/"}>
            {" "}
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="hidden md:flex gap-4 list-none items-center ">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </div>
        <div className="hidden md:flex ">
          <button
            className="font-[500]   rounded-2xl border-2
           border-white px-10  py-2 cursor-pointer
           hover:text-[#F53855] hover:border-2 hover:border-[#F53855]"
           onClick={()=>navigate("/signin")}
          >
            Sign In{" "}
          </button>
          <button className="font-[500]   rounded-2xl border-2 border-white px-10
            py-2 hover:text-[#F53855] hover:border-2 hover:border-[#F53855]"
            onClick={()=>navigate("/signup")}>
            Sign Up
          </button>
          </div>
          <GiHamburgerMenu
            className="md:hidden mt-5 text-[26px]"
            onClick={() => setIsMobile(!isMobile)}
          />
        </div>
    

      {isMobile && <MobileNav setIsMobile={setIsMobile} />}
    </>
  );
}

export default Header;
