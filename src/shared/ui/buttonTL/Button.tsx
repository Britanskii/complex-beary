import s from "./button.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Button} from "shared"

interface ButtonProps{
    className?: string
	text?: string
	roomType: number
}

export const ButtonTL: FC<ButtonProps> = (props) => {
	const {className = "", text="Button", roomType} = props


	return (
		<a className = {classNames([s.button, className])} href="#" data-tl-booking-open="true" data-tl-room={roomType}>
			{text}
		</a>
	)
}
