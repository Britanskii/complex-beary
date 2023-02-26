import s from "./arrow.module.sass"

import {FC} from "react"

import arrow from "../../../../../entities/apartment/ui/resources/arrow.svg"

interface ArrowProps {
	left: boolean
    className?: string
	onClick?: () => void
}

export const Arrow: FC<ArrowProps> = (props) => {
	const {className = "", onClick, left} = props

	return (
		<div className={`${s.arrow} ${left ? s.left : s.right} ${className}`}
			onClick={onClick}>
			<img src={arrow} className={s.icon}/>
		</div>
	)
}
