import s from "./wrapper.module.sass"

import {FC, ReactNode} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Footer, HeaderTop} from "entities"
import {HeaderType} from "entities/headerTop/HeaderTop"
import {Menu} from "./menu/Menu"
import {NavLink, useLocation} from "react-router-dom"

interface MainProps {
    className?: string
	children: ReactNode
}

export const Wrapper: FC<MainProps> = (props) => {
	const {className = "", children} = props

	const activeClass = (link: { isActive: boolean }) => {
		return link.isActive ? s.active : ""
	}

	const location = useLocation()

	const isPromotions = location.pathname.includes("promotions")
	const isLeisure = location.pathname.includes("leisure")

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
					{isPromotions &&
                        <>
                            /<NavLink className={!isLeisure ? activeClass : ""} to={"/promotions"}>акции</NavLink>
                        </>
					}
					{
						isLeisure &&
						<>
                            /<NavLink className={activeClass} to={"/promotions/leisure"}>досуг</NavLink>
						</>
					}
				</div>
				<main className={className}>
					{children}
				</main>
			</div>
			<Footer/>
		</>
	)
}
