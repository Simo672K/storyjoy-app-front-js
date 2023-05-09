
function RoundButton({children, className}) {
  return (
    <button className={`inline-block rounded-full ${className??''}`}>{children}</button>
  )
}

export default RoundButton