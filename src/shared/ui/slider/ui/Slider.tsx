import s from "./slider.module.sass"

import {FC, useRef} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Arrow} from "entities/apartment/ui/arrows/Arrow"
import image from "resources/cottages/alesha/1.png"
import {default as SlickSlider}  from "react-slick"

interface SliderProps {
    className?: string
	settings?: Settings
}

export interface Settings {
	dots?: boolean;
	infinite?: boolean;
	speed?: number;
	slidesToShow?: number;
	slidesToScroll?: number;
	arrows?: boolean;
}

const settings: Settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
}

export const Slider: FC<SliderProps> = (props) => {
	const {className = ""} = props

	const refSlider = useRef(null)

	const onNextRight = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		refSlider.current.slickPrev()
	}

	const onNextLeft = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		refSlider.current.slickNext()
	}

	return (
		<div className={classNames([s.slider, className])}>
			<Arrow onClick={onNextRight} left={true}/>
			<SlickSlider ref={refSlider} className={s.slick} {...settings} {...props.settings}>
				<img src={image} alt=""/>
				<img src={image} alt=""/>
				<img src={image} alt=""/>
			</SlickSlider>
			<Arrow onClick={onNextLeft} left={false}/>
		</div>
	)
}
