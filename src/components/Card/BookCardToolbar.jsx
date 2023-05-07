import BookAuthor from "./BookAuthor"
import AvatarImg from "../../assets/avatar-placeholder.jpg"
import {BsThreeDotsVertical,BsBookmarkPlus} from 'react-icons/bs'
import PopOver from "../Popover/PopOver"
import PopOverContent from "../Popover/PopOverContent"

function BookCardToolbar() {
  return (
    <div className="flex items-center">
      <PopOver placement='top-start'>
        <BookAuthor authorAvatar={AvatarImg} authorName="Jhon Doe" />
        <PopOverContent>
            content is here
        </PopOverContent>
      </PopOver>
      <div className="flex items-center ms-auto">
        <BsThreeDotsVertical size={20}/>
        <BsBookmarkPlus size={24}/>
      </div>
    </div>
  )
}

export default BookCardToolbar