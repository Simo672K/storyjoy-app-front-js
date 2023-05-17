import BookCategories from "./BookCategories"


function BookCardSmallContent() {
  return (
    <div className="mb-auto">
      <BookCategories categories={["Sci-Fi"]} />
      <h4 className="text-xl font-bold">The Moonlight</h4>
    </div>
  )
}

export default BookCardSmallContent