import React from 'react'
import './Slider.scss'

export type SlideType = {
	image: string
	title: string
}
export const Slide: React.FC<SlideType> = ({ title, image }) => {
	const styles: React.CSSProperties = { backgroundImage: `url(${image})` }

	return (
		<div className="slide" style={styles}>
			<div className="slide__content">
				<span className="slide__text">{title}</span>
			</div>
		</div>
	)
}
