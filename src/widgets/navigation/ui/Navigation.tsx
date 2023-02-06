import s from "./navigation.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

interface NavigationProps {
    className?: string
}

export const Navigation: FC<NavigationProps> = (props) => {
	const {className = ""} = props

	return (
		<div className = {classNames(s.navigation, {}, [className])}>
			<div className={s.line}/>
			<div className={s.line}/>
			<div className={s.line}/>
		</div>
	)
}
