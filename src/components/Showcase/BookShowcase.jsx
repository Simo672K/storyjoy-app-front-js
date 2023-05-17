import BookShowcaseContent from "./BookShowcaseContent"
import BookShowcaseCover from "./BookShowcaseCover"
import BookCover from "../../assets/book-cover-big.png"
import SectionTitle from "../Section/SectionTitle"
import { Notepad2 } from "iconsax-react"

function BookShowcase() {
  return (
    <div className="flex flex-col col-span-2">
      <SectionTitle>
        <Notepad2 size="32" color="#005cfb" variant="Bulk"/>
        <h3 className="text-xl font-bold ms-3">Story of the month</h3>
      </SectionTitle>
      <div className="flex">
        <BookShowcaseCover cover={BookCover} />
        <BookShowcaseContent />
      </div>
    </div>
  )
}

export default BookShowcase