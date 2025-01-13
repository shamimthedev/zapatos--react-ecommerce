import { FaArrowRightLong } from "react-icons/fa6";
import Container from "./Container";
import Product from "./Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product1 from '../assets/images/product-image1.png'
import Product2 from '../assets/images/product-image2.png'
import Product3 from '../assets/images/product-image3.png'
import Product4 from '../assets/images/product-image4.png'

const HappeningNow = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const productList = [
    {
      id: 1,
      img: Product1,
      title: 'BROOKS GHOST 10',
      oldPrice: 399.00,
      newPrice: 172.00,
      tags: 'Running, Engineered mesh'
    },
    {
      id: 2,
      img: Product2,
      title: 'BROOKS GHOST 12',
      oldPrice: 199.00,
      newPrice: 72.00,
      tags: 'Running'
    },
    {
      id: 3,
      img: Product3,
      title: 'BROOKS GHOST 15',
      oldPrice: 249.00,
      newPrice: 142.00,
      tags: 'Running, Engineered mesh'
    },
    {
      id: 4,
      img: Product4,
      title: 'BROOKS GHOST 16',
      oldPrice: 179.00,
      newPrice: 159.00,
      tags: 'Engineered mesh'
    },
  ]

  return (
    <>
      <section className="happening-now-section">
        <Container>
          <div className="title-section text-center">
            {/* <div className="bg-[#E4E5E7] w-[30%] h-[1px]"></div> */}
            <h2 className="mb-6 text-[#010101] text-[24px] font-bold leading-8">HAPPENING NOW!</h2>
            {/* <div className="bg-[#E4E5E7] w-[30%] h-[1px]"></div> */}
          </div>
          <div className="btn mb-3 flex justify-center items-center">
            <button className="flex items-center gap-3 ">See all <FaArrowRightLong /> </button>
          </div>
          <div className="product-section py-12 px-10">
            <Slider {...settings}>
              {
                productList.map((product) => {
                  return (
                    <Product key={product.id} className={'w-[95%] px-5'} src={product.img} productTitle={product.title} />
                  )
                }
                )
              }
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HappeningNow;
