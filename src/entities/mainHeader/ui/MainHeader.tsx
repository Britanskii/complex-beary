import s from "./mainHeader.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

import logo from "../../../shared/assets/logo.webp"
import {Switcher} from "shared/ui/switcher/Switcher"
import {Navigation} from "widgets"
import {Address, Number} from "entities"

interface MainHeaderProps {
    className?: string
	toggleTheme: () => void
	left: { text: string, img: string }
	right: { text: string, img: string }
}

export const MainHeader: FC<MainHeaderProps> = (props) => {
	const {className = "", toggleTheme, left, right} = props

	return (
		<div className = {classNames(s.mainHeader, {}, [className])}>
			<div className={s.flex}>
				<img className={s.logo} src={logo} alt="logo"/>
				<Address />
				<Number/>
				<Navigation/>
			</div>
			<div className={s.flex}>
				<Switcher onClick={toggleTheme} left={left} right={right}/>
				<span className={s.money}>
					от <span className={s.important}>5000</span> <br/>
					руб  за ночь
				</span>
			</div>
		</div>
	)
}
