import s from "./main.module.sass"

import {FC, useCallback, useState} from "react"

import {classNames, ImageBackground} from "shared"
import back from "../assets/back.webp"
import backWinter from "../assets/back-winter.webp"

import winter from "../assets/icons/winter.svg"
import summer from "../assets/icons/summer.svg"

import {MainHeader} from "entities"

interface MainProps {
    className?: string
}

const images = [back, backWinter]

const left = {text: "Зима", img: winter}
const right = {text: "Лето", img: summer}

export const Main: FC<MainProps> = (props) => {
	const {className = ""} = props

	const [active, setActive] = useState(0)

	const toggleTheme = useCallback(() => {
		if (active + 1 < images.length) {
			setActive(image => image += 1)
		} else {
			setActive(0)
		}
	}, [active])

	return (
		<div className = {classNames(s.main, {}, [className])}>
			<MainHeader left={left} right={right} toggleTheme={toggleTheme}/>
			<ImageBackground className={s.background} active={active} images={images}/>
			<div className={s.title}>
				Гостевой комплекс Карелия Медвежка — это одно из лучших мест для семейного отдыха.
			</div>
			<div className={s.subtitle}>
				Широкий номерной фонд позволит выбрать подходящий вариант как для большой компании, так и уютный коттедж для семейной пары с детьми.
			</div>
			<div className={s.filter}/>
		</div>
	)
}
