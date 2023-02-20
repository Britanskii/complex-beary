import s from "./button.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface ButtonProps{
    className?: string
	text?: string
	onClick?: () => void
}

export const Button: FC<ButtonProps> = (props) => {
	const {className = "", text="Button", onClick} = props

	return (
		<button onClick={onClick} type={"button"} className = {classNames([s.button, className])}>
			{text}
		</button>
	)
}
