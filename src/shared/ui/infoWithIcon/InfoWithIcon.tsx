import s from "./infoWithIcon.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"

export enum IconType {
	DARK = "DARK",
	LIGHT = "LIGHT"
}

interface InfoWithIconProps {
	className?: string
	type?: IconType
	icon: string,
	text: string[]
}

export const InfoWithIcon: FC<InfoWithIconProps> = (props) => {
	const {className = "", icon, text, type = IconType.LIGHT} = props

	return (
		<div className={classNames(s.infoWithIcon, {}, [s[type], className])}>
			<img className={s.icon} src={icon}/>
			{text.map((line) =>
				<>{line} <br/></>
			)}
		</div>
	)
}
