import React, {useContext} from 'react'
import {DropdownStateContext} from "./DropdownCtx"

function DropdownTrigger({children}) {
  const dropdownState = useContext(DropdownStateContext);

  const handelDropdownState = () => {
    dropdownState.set(prev=> !prev);
  }

  return (
    <button onClick={handelDropdownState}>{children}</button>
  )
}

export default DropdownTrigger