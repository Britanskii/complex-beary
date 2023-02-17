import s from "./cottagesList.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"
import {Apartment, ApartmentType} from "entities/apartment/ui/Apartment"
import {House} from "shared"

interface CottagesProps {
	title: string
    className?: string
	list: House[]
	type: ApartmentType
}

export const CottagesList: FC<CottagesProps> = (props) => {
	const {className = "", title = "", list, type} = props

	let roomType;
	return (
		<Wrapper className = {classNames([s.cottagesList, className])}>
			<div className={s.title}>{title}</div>
			<div className={s.list}>
				{list.map(({name, id, description, images, price}) =>
					<Apartment type={type} key={id} price={price} name={name} id={id} description={description} roomType={roomType} images={images} />
				)}
			</div>
		</Wrapper>
	)
}
