import React from 'react'
import { ProductCard } from './ProductCard'
export const CardList = () => {
  const numb = Array.from(new Array(9).fill().keys()).map(i => (i += 1))
  return(
    <div>
      {numb.map((p,index) => (
        <ProductCard key={index}/>
      ))}
    </div>
  )
}
