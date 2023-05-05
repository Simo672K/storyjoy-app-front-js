
function NavItem({children, linkTo}) {
  return (
    <li className="my-3 ">
      <a className="cursor-pointer font-medium" href={linkTo}>
        {children}
      </a>
    </li>
  )
}

export default NavItem