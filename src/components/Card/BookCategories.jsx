import React from 'react'

function BookCategories({categories}) {
  return (
    <div>
      <p className="text-gray-900 text-sm">
        {categories.map(category=>
          <a href="" className="after:content-[',_'] last-of-type:after:content-none">{category}</a>
        )}
      </p>
    </div>
  )
}

export default BookCategories