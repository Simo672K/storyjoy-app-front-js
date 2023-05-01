import { createContext } from "react";

const DropdownStateContext= createContext(false);

function DropdownStateProvider (props){
  return <DropdownStateContext.Provider {...props} />
} 

export {DropdownStateContext, DropdownStateProvider};