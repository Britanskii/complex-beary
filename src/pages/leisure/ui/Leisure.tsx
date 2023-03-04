import s from "./leisure.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"

import snow1 from "../assets/snow/1.webp"
import snow2 from "../assets/snow/2.webp"
import snow3 from "../assets/snow/3.webp"
import snow4 from "../assets/snow/4.webp"
import snow5 from "../assets/snow/5.webp"

import excursion1 from "../assets/excursions/1.png"
import excursion2 from "../assets/excursions/2.jpeg"
import excursion3 from "../assets/excursions/3.jpg"
import excursion4 from "../assets/excursions/4.jpg"
import excursion5 from "../assets/excursions/5.jpg"

import fishing1 from "../assets/fishing/1.webp"
import fishing2 from "../assets/fishing/2.webp"
import fishing3 from "../assets/fishing/3.webp"
import fishing4 from "../assets/fishing/4.webp"
import fishing5 from "../assets/fishing/5.webp"
import {Slider, SliderVariants} from "shared/ui/sliderNew/ui/Slider"

interface LeisureProps {
    className?: string
}

interface Leisure {
	title: string,
	description: string,
	images: string[]
}

const data: Leisure[] = [
	{
		title: "Рыбалка на Онежском \n" +
			"озере, а также \n" +
			"на многочисленных лесных реках и озерах",
		description: "Отличное место для отдыха. В Онежских водах и близлежащих лесных озерах водится приличное количество рыбы, \n" +
			"в здешних местах удачливому рыбаку \n" +
			"или охотнику не придется скучать. Всем необходимым для промысла Вы также сможете снабдиться прямо у нас.",
		images: [fishing1, fishing2, fishing3, fishing4, fishing5]
	},
	{
		title: "Активный отдых",
		description: "Квадрациклы, велосипеды, лодки, катера, скутера, снегоходы, лыжи беговые \n" +
			"и горные, коньки, санки, катание \n" +
			"на санях, ватрушки, пешие прогулки, пикники, сбор ягод, грибов, детский городок, пляж и многое другое.\n" +
			"В 5 киломметрах расположен горнолыжный комплекс: 4 склона от 250 \n" +
			"до 420 метров.Ресторан \"Медвежка\" \n" +
			"из сухостойной сосны ручной работы (Единственный на северо-западе), на 120 мест. Русские бани, сауна с шуньгитовым бассейном. (шуньгит - целебный минерал из Карелии)",
		images: [snow1, snow2, snow3, snow4, snow5]
	},
	{
		title: "Экскурсионные программы",
		description: "Хотите узнать наш край получше? \n" +
			"К вашим услугам полный спектр экскурсий по культурным, историческим и природным достоприметчательностям Карелии. \n" +
			"Музей-заповедник «КИЖИ», Водопад «КИВАЧ», Соловецкие острова находятся \n" +
			"на самом близком расстоянии от «Малой Медвежки» и Вы сможете все их посетить \n" +
			"во время отдыха.",
		images: [excursion1, excursion2, excursion3, excursion4, excursion5]
	}
]

export const Leisure: FC<LeisureProps> = (props) => {
	const {className = ""} = props

	return (
		<Wrapper className = {classNames([s.leisure, className])}>
			<h2 className={s.title}>Отдых и развлечения</h2>
			<div className={s.flex}>
				{data.map(({title, description, images}, index) =>
					<div className={s.item} key={index}>
						<Slider variant={SliderVariants.CLEAR} className={s.image} images={images}/>
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
