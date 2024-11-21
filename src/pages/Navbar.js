import React from "react";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { auth } from "../components/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const handleUserIconClick = () => {
    if (auth.currentUser) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleCart = () => {
    navigate("/checkout");
  };

  const [openNav, setOpenNav] = useState(false);
  const navlist = (
    <ul className="flex flex-col lg:flex-row gap-6">
      <li>
        <Link to="/" className="text-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/newarrival" className="text-black">
          New Arrivals
        </Link>
      </li>
      <li>
        <Link to="/product" className="text-black">
          Products
        </Link>
      </li>
      <li>
        <Link to="/bestseller" className="text-black">
          Best Sellers
        </Link>
      </li>
    </ul>
  );

  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="sticky top-0 z-20  py-4 px-4 lg:px-8 shadow-md bg-[#4CC9FE]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-3xl font-bold text-black">
          <Link to="/"> ExtraAura</Link>

          <img src={Logo} alt="ExtraAura" className="h-20 w-20" />
        </div>
        <div className="hidden lg:flex items-center gap-4">{navlist}</div>
        <div className="hidden lg:flex items-center gap-6">
          <button onClick={handleCart} className="text-black relative flex">
            <FaCartArrowDown size={30} className="text-black" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 py-0 transform -translate-y-1/2">
              {cartItems.length}
            </span>
          </button>

          <button onClick={handleUserIconClick} className="text-black">
            <FaUserAlt size={30} className="text-black" />
          </button>
        </div>

        {/* mobile */}
        <div className="flex items-center lg:hidden gap-4">
          <button onClick={handleCart} className="text-black flex relative">
            <FaCartArrowDown size={30} className="text-black" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 py-0 transform -translate-y-1/2">
              {cartItems.length}
            </span>
          </button>

          <button onClick={handleUserIconClick} className="text-black">
            <FaUserAlt size={30} className="text-black" />
          </button>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="h-10 w-10 rounded-lg text-black"
          >
            {openNav ? <ImCross size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {openNav && <div className="lg:hidden">{navlist}</div>}
    </div>
  );
}

export default Navbar;
