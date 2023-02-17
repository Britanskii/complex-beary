import s from "./button.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface ButtonProps{
    className?: string
	text?: string
}

export const ButtonTL: FC<ButtonProps> = (props) => {
	const {className = "", text="Button"} = props

	return (
		<a className = {classNames([s.button, className])} href="#" data-tl-booking-open="true">
			{text}
		</a>
	)
}
