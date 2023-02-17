import s from "./menu.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

import logo from "shared/assets/logo.webp"
import close from "shared/assets/icons/close.svg"
import {Address, Number, Socials} from "entities"
import {Button, IconType, useNavigation} from "shared"
import {Link} from "react-router-dom"
import {ButtonTL} from "shared/ui/buttonTL/Button";

interface MenuProps {
    className?: string
}

export const Menu: FC<MenuProps> = (props) => {
	const {open, onClose} = useNavigation()

	const {className = ""} = props

	return (
		<div className = {classNames([s.menu, className], {[s.open]: open})}>
			<div className={s.links}>
				<Link to={"/"}>
					<img className={s.logo} src={logo}/>
				</Link>
				<ul className={s.column}>
					<li className={s.row}>Размещение</li>
					<li onClick={onClose} className={s.row}><Link to={"/cottages"}>Коттеджи</Link></li>
					<li onClick={onClose} className={s.row}><Link to={"/apartments"}>Апартаменты</Link></li>
				</ul>
				<ul className={s.column}>
					<li onClick={onClose} className={s.row}><Link to={"/promotions/leisure"}>Досуг</Link></li>
				</ul>
				<ul className={s.column}>
					<li onClick={onClose} className={s.row}><Link to={"/promotions"}>Акции</Link></li>
				</ul>
				<ul className={s.column}>
					<li onClick={onClose} className={s.row}><Link to={"/promotions/leisure/questions"}>Вопрос/ответ</Link></li>
				</ul>
				<ul className={s.column}>
					<li onClick={onClose} className={s.row}><Link to={"/promotions/leisure/questions/contacts"}>Контакты</Link></li>
					<li onClick={onClose} className={s.row}><Link to={"/promotions/leisure/questions/contacts"}>Карта</Link></li>
					<li onClick={onClose} className={s.row}><Link to={"/promotions/leisure/questions/contacts"}>Как добраться</Link></li>
				</ul>
				<img onClick={onClose} src={close} className={s.close}/>
			</div>
			<span className={s.line}/>
			<div className={s.info}>
				<Socials/>
				<Address type={IconType.DARK}/>
				<Number type={IconType.DARK}/>
				<ButtonTL text={"Бронировать"} />
			</div>
		</div>
	)
}


