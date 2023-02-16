import s from "./promotions.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"
import arrow from "../assets/icons/arrow.svg"
import qr from "../assets/icons/qr.svg"
import market from "../assets/icons/market.svg"
import store from "../assets/icons/store.svg"

interface PromotionsProps {
	className?: string
}

export const Promotions: FC<PromotionsProps> = (props) => {
	const {className = ""} = props

	return (
		<Wrapper className={classNames([s.promotions, className])}>
			<h2 className={s.title}>Акции</h2>
			<div className={s.lists}>
				<ul className={s.free}>
					<li className={s.subtitle}>Отдыхай у нас <span className={s.uppercase}>БЕСПЛАТНО</span></li>
					<li className={s.item}><img className={s.arrow} src={arrow}/>Платим за покупки друзей</li>
					<li className={s.item}><img className={s.arrow} src={arrow}/>Дарим 500 рублей при первом посещении</li>
					<li className={s.item}><img className={s.arrow} src={arrow}/>Возвращаем 10% на ваш счёт</li>
				</ul>
				<ul className={s.card}>
					<li className={s.subtitle}>
						Как получить клубную карту?
					</li>
					<li className={s.item}>
						<span className={s.round}>
						1
						</span>
						<div className={s.text}>
							Установи приложение UDS в <img className={s.icon} src={store} alt="App Store"/> App Store
							или  <img className={s.icon} src={market} alt="Play Market"/> PlayMarket
						</div>
					</li>
					<li className={s.item}>
						<span className={s.round}>
						2
						</span>
						Зарегистрируйся
					</li>
					<li className={s.item}>
						<span className={s.round}>
					3
						</span>
						<div>
							Отсканируй <img className={s.icon} src={qr} alt="QR"/> код или введи вручную
						</div>
					</li>
					<li className={s.item}>
						<span className={s.round}>
						4
						</span>
						Рекомендуй нас друзьям, копи баллы с их чека, оплачивай ими свой
					</li>
				</ul>
			</div>
		</Wrapper>
	)
}
