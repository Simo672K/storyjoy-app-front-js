import { useContext } from "react";
import { PopoverCtx } from "./PopOverSate";

function PopOverTrigger({children}) {
  const {setHidden, setReferenceElement} = useContext(PopoverCtx);


  const showPopoverHandler= () => {
    setHidden(true);
  }
  const hidePopoverHandler= () => {
    setHidden(false);
  }
  return (
    <div className='w-fit cursor-default' ref={setReferenceElement} onMouseEnter={showPopoverHandler} onMouseLeave={hidePopoverHandler}>{children}</div>
  )
}

export default PopOverTrigger