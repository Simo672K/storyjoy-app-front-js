import React, {useContext} from 'react'
import { DropdownStateContext } from './DropdownCtx'

function DropdownMenu({children, right, custom}) {
  const DropdownState= useContext(DropdownStateContext);

  return (
    DropdownState.get?
    <div className={`absolute z-10 rounded top-full border mt-5 pt-2 bg-white shadow-lg ${right? 'left-1/2 translate-x-[-93%]' : 'left-0'} ${custom ? custom:'w-60'}`}>
      <ul className={'relative w-full before:absolute before:w-4 before:h-4 before:bg-white z-10 before:-z-10 before:-top-4 before:rotate-45 before:border-t before:border-l'+ (right?' before:right-2': ' before:left-4')}>{children}</ul>
    </div>
    :
    null
  )
}

export default DropdownMenu