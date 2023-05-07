import { useState } from "react"
import { usePopper } from "react-popper"
import PopOverTrigger from "./PopOverTrigger";
import PopOverContent from "./PopOverContent";

function PopOver() {
  const [hidden, setHidden] = useState(true);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 8] } }
    ],
    placement:'top-start'
  });

  
  return (
    <div>
      <PopOverTrigger elementHandler={setReferenceElement} visibilityPopoverHandler={setHidden}/>
      <PopOverContent popoverHandler={setPopperElement} popoverStyle={styles.popper} isVisible={hidden}
        popoverAttributes={attributes.popper} arrowHandler={setArrowElement} arrowStyle={styles.arrow}/>
    </div>
  )
}

export default PopOver