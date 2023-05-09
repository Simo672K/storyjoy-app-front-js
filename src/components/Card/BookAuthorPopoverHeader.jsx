import {RxDotFilled} from "react-icons/rx"
import Avatar from "../Avatar/Avatar"

function BookAuthorPopoverHeader({authorImg, authorName, authorStories, authorViews}) {
  return (
    <div className="flex items-center">
        <div className="me-2">
          <Avatar img={authorImg} />
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold text-lg">{authorName}</h5>
          <span className="text-[0.7rem] text-gray-500">{authorStories} Stories <RxDotFilled className="inline"/> {authorViews} Views</span>
        </div>
      </div>
  )
}

export default BookAuthorPopoverHeader