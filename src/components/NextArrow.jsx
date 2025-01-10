import { MdKeyboardArrowRight } from "react-icons/md"

const nextArrow = ({onClick}) => {
  return (
    <div className="h-12 w-12 bg-[#767676] text-white absolute top-1/2 right-4 -translate-y-1/2" onClick={onClick}><MdKeyboardArrowRight className="w-full h-full"/> </div>
  )
}

export default nextArrow