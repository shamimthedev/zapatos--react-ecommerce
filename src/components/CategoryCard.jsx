import { FaArrowRightLong } from "react-icons/fa6"

const CategoryCard = ({src, cardText}) => {
    return (
        <>
            <div className="card relative">
                <img src={src} alt="" />
                <div className="card-details px-4 py-3 absolute left-6 bottom-6 uppercase flex justify-center items-center gap-[6px] bg-white text-[#010101] font-semibold text-lg">
                    <p>{cardText}</p>
                    <FaArrowRightLong />
                </div>
            </div>
        </>
    )
}

export default CategoryCard