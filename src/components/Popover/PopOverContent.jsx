import React from 'react'

function PopOverContent({popoverHandler, popoverStyle, popoverAttributes, arrowHandler, arrowStyle, isVisible}) {
  const updatedArrowStyle = {...arrowStyle, transform: arrowStyle.transform+" rotate(45deg)"};
  return (
    <>
      {
        isVisible?
        <div className='bg-white p-2 rounded-lg w-64 shadow-md border' ref={popoverHandler} style={popoverStyle} {...popoverAttributes}>
          <div className='p-2'>
            PopOverContent
          </div>
          <div className='absolute w-4 h-4 border-b border-r bg-white rotate-45' ref={arrowHandler} style={updatedArrowStyle}></div>
        </div>
        :null
      }
    </>
  )
}

export default PopOverContent