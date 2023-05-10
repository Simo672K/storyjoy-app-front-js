
function Grid({children}) {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-16">
      {children}
    </div>
  )
}

export default Grid