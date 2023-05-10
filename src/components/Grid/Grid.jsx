
function Grid({children}) {
  return (
    <div className="grid grid-cols-5 gap-16">
      {children}
    </div>
  )
}

export default Grid