import React from 'react'
import './Slider.scss'

export const Slide: React.FC = ({ children }) => {
	return (
		<div className="slide" >
			<div className="slide__content">
				<span className="slide__text">{children}</span>
			</div>
		</div>
	)
}
