import s from "./main.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Footer, HeaderTop} from "entities"
import {HeaderType} from "entities/headerTop/HeaderTop"
import {Policy} from "pages"

interface MainProps {
    className?: string
}

export const Main: FC<MainProps> = (props) => {
	const {className = ""} = props

	return (
		<>
			<div className = {classNames([s.main, className])}>
				<HeaderTop type={HeaderType.DARK}/>
				<div className={s.filter}/>
				{/*<Policy/>*/}
				<div className={s.breadcrumps}>Главная / коттеджи /апартаменты</div>
			</div>
			<Footer/>
		</>
	)
}
