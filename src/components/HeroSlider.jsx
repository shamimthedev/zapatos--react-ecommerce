import imgSrc from '../assets/images/logo.png'

const HeroSlider = () => {
    return (
        <div className="hero-slider-content text-[#010101] relative">
            <img src={imgSrc} alt="" className="" />
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
    )
}

export default HeroSlider