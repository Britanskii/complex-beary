import s from "./slider.module.sass"

import {FC, useRef} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Arrow} from "entities/apartment/ui/arrows/Arrow"
import {default as SlickSlider}  from "react-slick"

export enum SliderVariants {
	DEFAULT = "default",
	CLEAR = "clear"
}

interface SliderProps {
    className?: string
	settings?: Settings
	variant?: SliderVariants
	images: string[]
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
	const {className = "", images, variant = SliderVariants.DEFAULT} = props

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
		<div className={classNames([s.slider, className, s[variant]])}>
			<Arrow onClick={onNextRight} left={true}/>
			<SlickSlider ref={refSlider} className={s.slick} {...settings} {...props.settings}>
				{images.map((src) =>
					<img className={s.image} key={src} src={src}/>
				)}
			</SlickSlider>
			<Arrow onClick={onNextLeft} left={false}/>
		</div>
	)
}
