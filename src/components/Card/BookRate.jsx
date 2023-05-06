import {BsFillStarFill} from "react-icons/bs"

function BookRate({rate}) {
  return (
    <span className="flex items-center absolute top-3 right-2 z-10 px-2 py-1 rounded-full text-white text-[0.8rem] bg-[linear-gradient(to_bottom,#000,rgba(0,0,0,0.1))]">
      <BsFillStarFill className="text-yellow-400 me-1" size={15}/>
      {rate}
    </span>
  )
}

export default BookRate