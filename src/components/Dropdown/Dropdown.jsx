import React, {useEffect, useState, useRef} from 'react'
import { DropdownStateProvider } from './DropdownCtx'


function Dropdown({children}) {
  const [expanded, setExpanded] = useState(false)
  const dropdownRef = useRef();
  useEffect(()=>{
    const dropdownCloser = document.addEventListener('click', function(e){
      if (!dropdownRef.current.contains(e.target)){
        setExpanded(false);
      }
    })

    // cleanup function
    return () => document.removeEventListener('click', dropdownCloser);
    
  }, [])
  return (
    <DropdownStateProvider value={{get: expanded, set: setExpanded}}>
      <div ref={dropdownRef} className='flex relative'>{children}</div>
    </DropdownStateProvider>
  )
}

export default Dropdown