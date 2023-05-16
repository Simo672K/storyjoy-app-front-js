
function BookShowcaseCover({cover}) {
  return (
    <div className="w-[47.5rem] relative rounded-tr-xl rounded-br-xl overflow-hidden basis-full">
      <img className="w-full block" src={cover} alt="Book cover" />
    </div>
  )
}

export default BookShowcaseCover