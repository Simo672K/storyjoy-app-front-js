import BookAuthor from "./BookAuthor"
import PopOver from "../Popover/PopOver"
import AvatarImg from "../../assets/avatar-placeholder.jpg"
import { BsThreeDotsVertical, BsBookmarkPlus } from 'react-icons/bs'
import { RiForbid2Line, RiAddCircleLine, RiShareLine, RiBookmarkLine, RiAddLine } from "react-icons/ri"
import { MdOutlineReport } from "react-icons/md"
import BookAuthorPopover from "./BookAuthorPopover"
import PopOverTrigger from "../Popover/PopOverTrigger"
import PopOverContent from "../Popover/PopOverContent"
import BookCardToolbarMoreItem from "./BookCardToolbarMoreItem"
import BookCardBookMarkPopOverCollectionsList from "./BookCardBookMarkPopOverCollectionsList"

function BookCardToolbar() {
  return (
    <div className="flex items-center">
      <PopOver placement='top-start' effectType="click">
        <BookAuthor authorAvatar={AvatarImg} authorName="Jhon Doe" />
        <BookAuthorPopover />
      </PopOver>
      <div className="flex items-center ms-auto">
        <PopOver placement='top' effectType="click">
          <PopOverTrigger className='hover:bg-gray-300 rounded-full p-2 transition-[background_400ms_ease]'>
            <BsThreeDotsVertical size={20}/>
          </PopOverTrigger>
          <PopOverContent>
            <ul>
              <BookCardToolbarMoreItem>
                <RiBookmarkLine size={18} className="me-2"/> Bookmark
              </BookCardToolbarMoreItem>
              <BookCardToolbarMoreItem>
                <RiShareLine size={18} className="me-2"/> Share
              </BookCardToolbarMoreItem>
              <BookCardToolbarMoreItem>
                <RiAddCircleLine size={18} className="me-2"/> Show more like this
              </BookCardToolbarMoreItem>
              <BookCardToolbarMoreItem>
                <RiForbid2Line size={18} className="me-2"/> Show less like this
              </BookCardToolbarMoreItem>
              <BookCardToolbarMoreItem>
                <MdOutlineReport size={20} className="me-2"/> Report
              </BookCardToolbarMoreItem>
            </ul>
          </PopOverContent>
        </PopOver>
        <PopOver placement='top' effectType="click">
          <PopOverTrigger className='hover:bg-gray-300 rounded-full p-2 transition-[background_400ms_ease]'>
            <BsBookmarkPlus size={20}/>
          </PopOverTrigger>
          <PopOverContent>
            <BookCardBookMarkPopOverCollectionsList />
            <button className="w-full py-2 border-t flex items-center justify-center font-semibold">
              <RiAddLine className="me-1" /> Create new list
            </button>
          </PopOverContent>
        </PopOver>
      </div>
    </div>
  )
}

export default BookCardToolbar