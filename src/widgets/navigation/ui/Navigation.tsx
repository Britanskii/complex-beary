import s from "./navigation.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {useNavigation} from "shared"

interface NavigationProps {
    className?: string
}

export const Navigation: FC<NavigationProps> = (props) => {
	const {className = ""} = props

	const {onOpen} = useNavigation()

	return (
		<div onClick={onOpen} className = {classNames(s.navigation, {}, [className])}>
			<div className={s.line}/>
			<div className={s.line}/>
			<div className={s.line}/>
		</div>
	)
}
