import React from 'react'

function PillButton({children, className}) {
  return (
    <button className={`inline-block px-10 py-2 rounded-full font-medium ${className??''}`}>
      {children}
    </button>
  )
}

export default PillButton