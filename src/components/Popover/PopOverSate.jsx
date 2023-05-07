import { createContext } from "react";

const PopoverCtx = createContext(null);

function PopOverCtxProvider(props) {
  return <PopoverCtx.Provider {...props} />
}

export {PopoverCtx, PopOverCtxProvider};