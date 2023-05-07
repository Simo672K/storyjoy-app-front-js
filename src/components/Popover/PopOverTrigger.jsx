import React from 'react'

function PopOverTrigger({elementHandler, visibilityPopoverHandler}) {
  const showPopoverHandler= () => {
    visibilityPopoverHandler(true);
  }
  const hidePopoverHandler= () => {
    visibilityPopoverHandler(false);
  }
  return (
    <div className='w-fit' ref={elementHandler} onMouseEnter={showPopoverHandler} onMouseLeave={hidePopoverHandler}>PopOverTrigger</div>
  )
}

export default PopOverTrigger