import s from "./apartment.module.sass"
import "./dots.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Link} from "react-router-dom"
import {Slider} from "shared/ui/sliderNew/ui/Slider"
import {ButtonTL} from "shared/ui/buttonTL/Button"
import {Button} from "shared"


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
	roomType: string,
	lakeDistance: number,
	people: number
}

export const Apartment: FC<ApartmentProps> = (props) => {
	const {className = "", name, description, images, price, id, type, roomType, lakeDistance, people } = props

	const sliderImages = images.length > 10 ? images.slice(0, 10) : images

	return (
		<div className={classNames([s.apartment, className])}>
			<div className={`${s.title} ${s.title_mobile}`}>{name}</div>
			<Slider className={s.slider} images={sliderImages}/>
			<div className={s.main}>
				<div className={s.title}>{name}</div>
				<div className={s.description}>
					{description}
					<div>
						<div>
							До озера {lakeDistance} м.
						</div>
						<Link to={`/${type}/${id}`} className={s.more}>
							&#9660; Подробнее
							<div className={s.arrow}/>
						</Link>
					</div>
					<div className={s.line}/>
				</div>
				<div className={s.bottom}>
					<div className={s.price}>От {price}р <br/> за ночь</div>
					<ButtonTL text={"Бронировать"} roomType={+roomType}/>
				</div>
			</div>
			<div className={`${s.information} ${s.information_mobile}`}>
				<div className={s.text}>
					<span>До {people}-х человек</span>
					<span>До озера {lakeDistance} м.</span>
					<span>от {price}р. за ночь</span>
				</div>
				<div className={s.buttons}>
					<Link to={`/${type}/${id}`}>
						<Button text={"Подробнее"}/>
					</Link>
					<ButtonTL roomType={+roomType} text={"Бронировать"}/>
				</div>
			</div>
		</div>
	)
}
