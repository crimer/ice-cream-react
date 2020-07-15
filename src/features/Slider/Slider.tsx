import React from 'react'
import './Slider.scss'
import { Slide, SlideType } from './Slide'
import Flicking from '@egjs/react-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'

type SliderTypes = {
  allSlides: SlideType[]
}

export const Slider: React.FC<SliderTypes> = ({allSlides}) => {
	const plugins = [new AutoPlay({ duration: 2000 }, 'NEXT')]
	return (
		<div className="slider">
			<Flicking
				tag="div"
				viewportTag="div"
				cameraTag="div"
				AutoPlay
				plugins={plugins}
				duration={100}
				classPrefix="eg-flick"
				deceleration={0.0075}
				horizontal={true}
				circular={true}
				infinite={true}
				infiniteThreshold={0}
				lastIndex={Infinity}
				threshold={40}
				panelEffect={x => 1 - Math.pow(1 - x, 3)}
				defaultIndex={0}
				inputType={['touch', 'mouse']}
				thresholdAngle={45}
				bounce={10}
				autoResize={true}
				adaptive={true}
				zIndex={2000}
				bound={false}
				overflow={false}
				hanger={'50%'}
				anchor={'50%'}
				gap={10}
				moveType={{ type: 'snap', count: 2 }}
				collectStatistics={true}>
				{allSlides.map((item:SlideType, index:number) => (
					<Slide key={index} title={item.title} image={item.image}/>
				))}
			</Flicking>
		</div>
	)
}
