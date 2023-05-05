
function ButtonLink({children, linkTo, className}) {
  return (
    <a href={linkTo} className={"cursor-pointer inline-block " + className??''}>
      {children}
    </a>
  )
}

export default ButtonLink;