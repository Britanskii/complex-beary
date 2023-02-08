import s from "./button.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface ButtonProps{
    className?: string
	text?: string
}

export const Button: FC<ButtonProps> = (props) => {
	const {className = "", text="Button"} = props

	return (
		<button type={"button"} className = {classNames([s.button, className])}>
			{text}
		</button>
	)
}
