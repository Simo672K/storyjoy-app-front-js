import {IoClose} from 'react-icons/io5'

function OffcanvasHeader({children, onClose}) {
  return (
    <div className='pt-6 pb-3 relative px-6 border-b flex'>
      <button 
        onClick={()=>onClose()}
        className='
          bg-gray-700 w-7 h-7 rounded-full flex 
          items-center justify-center border-2 
          border-white text-white absolute 
          left-0 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <IoClose size={18}/> 
      </button>
      {children}
    </div>
  )
}

export default OffcanvasHeader