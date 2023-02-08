import s from "./mainHeader.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Switcher} from "shared/ui/switcher/Switcher"
import {HeaderTop} from "entities"
import {HeaderType} from "entities/headerTop/HeaderTop"

interface MainHeaderProps {
    className?: string
	toggleTheme: () => void
	left: { text: string, img: string }
	right: { text: string, img: string }
}

export const MainHeader: FC<MainHeaderProps> = (props) => {
	const {className = "", toggleTheme, left, right} = props

	return (
		<div className = {classNames([s.mainHeader, className])}>
			<HeaderTop/>
			<div className={s.flex}>
				<Switcher onClick={toggleTheme} left={left} right={right}/>
				<span className={s.money}>
					от <span className={s.important}>5000</span> <br/>
					руб  за ночь
				</span>
			</div>
		</div>
	)
}
