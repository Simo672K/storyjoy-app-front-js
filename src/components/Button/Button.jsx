
function Button({children, className}) {
  return (
    <button className={"inline-block " + className??''}>
      {children}
    </button>
  )
}

export default Button;