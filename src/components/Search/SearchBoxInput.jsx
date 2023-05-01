import { useState } from "react"

function SearchBoxInput({showResultsHandler}) {
  const [searchQuerry, setSearchQuery] = useState('')
  const [focus, setFocus]= useState(false)

  const handelShowResult = (e) =>{
    if(searchQuerry){
      showResultsHandler(focus)
    }
    setSearchQuery(e.target.value)
  }

  return (
    <input 
      onFocus={()=> setFocus(true)} 
      onBlur={()=> showResultsHandler(false)}
      onInput={handelShowResult} 
      value={searchQuerry} 
      className='ps-4 py-2 lg:w-80 focus:outline-none focus:border-blue-500 border-gray-300 border-l-2' 
      type='text' 
      placeholder='Search...' />
  )
}

export default SearchBoxInput