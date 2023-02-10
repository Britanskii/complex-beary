import s from "./footer.module.sass"

import logo from "../../shared/assets/logo.webp"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Socials} from "entities"

interface FooterProps {
	className?: string
}

export const Footer: FC<FooterProps> = (props) => {
	const {className = ""} = props

	return (
		<div className={classNames([s.footer, className])}>
			<div className={s.top}>
				<img className={s.logo} src={logo}/>
				<ul className={s.links}>
					<li className={s.link}>
						Политика конфиденциальности
					</li>
					<li  className={s.link}>
						+7 (921) 220-20-13
					</li>
					<li className={s.link}>
						8 (800) 201-29-03 (бесплатно)
					</li>
					<Socials/>
				</ul>
			</div>
			<div className={s.warning}>
				ВНИМАНИЕ! Все материалы сайта носят исключительно информационный характер и не являются публичной
				офертой. <br/>
				Все права защищены 2023 Карелия Медвежка ОГРНИП 308103923400022
			</div>
		</div>
	)
}
