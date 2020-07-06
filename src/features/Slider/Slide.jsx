import React from 'react'
import './Slider.scss'

export const Slide = ({ children, xPosition }) => {
	return (
		<div className="slide" style={{transform:`translateX(${xPosition}%)`}}>
			<div className="slide__content">
				<span className="slide__text">{children}</span>
			</div>
		</div>
	)
}
