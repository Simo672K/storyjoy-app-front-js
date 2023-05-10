
function SectionTitle({children, className}) {
  return (
    <div className={"flex mb-4 items-center "+className??''}>{children}</div>
  )
}

export default SectionTitle