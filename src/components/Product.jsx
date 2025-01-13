import { GoHeart } from 'react-icons/go'
import ProductBadge from './ProductBadge'
import { IoIosStar, IoIosStarHalf } from 'react-icons/io'
import ProductAvatar from '../assets/images/product-avatar.png'

const Product = ({src, productTitle, className}) => {
    return (
        <>
            <div className={`${className}`}>
                <div className="product-img relative">
                    <img src={src} alt="" className='w-full h-full' />
                    <ProductBadge badgeText={'Sale!'} className={'inline-block absolute top-2 left-2'} />
                    <div className="product__wish_list__icon px-3 py-3 absolute bottom-2 right-2 text-[#010101]">
                        <GoHeart />
                    </div>
                </div>

                <div className="product-details pt-3 font-fourthFont font-medium text-sm text-[#888888]">
                    <h3 className='mb-3 font-bold text-lg text-[#393939]'>{productTitle}</h3>
                    <div className="product-ratings mb-3 flex items-center gap-2">
                        <div className="icons flex items-center gap-[2px] text-[#010101]">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStarHalf />
                        </div>
                        <div className="ratings-review text-[#393939]">
                            <span>4.9</span> {' '}
                            <span className='text-sm'>(15 reviews)</span>
                        </div>
                    </div>
                    <div className="price mb-3">
                        <span className='line-through'>$772.00</span> &nbsp;
                        <span className='font-bold text-lg text-[#010101]'>$299.00</span>
                    </div>
                    <div className="product-image-gallery py-3 mb-3 flex items-center gap-2">
                        <img src={ProductAvatar} alt="" />
                        <img src={ProductAvatar} alt="" />
                        <img src={ProductAvatar} alt="" />
                        <span>+3 Style</span>
                    </div>
                    <div className="specification mb-3">
                        <p className='mb-2 '>Specification:</p>
                        <p className='text-[#393939]'>Running, Engineered mesh</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product