import BookAuthor from "./BookAuthor"
import AvatarImg from "../../assets/avatar-placeholder.jpg"
import {BsThreeDotsVertical,BsBookmarkPlus} from 'react-icons/bs'

function BookCardToolbar() {
  return (
    <div className="flex items-center">
      <BookAuthor authorAvatar={AvatarImg} authorName="Jhon Doe" />
      <div className="flex items-center ms-auto">
        <BsThreeDotsVertical size={20}/>
        <BsBookmarkPlus size={24}/>
      </div>
    </div>
  )
}

export default BookCardToolbar