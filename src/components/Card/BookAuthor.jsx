import Avatar from "../Avatar/Avatar"

function BookAuthor({authorAvatar, authorName}) {
  return (
    <div className="flex items-center">
      <Avatar img={authorAvatar} size={'sm'} />
      <span className="text-gray-800 ms-2 max-w-[4rem] whitespace-nowrap overflow-hidden text-ellipsis">{authorName}</span>
    </div>
  )
}

export default BookAuthor