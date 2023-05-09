
function BookCardToolbarMoreItem({children, linkTo}) {
  return (
    <li className="hover:bg-gray-200 transition-[background_400ms_ease]">
      <a href={linkTo} className="flex items-center font-semibold px-4 py-2 cursor-pointer">
        {children}
      </a>
  </li>
  )
}

export default BookCardToolbarMoreItem