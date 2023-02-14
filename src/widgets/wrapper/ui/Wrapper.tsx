import s from "./wrapper.module.sass"

import {FC, ReactNode} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Footer, HeaderTop} from "entities"
import {HeaderType} from "entities/headerTop/HeaderTop"
import {Menu} from "./menu/Menu"
import { NavLink } from "react-router-dom"

interface MainProps {
    className?: string
	children: ReactNode
}

export const Wrapper: FC<MainProps> = (props) => {
	const {className = "", children} = props

	const activeClass = (link: { isActive: boolean }) => {
		return link.isActive ? s.active : ""
	}

	return (
		<>
			<Menu/>
			<div className = {classNames([s.wrapper])}>
				<HeaderTop type={HeaderType.DARK}/>
				<div className={s.filter}/>
				<div className={s.breadcrumps}>
					<NavLink to={"/"}>Главная</NavLink> /
					<NavLink className={activeClass} to={"/cottages"}>коттеджи</NavLink> /
					<NavLink className={activeClass} to={"/apartments"}>апартаменты</NavLink>
				</div>
				<main className={className}>
					{children}
				</main>
			</div>
			<Footer/>
		</>
	)
}
