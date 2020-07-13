import React from 'react'
import { ProductCard } from './ProductCard'
import './ProductCard.scss'

export const CardList: React.FC = () => {
  const numb = Array.from(new Array(6).fill().keys()).map(i => (i += 1))
  return(
    <div className="card__list">
      {numb.map((p,index) => (
        <ProductCard key={index}/>
      ))}
    </div>
  )
}
