import React from 'react'

export const ProductCard = () => {


  return(
    <div className="card">
      <div className="card__header">
        <figure  className="card__figure">
          <img className="card__image" src="" alt=""/>
        </figure>
      </div>
      <div className="card__body">
        <p className="card__title">
          Title
        </p>
        <p className="card__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima fuga cum a aliquid odit non reprehenderit maxime nisi, rem soluta natus porro ducimus eveniet maiores, itaque consequuntur iusto sequi.
        </p>
      </div>
      <div className="card__footer">
        <div className="card__actions">
          <span className="card__price">2900</span>
          <button className="card__"></button>
        </div>
      </div>
    </div>
  )
}
