import BookShowcaseContent from "./BookShowcaseContent"
import BookShowcaseCover from "./BookShowcaseCover"
import BookCover from "../../assets/book-cover-big.png"

function BookShowcase() {
  return (
    <div className="flex col-span-2">
      <BookShowcaseCover cover={BookCover} />
      <BookShowcaseContent />
    </div>
  )
}

export default BookShowcase