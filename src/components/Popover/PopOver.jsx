import { useState } from "react"
import { usePopper } from "react-popper"
import {PopOverCtxProvider} from "./PopOverSate";

function PopOver({placement, children}) {
  const [hidden, setHidden] = useState(false);
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

  const settings= {
    hidden,
    setHidden,
    setReferenceElement,
    setPopperElement,
    arrowElement,
    setArrowElement,
    styles,
    attributes
  }

  
  return (
    <PopOverCtxProvider value={settings}>
      {children}
    </PopOverCtxProvider>
  )
}

export default PopOver