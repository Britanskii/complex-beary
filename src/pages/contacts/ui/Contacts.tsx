import s from "./contacts.module.sass"

import {FC, useEffect, useRef} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Socials} from "entities"
import {Wrapper} from "widgets"

interface ContactsProps {
    className?: string
}

const come = [
	{
		title: "Из Москвы",
		description: "АВТОМОБИЛЕМ: по трассе Москва – Санкт-Петербург – Мурманск (1250 км) до г. Медвежьегорск, от трассы М18 сворачиваете \n" +
			"в Медвежьегорск, проезжаете весь город по главной дороге в направлении Пудожа, после заправки ТНК 500м и направо к озеру \n" +
			"по асфальту ИЛИ через Ярославль-Вологда-Пудож-Медвежьегорск (1050км).\n" +
			"Ж/Д сообщение: любой мурманский поезд с Ленинградского вокзала до ст. Медвежья Гора, затем такси (10 мин) до Малой Медвежки"
	},
	{
		title: "Из Санкт-Петербурга",
		description: "АВТОМОБИЛЕМ: по трассе М18, Санкт-Петербург – Мурманск (560 км) до г. Медвежьегорск, от трассы М18 сворачиваете \n" +
			"в Медвежьегорск, проезжаете весь город по главной дороге в направлении Пудожа, после заправки ТНК 500м и направо к озеру \n" +
			"по асфальту.\n" +
			"Ж/Д сообщение: любой мурманский поезд с Ладожского вокзала до ст. Медвежья Гора, затем такси (10 мин) до Малой Медвежки"
	},
	{
		title: "Из Мурманска",
		description: "АВТОМОБИЛЕМ: по трассе М18 Мурманск – Санкт-Петербург (780 км) до г. Медвежьегорск, от трассы М18 сворачиваете \n" +
			"в Медвежьегорск, проезжаете весь город по главной дороге в направлении Пудожа, после заправки ТНК 500м и направо к озеру \n" +
			"по асфальту.\n" +
			"Ж/Д сообщение: любой поезд с ж/д вокзала до ст. Медвежья Гора, затем такси(10мин) до Малой Медвежки"
	},
	{
		title: "От аэропорта \"Бесовец\" г.Петрозаводск 2 часа на такси ",
		description: ""
	}
]

export const Contacts: FC<ContactsProps> = (props) => {
	const {className = ""} = props
	const refInfo = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (refInfo && refInfo.current) {
			const script = document.createElement("script")
			const div = document.createElement("div")
			div.className = s.map

			script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0cae2a4d10872e798b3d46f15db43ec5b32c0e40b8a3f99e7ec145af6ddd704c&amp;lang=ru_RU&amp;scroll=true&amp;"
			script.async = true

			div.appendChild(script)
			refInfo.current.appendChild(div)
			return () => {
				if (refInfo && refInfo.current) {
					refInfo.current.removeChild(div)
				}
			}
		}
	}, [refInfo, refInfo.current])

	return (
		<Wrapper className = {classNames([s.contacts, className])}>
			<h2 className={s.title}>Наши контакты:</h2>
			<div ref={refInfo} className={s.flex}>
				<div className={s.info}>
					<h3 className={s.name}>Гостевой комплекс Карелия Медвежка</h3>
					<div className={s.links}>
						+7 (921) 220 20 13 <br/>
						8 (800) 201 29 03 (бесплатный звонок) <br/>
						Email: 9212202013@mail.ru <br/>
						Республика Карелия, г.Медвежьегорск, ул.Чкалова, д.30 <br/>
						Координаты GPS: N 62.914483, E 34.509928
					</div>
					<Socials/>
				</div>
			</div>
			<h2 className={s.title}>Как добраться:</h2>
			<div>
				{come.map(({title, description}, index) =>
					<div className={s.path} key={index}>
						<div className={s.subtitle}>{title}</div>
						<div className={s.description}>{description}</div>
					</div>
				)}
			</div>
		</Wrapper>
	)
}
