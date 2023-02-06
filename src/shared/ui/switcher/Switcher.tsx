import s from "./switcher.module.sass"

import {FC, useState} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface SwitcherProps {
    className?: string
	left: { text: string, img: string }
	right: { text: string, img: string }
	onClick?: () => void
}

export const Switcher: FC<SwitcherProps> = (props) => {
	const [active, setActive] = useState(false)

	const {className = "", left, right, onClick} = props

	const onSwitch = () => {
		setActive(active => !active)
		if (onClick) {
			onClick()
		}
	}

	return (
		<div onClick={onSwitch} className = {classNames(s.switcher, {}, [className])}>
			<div className={classNames(s.point, {[s.point_active]: active}, [])}>
				{active
					? <img className={s.icon} src={left.img} alt=""/>
					: <img className={s.icon} src={right.img} alt=""/>
				}
			</div>
			<div className={classNames(s.text, {[s.text_hidden]: !active})}>{left.text}</div>
			<div className={classNames(s.text, {[s.text_hidden]: active})}>{right.text}</div>
		</div>
	)
}
