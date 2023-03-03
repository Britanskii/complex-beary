import s from "./breadcrumps.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {NavLink, useLocation} from "react-router-dom"

interface BreadcrumpsProps {
    className?: string
}

export const Breadcrumps: FC<BreadcrumpsProps> = (props) => {
	const {className = ""} = props

	const activeClass = (link: { isActive: boolean }) => {
		return link.isActive ? s.active : ""
	}

	const location = useLocation()

	const isPromotions = location.pathname.includes("promotions")
	const isLeisure = location.pathname.includes("leisure")
	const isQuestions = location.pathname.includes("questions")
	const isContacts = location.pathname.includes("contacts")

	return (
		<div className = {classNames([s.breadcrumps, className])}>
			<NavLink className={activeClass} to={"/cottages"}>Коттеджи</NavLink> /
			<NavLink className={activeClass} to={"/apartments"}>апартаменты</NavLink>
			{isPromotions &&
                <>
                    /<NavLink className={!isLeisure  ? activeClass : ""} to={"/promotions"}>акции</NavLink>
                </>
			}
			{
				isLeisure &&
                <>
                    /<NavLink className={!isQuestions ? activeClass : ""} to={"/promotions/leisure"}>досуг</NavLink>
                </>
			}
			{
				isQuestions &&
                <>
                    /<NavLink className={!isContacts ? activeClass : ""} to={"/promotions/leisure/questions"}>вопрос-ответ</NavLink>
                </>
			}
			{
				isContacts &&
                <>
                    /<NavLink className={activeClass} to={"/promotions/leisure/questions/contacts"}>контакты</NavLink>
                </>
			}
		</div>
	)
}
