import BookCard from "../components/Card/BookCard"
import HomePageHeader from "../components/Header/Header"

function HomePage() {
  return (
    <>
      <HomePageHeader />
      <div className="container mx-auto">
        <BookCard />
      </div>
    </>
  )
}

export default HomePage