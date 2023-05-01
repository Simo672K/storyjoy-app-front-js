
function NavbarItem({children, linkTo}) {
  return (
    <li>
      <a href={linkTo} className='inline-block font-medium px-4 text-lg py-1 cursor-pointer hover:text-sky-600'>{children}</a>
    </li>  
  )
}

export default NavbarItem