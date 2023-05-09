import BookAuthor from "./BookAuthor"
import PopOver from "../Popover/PopOver"
import PopOverContent from "../Popover/PopOverContent"
import RoundButton from "../Button/RoundButton"
import AvatarImg from "../../assets/avatar-placeholder.jpg"
import {BsThreeDotsVertical,BsBookmarkPlus} from 'react-icons/bs'

function BookCardToolbar() {
  return (
    <div className="flex items-center">
      <PopOver placement='top-start' effectType="click">
        <BookAuthor authorAvatar={AvatarImg} authorName="Jhon Doe" />
        <PopOverContent>
            content is here
        </PopOverContent>
      </PopOver>
      <div className="flex items-center ms-auto">
        <RoundButton className='hover:bg-gray-300 p-2 transition-[background_400ms_ease]'>
          <BsThreeDotsVertical size={20}/>
        </RoundButton>
        <RoundButton className='hover:bg-gray-300 p-2 transition-[background_400ms_ease]'>
          <BsBookmarkPlus size={20}/>
        </RoundButton>
      </div>
    </div>
  )
}

export default BookCardToolbar