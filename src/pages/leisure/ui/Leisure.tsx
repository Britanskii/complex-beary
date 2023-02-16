import s from "./leisure.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"

import snow from "../assets/snow.jpg"
import church from "../assets/church.png"
import fishing from "../assets/fishing.jpg"

interface LeisureProps {
    className?: string
}

interface Leisure {
	title: string,
	description: string,
	image: string
}

const data: Leisure[] = [
	{
		title: "Рыбалка на Онежском \n" +
			"озере, а также \n" +
			"на многочисленных лесных реках и озерах",
		description: "Отличное место для отдыха. В Онежских водах и близлежащих лесных озерах водится приличное количество рыбы, \n" +
			"в здешних местах удачливому рыбаку \n" +
			"или охотнику не придется скучать. Всем необходимым для промысла Вы также сможете снабдиться прямо у нас.",
		image: fishing
	},
	{
		title: "Активный отдых",
		description: "Квадрациклы, велосипеды, лодки, катера, скутера, снегоходы, лыжи беговые \n" +
			"и горные, коньки, санки, катание \n" +
			"на санях, ватрушки, пешие прогулки, пикники, сбор ягод, грибов, детский городок, пляж и многое другое.\n" +
			"В 5 киломметрах расположен горнолыжный комплекс: 4 склона от 250 \n" +
			"до 420 метров.Ресторан \"Медвежка\" \n" +
			"из сухостойной сосны ручной работы (Единственный на северо-западе), на 120 мест. Русские бани, сауна с шуньгитовым бассейном. (шуньгит - целебный минерал из Карелии)",
		image: snow
	},
	{
		title: "Экскурсионные программы",
		description: "Хотите узнать наш край получше? \n" +
			"К вашим услугам полный спектр экскурсий по культурным, историческим и природным достоприметчательностям Карелии. \n" +
			"Музей-заповедник «КИЖИ», Водопад «КИВАЧ», Соловецкие острова находятся \n" +
			"на самом близком расстоянии от «Малой Медвежки» и Вы сможете все их посетить \n" +
			"во время отдыха.",
		image: church
	}
]

export const Leisure: FC<LeisureProps> = (props) => {
	const {className = ""} = props

	return (
		<Wrapper className = {classNames([s.leisure, className])}>
			<h2 className={s.title}>Отдых и развлечения</h2>
			<div className={s.flex}>
				{data.map(({title, description, image}, index) =>
					<div className={s.item} key={index}>
						<img className={s.image} src={image}/>
						<div className={s.text}>
							<div className={s.subtitle}>
								{title}
							</div>
							<div className={s.description}>
								{description}
							</div>
						</div>
					</div>
				)}
			</div>
		</Wrapper>
	)
}
