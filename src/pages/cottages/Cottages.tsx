import s from "./cottages.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Main, Menu} from "widgets"

interface CottagesProps {
    className?: string
}

export const Cottages: FC<CottagesProps> = (props) => {

	const {className = ""} = props

	return (
		<div className = {classNames([s.cottages, className])}>
			<Menu/>
			<Main/>
		</div>
	)
}
