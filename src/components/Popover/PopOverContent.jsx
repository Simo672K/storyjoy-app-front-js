import { useContext } from "react";
import { PopoverCtx } from "./PopOverSate";

function PopOverContent({ children }) {
  const {
    setPopperElement, 
    setArrowElement, 
    attributes, 
    styles, 
    hidden, 
  } = useContext(PopoverCtx);

  const updatedArrowStyle = {...styles.arrow, transform: styles.arrow.transform+" rotate(45deg)"};
  
  return (
    <>
      {
        hidden?
        <div className='bg-white p-2 rounded-lg w-64 shadow-xl' ref={setPopperElement} style={{...styles.popper, left:'-0.5px'}} {...attributes.popper}>
          <div className='p-2'>
            {children}
          </div>
          <div className='absolute w-4 h-4 border-b border-r bg-white rotate-45' ref={setArrowElement} style={updatedArrowStyle}></div>
        </div>
        :null
      }
    </>
  )
}

export default PopOverContent