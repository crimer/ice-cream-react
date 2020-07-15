import React from 'react'
import './Slider.scss'
import { Slide } from './Slide'
import Flicking from '@egjs/react-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'

export const Slider: React.FC = () => {
	const numb = Array.from(new Array(7).fill(1).keys()).map(i => (i += 1))
  // const carousel = useSelector((state:IAppState) => state.)
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
				{numb.map((item, index) => (
					<Slide key={index}>Slide: {item}</Slide>
				))}
			</Flicking>
		</div>
	)
}
