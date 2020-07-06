import React, { useState, useEffect } from 'react'
import './Slider.scss'
import leftArrow from '../../assets/svg/left-arrow.svg'
import rightArrow from '../../assets/svg/right-arrow.svg'
import { Slide } from './Slide'

export const Slider = () => {
	const numb = Array.from(new Array(7).fill().keys()).map(i => (i += 1))
	const [x, setX] = useState(0)
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const next = (current + 1) % numb.length
		const id = setTimeout(() => {
			setCurrent(next)
		}, 3000)
		return () => clearTimeout(id)
	}, [current])

	const goRight = () => {
		// setCurrent(current++)
		// console.log(current);

		if (x === -90 * (numb.length - 1)) {
			setX(0)
		} else {
			setX(x - 100)
		}
	}
	const goLeft = () => {
		if (x === 0) {
			setX(-90 * (numb.length - 1))
		} else {
			setX(0)
		}
	}

	return (
		<div className="slider">
			<div className="slider-content">
				{numb.map((item, index) => (
					<Slide key={index} xPosition={x}>
						Slide: {item}
					</Slide>
				))}
			</div>
			<span className="slider-arrows__left" onClick={goLeft}>
				<img
					className="alider-arrows__icon icon"
					src={leftArrow}
					alt="leftArrow"
				/>
			</span>
			<span className="slider-arrows__right" onClick={goRight}>
				<img
					className="alider-arrows__icon icon"
					src={rightArrow}
					alt="rightArrow"
				/>
			</span>
		</div>
	)
}
