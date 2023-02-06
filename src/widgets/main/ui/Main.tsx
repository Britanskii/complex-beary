import s from "./main.module.sass"

import {FC, useState} from "react"

import {classNames, ImageBackground} from "shared"
import back from "./assets/back.webp"
import backWinter from "./assets/back-winter.webp"

import winter from "./assets/icons/winter.svg"
import summer from "./assets/icons/summer.svg"

import {Switcher} from "shared/ui/switcher/Switcher"

interface MainProps {
    className?: string
}

const images = [back, backWinter]

const left = {text: "Зима", img: winter}
const right = {text: "Лето", img: summer}

export const Main: FC<MainProps> = (props) => {
	const {className = ""} = props

	const [image, setImage] = useState(0)

	const toggleTheme = () => {
		if (image + 1 < images.length) {
			setImage(image => image += 1)
		} else {
			setImage(0)
		}
	}

	return (
		<div className = {classNames(s.main, {}, [className])}>
			<ImageBackground className={s.background} active={image} images={images}/>
			<Switcher onClick={toggleTheme} left={left} right={right}/>
		</div>
	)
}
