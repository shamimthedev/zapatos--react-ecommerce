import { FaTruckFast, FaRegUser } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import MLogo from "../assets/images/mobile-logo.png";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { CiCircleInfo, CiHeart, CiSearch, CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [drop, setDrop] = useState(false)

  return (
    <>
      <section className="top-header">
        {/* top header */}
        <div className="top-header py-2 hidden lg:flex items-center justify-center gap-1 text-sm text-white font-secondaryFont bg-[#010101]">
          <FaTruckFast />
          <p className="leading-6">
            Spend $150 or more and get{" "}
            <span className="underline">FREE SHIPPING</span> on your order!
          </p>
        </div>
        {/* main header  */}
        <div className="main-header max-w-[1686px] mx-auto mb-3 xl:mb-0 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-x-5 sm:gap-x-7 md:gap-x-10 lg:gap-x-5 bg-[#010101] text-white lg:bg-white lg:text-black">
          <div className="drop__down_menu xl:hidden relative" onClick={() => setDrop(!drop)}>
            <HiBars3 className="text-lg cursor-pointer"/>
          {/* --dropdown menu  */}
          {drop && <div className="nav-links bg-[#F7F7F7] py-5 px-8 absolute left-0 top-14">
            <ul className="flex flex-col gap-3 text-lg leading-6 uppercase font-semibold tracking-[0.1px] text-[#010101]">
              <li className="flex items-center gap-[6px] group"><Link to={'/'}>Men</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
              <li className="flex items-center gap-[6px] group"><Link to={'/'}>Kids</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
              <li className="flex items-center gap-[6px] group"><Link to={'/'}>Women</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
              <li className="flex items-center gap-[6px] group"><Link to={'/'}>Sport</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
              <li className="flex items-center gap-[6px] group"><Link to={'/'}>Brands</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
              <li className="flex items-center gap-[6px] group"><Link to={'/'}>Sandals</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /> </li>
            </ul>
          </div>}
          </div>
          
          <div className="nav-logo w-[99px] sm:w-[145px] lg:w-[187px]">
            <img src={Logo} alt="" className="w-full hidden lg:block" />
            <img src={MLogo} alt="" className="w-full lg:hidden" />
          </div>
          <div className="nav-search p-3 w-[30%] hidden xl:flex items-center justify-between border border-[#202D2D]">
            <input
              className="border-none outline-none w-full font-light text-sm text-[#393939] leading-4 tracking-[0.1px]"
              type="text"
              placeholder="Search for products"
            />
            <CiSearch className="text-[#B0B0B0]" />
          </div>
          <div className="nav-divider w-[2px] h-5 bg-[#E7E7E7] lg:bg-[#010101] xl:hidden"></div>
          <div className="call-icon flex items-center justify-between gap-2 font-secondaryFont text-sm  tracking-[0.1px]">
            <IoCallOutline className="text-lg" />
            <p className="hidden xl:block">(804) 6623-9999</p>
          </div>
          <div className="nav-divider w-[2px] h-5 bg-[#E7E7E7] hidden 2xl:block lg:bg-[#010101]"></div>
          <div className="mail-icon hidden 2xl:flex items-center justify-between gap-2 font-secondaryFont text-sm  tracking-[0.1px]">
            <IoMailOutline className="text-lg" />
            <p className="hidden 2xl:block">supportoursmallbusiness@g.com </p>
          </div>
          <div className="nav-divider w-[2px] h-5 bg-[#E7E7E7] hidden lg:block lg:bg-[#010101]"></div>
          <div className="info-icon lg:flex items-center justify-between gap-2 font-secondaryFont text-sm  tracking-[0.1px] hidden">
            <CiCircleInfo className="text-lg rotate-180" />
            <p>Info</p>
            <IoIosArrowDown className="text-lg" />
          </div>
          <div className="nav-divider w-[2px] h-5 bg-[#E7E7E7] lg:bg-[#010101] hidden md:block"></div>
          <div className="user-icon  items-center justify-between gap-2 text-lg hidden md:flex">
            <FaRegUser />
            <IoIosArrowDown className="hidden lg:block" />
          </div>
          <div className="nav-divider w-[2px] h-5 bg-[#E7E7E7] lg:bg-[#010101]"></div>
          <div className="heart-icon text-lg">
            <CiHeart />
          </div>
          <div className="nav-divider w-[2px] h-5 bg-[#E7E7E7] lg:bg-[#010101]"></div>
          <div className="cart-icon text-lg">
            <p>
              <HiOutlineShoppingBag />
            </p>
          </div>
          {/* <div className="nav-icons flex items-center gap-14 sm:gap-[75px] md:gap-[90px] text-white lg:text-[#010101]"> </div> */}
        </div>
        {/* separate search option for mobile and tab   */}
        <div className="mobile__nav-search mx-4 xl:hidden">
          <div className="input-details p-3 mx-4 flex items-center justify-between border border-[#202D2D]">
            <input
              className="border-none outline-none h-full font-light text-sm text-[#393939] leading-4 tracking-[0.1px]"
              type="text"
              placeholder="Search for products"
            />
            <CiSearch className="text-[#B0B0B0]" />
          </div>
        </div>
      </section>

      <section className="lower-header hidden xl:block">
        <div className="nav-links bg-[#F7F7F7] py-3 shadow-md">
          <ul className="flex justify-center items-center gap-10 text-lg leading-6 uppercase font-semibold tracking-[0.1px] text-[#010101]">
            <li className="flex items-center gap-[6px] group"><Link to={'/'}>Men</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
            <li className="flex items-center gap-[6px] group"><Link to={'/'}>Kids</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
            <li className="flex items-center gap-[6px] group"><Link to={'/'}>Women</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
            <li className="flex items-center gap-[6px] group"><Link to={'/'}>Sport</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
            <li className="flex items-center gap-[6px] group"><Link to={'/'}>Brands</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /></li>
            <li className="flex items-center gap-[6px] group"><Link to={'/'}>Sandals</Link><IoIosArrowDown className="duration-300 group-hover:rotate-180" /> </li>
          </ul>
        </div>
      </section>

      <section className="responsive__freeShipping-offer">
        <div className="py-2 mt-3 px-4 bg-[#F7F7F7] xl:hidden flex items-center justify-center gap-1 text-sm text-[#010101] font-secondaryFont shadow-md">
          <CiDeliveryTruck />
          <p className="leading-6">
            Spend $150 or more and get &nbsp;
            <span className="underline">FREE SHIPPING</span> on your order!
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
