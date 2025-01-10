import { FaTruckFast, FaRegUser } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import MLogo from "../assets/images/mobile-logo.png";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { CiCircleInfo, CiHeart, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <section className="header">
        {/* top header */}
        <div className="top-header py-2 hidden md:flex items-center justify-center gap-1 text-sm text-white font-secondaryFont bg-[#010101]">
          <FaTruckFast />
          <p className="leading-6">
            Spend $150 or more and get{" "}
            <span className="underline">FREE SHIPPING</span> on your order!
          </p>
        </div>
        {/* main header  */}
        <div className="main-header max-w-[1686px] mx-auto mb-3 md:mb-0 px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between gap-x-5 sm:gap-x-7 md:gap-x-10 bg-[#010101] text-white lg:bg-white lg:text-black">
          <div className="drop__down_menu md:hidden">
            <HiBars3 />
          </div>
          <div className="nav-logo w-[20%]">
            <img src={Logo} alt="" className="w-full hidden md:block" />
            <img src={MLogo} alt="" className="w-full md:hidden" />
          </div>
          <div className="nav-search w-[35%] p-3 hidden lg:flex items-center justify-between border border-[#202D2D]">
            <input
              className="border-none outline-none w-full font-light text-sm text-[#393939] leading-4 tracking-[0.1px]"
              type="text"
              placeholder="Search for products"
            />
            <CiSearch className="text-[#B0B0B0]" />
          </div>
          <div className="nav-icons w-[30%] md:w-[45%] flex items-center justify-between text-white md:text-[#010101]">
            <div className="w-[2px] h-[20px] bg-[#E7E7E7] lg:hidden"></div>
            <div className="call-icon flex items-center justify-between gap-2 font-secondaryFont text-sm  tracking-[0.1px]">
              <IoCallOutline className="text-lg" />
              <p className="hidden md:block">(804) 6623-9999</p>
            </div>
            <div className="w-[2px] h-[20px] bg-[#E7E7E7] hidden md:bg-[#010101]"></div>
            <div className="mail-icon hidden md:flex items-center justify-between gap-2 font-secondaryFont text-sm  tracking-[0.1px]">
              <IoMailOutline className="text-lg" />
              <p>supportoursmallbusiness@g.com</p>
            </div>
            <div className="w-[2px] h-[20px] bg-[#E7E7E7] hidden md:bg-[#010101]"></div>
            <div className="info-icon md:flex items-center justify-between gap-2 font-secondaryFont text-sm  tracking-[0.1px] hidden">
              <CiCircleInfo className="text-lg rotate-180" />
              <p>Info</p>
              <IoIosArrowDown className="text-lg" />
            </div>
            <div className="w-[2px] h-[20px] bg-[#E7E7E7] hidden md:bg-[#010101]"></div>
            <div className="user-icon  items-center justify-between gap-2 text-lg hidden md:flex">
              <FaRegUser />
              <IoIosArrowDown />
            </div>
            <div className="w-[2px] h-[20px] bg-[#E7E7E7] md:bg-[#010101]"></div>
            <div className="heart-icon text-lg">
              <CiHeart />
            </div>
            <div className="w-[2px] h-[20px] bg-[#E7E7E7] md:bg-[#010101]"></div>
            <div className="cart-icon text-lg">
              <p>
                <HiOutlineShoppingBag />
              </p>
            </div>
          </div>
        </div>
        {/* separate search option for mobile and tab   */}
        <div className="mobile__nav-search mx-4 lg:hidden">
          <div className="input-details p-3 mx-4 flex items-center justify-between border border-[#202D2D]">
            <input
              className="border-none outline-none h-full font-light text-sm text-[#393939] leading-4 tracking-[0.1px]"
              type="text"
              placeholder="Search for products"
            />
            <CiSearch className="hover:opacity-75 text-[#B0B0B0] p-4 bg-blue-500 border-3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
