import { useContext } from "react";
import { PopoverCtx } from "./PopOverSate";

function PopOverTrigger({children, className}) {
  const {setHidden, setReferenceElement, effectType} = useContext(PopoverCtx);

  const clickPopoverHandler= () => {
    setHidden(prev=> !prev);
  }
  const showPopoverHandler= () => {
    setHidden(false);
  }
  const hidePopoverHandler= () => {
    setHidden(true);
  }
  return (
    <>
      {
        effectType === 'hover'?
        <div className={`w-fit cursor-pointer ${className??''}`} ref={setReferenceElement} onMouseEnter={showPopoverHandler} onMouseLeave={hidePopoverHandler}>{children}</div>
        :
        <div className={`w-fit cursor-pointer ${className??''}`} ref={setReferenceElement} onClick={clickPopoverHandler}>{children}</div>
      }
    </>
  )
}

export default PopOverTrigger