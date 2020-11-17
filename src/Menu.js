import React from 'react'

//{ id, title, category, price, img, desc }
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h3>{title}</h3>
                <h3 className='price'>${price}</h3>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
