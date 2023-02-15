import s from "./apartment.module.sass"
import "./dots.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Button} from "shared"
import {Link} from "react-router-dom"
import {Slider} from "shared/ui/slider/ui/Slider"

interface ApartmentProps {
	className?: string
}

export const Apartment: FC<ApartmentProps> = (props) => {
	const {className = ""} = props

	return (
		<div className={classNames([s.apartment, className])}>
			<Slider/>
			<div className={s.main}>
				<div className={s.title}>Алёша Попович</div>
				<div className={s.description}>
					Вместимость до 4-х человек.
					Камин, гостиная совмещенная
					с кухней со всем необходимым для приготовления пищи, холодильник, балкон-терраса.
					ЖК телевизор, душевая кабина, стиральная машина.
					До озера 120 м.
					<Link to={"/1"} className={s.more}>
						Подробнее
						<div className={s.arrow}/>
					</Link>
					<div className={s.line}/>
				</div>
				<div className={s.bottom}>
					<div className={s.price}>От 5000р <br/> за ночь</div>
					<Link to={"/1"}>
						<Button text={"Бронировать"}/>
					</Link>
				</div>
			</div>
		</div>
	)
}
