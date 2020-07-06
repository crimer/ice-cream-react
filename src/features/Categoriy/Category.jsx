import React from 'react'
import heart from '../../assets/svg/heart.svg'
import './Category.scss'

export const Category = ({children}) => {
  return(
    <div className="category">
      <div className="category-image">
        <img className="category-icon icon" src={heart} alt="heart"/>
      </div>
      <p className="category-title">{children}</p>
    </div>
  )
}
