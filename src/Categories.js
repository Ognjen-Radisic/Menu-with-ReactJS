import React from 'react'

const Categories = ({ categories, filterCategories }) => {
  return (
    <div className='btn-container'>
      {categories.map((cata, index) => {
        return (
          <button
            key={index}
            type='button'
            className='filter-btn'
            onClick={() => filterCategories(cata)}
          >
            {cata}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
