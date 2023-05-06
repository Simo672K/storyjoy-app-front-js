import BookRate from "./BookRate"

function BookCover({cover, rate}) {
  return (
  <div className="h-[22.5rem] relative rounded-tr-xl rounded-br-xl overflow-hidden">
    <BookRate rate={rate}/>
    <img className="h-full" src={cover} alt="Book cover" />
  </div>
  )
}

export default BookCover