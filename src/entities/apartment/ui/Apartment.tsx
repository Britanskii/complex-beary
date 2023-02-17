import s from "./apartment.module.sass"
import "./dots.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Button} from "shared"
import {Link} from "react-router-dom"
import {Slider} from "shared/ui/slider/ui/Slider"

export enum ApartmentType {
	APARTMENT = "apartments",
	COTTAGE = "cottages"
}

interface ApartmentProps {
	className?: string
	name: string,
	description: string,
	price: string,
	id: number,
	images: string[],
	type: ApartmentType,
	roomType: string
}

export const Apartment: FC<ApartmentProps> = (props) => {
	const {className = "", name, description, images, price, id, type, roomType } = props

	return (
		<div className={classNames([s.apartment, className])}>
			<Slider images={images}/>
			<div className={s.main}>
				<div className={s.title}>{name}</div>
				<div className={s.description}>
					{description}
					<Link to={`/${type}/${id}`} className={s.more}>
						Подробнее
						<div className={s.arrow}/>
					</Link>
					<div className={s.line}/>
				</div>
				<div className={s.bottom}>
					<div className={s.price}>От {price}р <br/> за ночь</div>
					<Link to={`/${type}/${id}`}>
						<Button text={"Бронировать"}/>
					</Link>
				</div>
			</div>
		</div>
	)
}
