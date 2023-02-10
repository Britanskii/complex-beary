import s from "./socials.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import youtube from "shared/assets/icons/youtube.svg"
import telegram from "shared/assets/icons/telegram.svg"
import vkontakte from "shared/assets/icons/vkontakte.svg"

interface SocialsProps {
    className?: string
}

export const Socials: FC<SocialsProps> = (props) => {
	const {className = ""} = props

	return (
		<div className = {classNames([s.socials, className])}>
			<a className={s.icon}  href="https://www.youtube.com/channel/UCO1kETIbHgYJsykWefRNe-g">
				<img src={youtube}/>
			</a>
			<a className={s.icon} href="https://t.me/karelia_medvezhka">
				<img src={telegram}/>
			</a>
			<a className={s.icon} href="https://vk.com/karelia_medvezhka">
				<img src={vkontakte}/>
			</a>
		</div>
	)
}
