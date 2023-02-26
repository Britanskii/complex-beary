import s from "./footer.module.sass"

import logo from "../../shared/assets/logo.webp"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Socials} from "entities"
import {Link} from "react-router-dom"

interface FooterProps {
	className?: string
}

export const Footer: FC<FooterProps> = (props) => {
	const {className = ""} = props

	return (
		<div className={classNames([s.footer, className])}>
			<div className={s.top}>
				<Link className={s.logo} to={"/"}>
					<img className={s.logo} src={logo}/>
				</Link>
				<ul className={s.links}>
					<li className={s.item}>
						<Link className={s.link} to={"/policy"}>
							Политика конфиденциальности
						</Link>
					</li>
					<li className={s.item}>
						+7 (921) 220-20-13
					</li>
					<li className={s.item}>
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
