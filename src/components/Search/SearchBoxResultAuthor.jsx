import Avatar from '../Avatar/Avatar'

function SearchBoxResultAuthor({authorName, authorAvatar, linkTo}) {
  return (
    <li className='w-full overflow-hidden'>
      <a href={linkTo} className="flex  text-blue-900 items-center cursor-pointer px-8 py-1 hover:text-white hover:bg-blue-600">
        <Avatar size='sm' img={authorAvatar}/>
        <h6 className='leading-4 whitespace-nowrap overflow-hidden text-ellipsis w-1/2 ms-2'>{authorName}</h6>  
      </a>
    </li>
  )
}

export default SearchBoxResultAuthor