import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Slider, CardList, Filter } from '../../features'
import { getCaruosel } from '../../common/api/api'
import { SlideType } from '../../features/Slider/Slide'

export const Home: React.FC = () => {
	const [carousel, setCatousel] = useState<SlideType[]>([{
		image: '',
		title: '',
	}])

	useEffect(() => {
		const fetchCarousel = async () => {
			const slides: SlideType[] = await getCaruosel()
      setCatousel(slides)
      console.log(slides);

		}
		fetchCarousel()
	}, [])

	return (
		<>
			<div className="carousel section">
				<Slider allSlides={carousel} />
			</div>
			<div className="catalog section">
				<Filter />
				<CardList />
			</div>
		</>
	)
}
