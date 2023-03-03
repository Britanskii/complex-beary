import s from "./headerTop.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import logo from "shared/assets/logo.webp"
import logoWithout from "shared/assets/logo-without.webp"
import {Address, Number} from "entities"
import {Navigation} from "features/navigation/ui/Navigation"
import {IconType} from "shared"
import {Link} from "react-router-dom"

export const enum HeaderType {
	DARK = "DARK",
	LIGHT = "LIGHT"
}

interface HeaderTopProps {
	className?: string
	type?: HeaderType
}

export const HeaderTop: FC<HeaderTopProps> = (props) => {
	const {className = "", type = HeaderType.LIGHT} = props

	const isDark = type === "DARK" ? IconType.DARK : IconType.LIGHT

	return (
		<div className={classNames([s.headerTop, s[type],className])}>
			<Link to={"/cottages"}><img className={s.logo} src={type === "DARK" ? logoWithout : logo} alt="logo"/></Link>
			<Address type={isDark}/>
			<Number type={isDark}/>
			<Navigation type={isDark}/>
		</div>
	)
}
