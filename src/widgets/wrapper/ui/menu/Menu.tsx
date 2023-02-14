import s from "./menu.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

import logo from "shared/assets/logo.webp"
import close from "shared/assets/icons/close.svg"
import {Address, Number, Socials} from "entities"
import {Button, IconType, useNavigation} from "shared"
import {Link} from "react-router-dom"

interface MenuProps {
    className?: string
}

export const Menu: FC<MenuProps> = (props) => {
	const {open, onClose} = useNavigation()

	const {className = ""} = props

	return (
		<div className = {classNames([s.menu, className], {[s.open]: open})}>
			<div className={s.links}>
				<a href="/Users/ohink/IdeaProjects/complex-beary/src/pages">
					<img className={s.logo} src={logo}/>
				</a>
				<ul className={s.column}>
					<li className={s.row}>Размещение</li>
					<li onClick={onClose} className={s.row}><Link to={"/cottages"}>Коттеджи</Link></li>
					<li onClick={onClose} className={s.row}><Link to={"/apartments"}>Апартаменты</Link></li>
				</ul>
				<ul className={s.column}>
					<li className={s.row}>Досуг</li>
				</ul>
				<ul className={s.column}>
					<li className={s.row}>Акции</li>
				</ul>
				<ul className={s.column}>
					<li className={s.row}>Вопрос/ответ</li>
				</ul>
				<ul className={s.column}>
					<li className={s.row}>Контакты</li>
					<li className={s.row}>Карта</li>
					<li className={s.row}>Как добраться</li>
				</ul>
				<img onClick={onClose} src={close} className={s.close}/>
			</div>
			<span className={s.line}/>
			<div className={s.info}>
				<Socials/>
				<Address type={IconType.DARK}/>
				<Number type={IconType.DARK}/>
				<Button text={"Бронировать"} />
			</div>
		</div>
	)
}
