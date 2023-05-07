import Avatar from "../Avatar/Avatar"
import PopOverTrigger from "../Popover/PopOverTrigger"

function BookAuthor({authorAvatar, authorName}) {
  return (
    <div className="flex items-center">
      <PopOverTrigger>
        <Avatar img={authorAvatar} size={'sm'} />
      </PopOverTrigger>
      <span className="text-gray-800 ms-2 max-w-[4rem] whitespace-nowrap overflow-hidden text-ellipsis">{authorName}</span>
    </div>
  )
}

export default BookAuthor