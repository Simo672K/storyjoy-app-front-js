import {RiThumbUpLine} from "react-icons/ri"
import PillButton from "../Button/PillButton"

function BookAuthorPopoverFooter({follower}) {
  return (
    <div className="border-t border-gray-100 mt-2 py-2 flex items-center">
        <PillButton className="border-2 border-gray-400 text-sm text-gray-600 flex items-center px-5 hover:bg-gray-600 hover:border-gray-600 hover:text-white transition">
          <RiThumbUpLine size={18} className="me-2"/>
          Follow
        </PillButton>
        <span className="text-gray-600 text-[0.8rem] ms-auto">{follower} Followers</span>
      </div>
  )
}

export default BookAuthorPopoverFooter