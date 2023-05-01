import Dropdown from '../Dropdown/Dropdown'
import DropdownTrigger from '../Dropdown/DropdownTrigger'
import DropdownMenu from '../Dropdown/DropdownMenu'
import DropdownDevider from '../Dropdown/DropdownDevider'
import DropdownItem from '../Dropdown/DropdownItem'
import { IoChevronDown } from 'react-icons/io5'
import DropdownSearchField from '../Dropdown/DropdownSearchField'

const categories = [
  "Action", "Adventure", "Si-Fi", "Romance", "Martial Arts"
]


function SearchBoxCategoryFilter() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <span className='px-4 font-medium flex items-center'>
          Categories
          <IoChevronDown className='ms-3'/>
        </span>
      </DropdownTrigger>
      <DropdownMenu custom={'w-80'}>
        <li className='px-4 py-2 text-lg text-blue-950 font-bold'>Categories</li>
        <DropdownDevider/>
        <DropdownSearchField />
        {
          categories.map((category, id)=> 
            <DropdownItem key={id} size='sm' className='text-sm text-blue-700'>
              {category}
            </DropdownItem>)
        }
        <li className='border-t text-center py-2 mt-2 bg-[#e0eaff4d]'>
          <a href="" className='text-blue-800 text-sm'>Show all categories</a>
        </li>
      </DropdownMenu>
    </Dropdown>
  )
}

export default SearchBoxCategoryFilter