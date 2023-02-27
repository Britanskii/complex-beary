import s from "./slider.module.sass"

import {FC, useEffect, useRef, useState} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Arrow} from "shared/ui/sliderNew/ui/arrows/Arrow"
import {Dots} from "shared/ui/sliderNew/ui/dots/Dots"
import {useWindowDimension} from "shared"

interface SliderProps {
    className?: string
	images: string[]
	variant?: SliderVariants
	initialIndex?: number
}

export enum SliderVariants {
	DEFAULT = "default",
	CLEAR = "clear",
}

export const Slider: FC<SliderProps> = (props) => {
	const {className = "", images, variant = SliderVariants.DEFAULT, initialIndex = 0} = props

	const [index, setIndex] = useState(initialIndex)
	const [width, setWidth] = useState(0)

	const refLine = useRef(null)
	const refWrapper = useRef(null)

	const {width: windowWidth} = useWindowDimension()

	const setNewWidth = () => {
		const node = refWrapper.current! as HTMLDivElement

		setWidth(node.offsetWidth)
	}

	useEffect(() => {
		if (refWrapper && refWrapper.current) {
			setNewWidth()
			selectSlide(initialIndex)
		}
	}, [refWrapper, refWrapper.current])

	useEffect(() => {
		if (refWrapper && refWrapper.current) {
			setNewWidth()
		}
	}, [windowWidth])

	const selectSlide = (index: number) => {
		let newIndex = index

		if (newIndex === images.length) {
			newIndex = 0
			setIndex(newIndex)
		}
		if (newIndex < 0) {
			newIndex = images.length - 1
			setIndex(newIndex)
		}

		const newOffset = width * newIndex

		const node = refLine.current! as HTMLDivElement

		setIndex(newIndex)
		node.style.transform = `translateX(-${newOffset}px)`
	}

	const onRight = () => {
		const newIndex = index + 1
		selectSlide(newIndex)
	}

	const onLeft = () => {
		const newIndex = index - 1
		selectSlide(newIndex)
	}

	return (
		<div className={classNames([s.slider, s[variant], className])}>
			<Arrow className={s.left} onClick={onLeft} left={true}/>
			<div ref={refWrapper} className = {s.wrapper}>
				<div ref={refLine} className={s.line}>
					{images.map((src, index) =>
						<div style={{width: `${width}px`}} key={index} className={s.item}>
							<img className={s.image} src={src}/>
							<img className={s.background} src={src} key={index}/>
						</div>
					)}
				</div>
			</div>
			<Arrow className={s.right} onClick={onRight} left={false}/>
			<Dots onClick={selectSlide} className={s.dots} count={images} active={index}/>
		</div>
	)
}
