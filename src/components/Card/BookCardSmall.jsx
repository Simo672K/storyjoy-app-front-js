import BookCardSmallContent from "./BookCardSmallContent"
import BookCardSmallCover from "./BookCardSmallCover"
import BookCardToolbar from "./BookCardToolbar"
import SmallCover from "../../assets/book-cover-smallcard.png"

function BookCardSmall() {
  return (
    <div className="flex mb-2">
      <BookCardSmallCover cover={SmallCover}/>
      <div className="flex flex-col ps-2 flex-grow">
        <BookCardSmallContent/>
        <BookCardToolbar/>
      </div>
    </div>
  )
}

export default BookCardSmall