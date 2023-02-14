import s from "./cottagesList.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"
import {Apartment} from "entities/apartment/ui/Apartment"

interface CottagesProps {
	title: string
    className?: string
}

export const CottagesList: FC<CottagesProps> = (props) => {
	const {className = "", title = ""} = props

	return (
		<Wrapper className = {classNames([s.cottagesList, className])}>
			<div className={s.title}>{title}</div>
			<div className={s.list}>
				<Apartment/>
				<Apartment/>
				<Apartment/>
				<Apartment/>
			</div>
		</Wrapper>
	)
}
