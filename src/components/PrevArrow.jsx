import { MdKeyboardArrowLeft } from "react-icons/md"


const prevArrow = ({onClick}) => {
  return (
    <div className="h-12 w-12 bg-[#767676] text-white  absolute top-1/2 left-4 -translate-y-1/2 z-10" onClick={onClick}><MdKeyboardArrowLeft className="w-full h-full"/></div>
  )
}

export default prevArrow