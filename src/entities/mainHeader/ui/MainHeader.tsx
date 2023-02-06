import s from "./mainHeader.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

import logo from "../assets/logo.webp"
import {Switcher} from "shared/ui/switcher/Switcher"
import {Navigation} from "widgets"

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
				<div className={s.text}>
					<img className={s.icon} src="" alt=""/>
					Карелия Медвежка, <br/>
					186350, респ. Карелия,  <br/>
					г.Медвежьегорск, ул. Чкалова, д. 30  <br/>
				</div>
				<div className={s.text}>
					<img className={s.icon} src="" alt=""/>
					+7 (921) 220-20-13 <br/>
					8 (800) 201-29-03 (бесплатно) <br/>
				</div>
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
