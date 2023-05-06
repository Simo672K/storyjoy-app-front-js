import BookCoverImg from "../../assets/book-cover-card.png"
import BookCategories from "./BookCategories"
import BookCover from "./BookCover"
import BookTitle from "./BookTitle"
import BookCardToolbar from "./BookCardToolbar"

function BookCard() {
  return (
    <div className="pb-2 w-64">
      <BookCover cover={BookCoverImg} rate="4.0" />
      <div className="mt-2">
        <BookCategories categories={["Action", "Romance", "Crime"]}/>
        <BookTitle title="The Book"/>
        <BookCardToolbar />
      </div>
    </div>
  )
}

export default BookCard