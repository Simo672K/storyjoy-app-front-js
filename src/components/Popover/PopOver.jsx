import { useEffect, useState, useRef } from "react"
import { usePopper } from "react-popper"
import {PopOverCtxProvider} from "./PopOverSate";

function PopOver({placement, children, effectType='hover'}) {
  const [hidden, setHidden] = useState(true);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [-10, 10] } }
    ],
    placement
  });

  const PopElemWrraperRef = useRef();

  useEffect(()=>{
    const popoverHandler = (e)=>{
      if(!PopElemWrraperRef.current.contains(e.target) && effectType=== 'click'){
        setHidden(true);
      }
    }
    document.addEventListener('mousedown', popoverHandler);

    return ()=> document.removeEventListener('mousedown', popoverHandler);
  }, [])

  const settings= {
    hidden,
    setHidden,
    setReferenceElement,
    setPopperElement,
    arrowElement,
    setArrowElement,
    styles,
    attributes,
    effectType
  }

  
  return (
    <PopOverCtxProvider value={settings}>
      <section className="w-fit" ref={PopElemWrraperRef}>
        {children}
      </section>
    </PopOverCtxProvider>
  )
}

export default PopOver