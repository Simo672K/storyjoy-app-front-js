import PopOverContent from "../Popover/PopOverContent"
import AvatarImg from "../../assets/avatar-placeholder.jpg"
import BookAuthorPopoverHeader from "./BookAuthorPopoverHeader"
import BookAuthorPopoverBody from "./BookAuthorPopoverBody"
import BookAuthorPopoverFooter from "./BookAuthorPopoverFooter"

function BookAuthorPopover() {
  return (
    <PopOverContent>
      <BookAuthorPopoverHeader authorImg={AvatarImg} authorName='Jhon Doe' authorStories='20' authorViews='25K'/>
      <BookAuthorPopoverBody content="Lorem ipsum dolor sit amet nefl consectetur adipisicing elit." />
      <BookAuthorPopoverFooter follower='12K' />
    </PopOverContent>
  )
}

export default BookAuthorPopover