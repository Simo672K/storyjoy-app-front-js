import BookCard from "../components/Card/BookCard"
import HomePageHeader from "../components/Header/Header"
import PopOver from "../components/Popover/PopOver"

function HomePage() {
  return (
    <>
      <HomePageHeader />
      <div className="container mx-auto">
        <BookCard />

        <PopOver />
      </div>
    </>
  )
}

export default HomePage