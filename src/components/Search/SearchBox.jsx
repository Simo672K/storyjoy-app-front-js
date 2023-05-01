import { useState } from 'react'
import SearchBoxInput from './SearchBoxInput'
import SearchBoxCategoryFilter from './SearchBoxCategoryFilter'
import SearchBoxResultMenue from './SearchBoxResultMenue'
import { IoSearch } from 'react-icons/io5'

function SearchBox() {
  const [shown, setShown] = useState(false)
  return (
    <div className='relative'>
      <div className='flex items-center border-2 rounded-md border-gray-300 focus-within:border-blue-500'>
        <SearchBoxCategoryFilter/>
        <SearchBoxInput showResultsHandler={setShown} />
        <span className='px-2'>
          <IoSearch className='text-gray-600' size={24}/>
        </span>
      </div>
      <SearchBoxResultMenue isShown={shown} />
    </div>
  )
}

export default SearchBox