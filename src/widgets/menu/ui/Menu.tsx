import s from "./menu.module.sass"

import {FC, useState} from "react"

import {classNames} from "shared/lib/classNames/classNames"

import telegram from "shared/assets/icons/telegram.svg"
import youtube from "shared/assets/icons/youtube.svg"
import vkontakte from "shared/assets/icons/vkontakte.svg"
import logo from "shared/assets/logo.webp"
import close from "shared/assets/icons/close.svg"
import {Address, Number} from "entities"
import {Button, IconType, useNavigation} from "shared"

interface MenuProps {
    className?: string
}

export const Menu: FC<MenuProps> = (props) => {
	const {open, onClose} = useNavigation()

	const {className = ""} = props

	return (
		<div className = {classNames([s.menu, className], {[s.open]: open})}>
			<div className={s.links}>
				<a href="/">
					<img className={s.logo} src={logo}/>
				</a>
				<ul className={s.column}>
					<li className={s.row}>Размещение</li>
					<li className={s.row}>Коттеджи</li>
					<li className={s.row}>Апартаменты</li>
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
				<div className={s.social}>
					<a className={s.icon}  href="https://www.youtube.com/channel/UCO1kETIbHgYJsykWefRNe-g">
						<img src={youtube}/>
					</a>
					<a className={s.icon} href="https://t.me/karelia_medvezhka">
						<img src={telegram}/>
					</a>
					<a className={s.icon} href="https://vk.com/karelia_medvezhka">
						<img src={vkontakte}/>
					</a>
				</div>
				<Address type={IconType.DARK}/>
				<Number type={IconType.DARK}/>
				<Button text={"Бронировать"} />
			</div>
		</div>
	)
}
