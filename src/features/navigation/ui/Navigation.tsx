import s from "./navigation.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {IconType, useNavigation} from "shared"

interface NavigationProps {
    className?: string
	type?: IconType
}

export const Navigation: FC<NavigationProps> = (props) => {
	const {className = "", type=IconType.LIGHT} = props

	const {onOpen} = useNavigation()

	return (
		<div onClick={onOpen} className = {classNames([s.navigation, s[type], className])}>
			<div className={s.line}/>
			<div className={s.line}/>
			<div className={s.line}/>
		</div>
	)
}
