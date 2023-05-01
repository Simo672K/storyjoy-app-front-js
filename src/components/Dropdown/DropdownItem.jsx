
function DropdownItem({children, linkTo, size, className}) {
  return (
    <li className='w-full'>
      <a className={`cursor-pointer px-4  hover:bg-blue-600 hover:text-white flex justify-start items-center ${size==='sm'? 'py-1': 'py-2'} ${className?? ''}`} href={linkTo}>
        {children}
      </a>
    </li>
  )
}

export default DropdownItem