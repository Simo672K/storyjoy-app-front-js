
function SearchboxResultBook({cover, title, author, linkTo}) {
  return (
    <li className='w-full overflow-hidden'>
      <a href={linkTo} className="flex  text-blue-900 items-center cursor-pointer px-8 py-2 hover:text-white hover:bg-blue-600">
        <img src={cover} alt={`${title} book cover`} />
        <div className='flex flex-col ms-2'>
          <h6 className='leading-4 whitespace-nowrap overflow-hidden text-ellipsis w-2/3'>{title}</h6>
          <span className='text-[0.8rem] mt-[1px]'>Written by <strong>{author}</strong></span>
        </div>
      </a>
    </li>
  )
}

export default SearchboxResultBook