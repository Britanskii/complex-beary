import s from "./slider.module.sass"

import {FC, useRef} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Arrow} from "shared/ui/sliderNew/ui/arrows/Arrow"
import {default as SlickSlider}  from "react-slick"
import {LazyImage} from "shared/lazyImage/ui/LazyImage"

export enum SliderVariants {
	DEFAULT = "default",
	CLEAR = "clear",
	BIG = "big"
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
	const imageBig = SliderVariants.BIG === variant

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
		<div className={classNames([s.slider, s[variant], className])}>
			<Arrow onClick={onNextRight} left={true}/>
			<SlickSlider ref={refSlider} className={s.slick} {...settings} {...props.settings}>
				{images.map((src) =>
					<LazyImage className={classNames([s.image], {[s.bigImage]: imageBig} )} key={src} src={src}/>
				)}
			</SlickSlider>
			<Arrow onClick={onNextLeft} left={false}/>
		</div>
	)
}
