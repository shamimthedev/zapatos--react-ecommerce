import { CiDeliveryTruck } from "react-icons/ci"
import { MdOutlineOutbox } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { TbInfoHexagon } from "react-icons/tb";
import HeroSliderImg from '../assets/images/hero-slider.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow'

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const bannerSliders = [
    {
      id: 1,
      src: HeroSliderImg
    },
    {
      id: 2,
      src: HeroSliderImg
    }
  ]

  return (
    <>
      <section className="hero-section px-4 sm:px-6 lg:px-8 mt-8">
        <Slider {...settings}>
          {
            bannerSliders.map((banner) => {
              return (
                <div key={banner.id} className="hero-slider-content text-[#010101] relative">
                  <img src={banner.src} alt="" className="" />
                  <h5 className="xl:max-w-[548px] lg:max-w-[45%] mb-6 hidden lg:block  font-semibold text-2xl leading-8 absolute left-8 top-[56%]">Discover the latest drops, limited editions, and classic styles designed for every step of your journey</h5>
                  <div className=" hidden lg:max-w-[40%] lg:block absolute right-8 top-[56%]">
                    <h5 className="mb-6 font-semibold text-2xl leading-8 text-right">Quality you can count on</h5>
                    <div className="features px-4 py-3 border-[#202D2D] border text-[#010101] flex gap-3 items-center">
                      <div className="shipping flex items-center gap-[6px]">
                        <CiDeliveryTruck />
                        <p>Shipping</p>
                      </div>
                      <div className="divider w-[2px] h-5 bg-[#010101]"></div>
                      <div className="shipping flex items-center gap-[6px]">
                        <MdOutlineOutbox />
                        <p>Returns</p>
                      </div>
                      <div className="divider w-[2px] h-5 bg-[#010101]"></div>
                      <div className="shipping flex items-center gap-[6px]">
                        <AiOutlineSafety />
                        <p>Warranty</p>
                      </div>
                      <div className="divider w-[2px] h-5 bg-[#010101]"></div>
                      <div className="shipping flex items-center gap-[6px]">
                        <TbInfoHexagon />
                        <p>FAQ</p>
                      </div>
                    </div>
                  </div>
                </div>
              ); 
            })
          }
        </Slider>
      </section>
    </>
  )
}

export default Hero
