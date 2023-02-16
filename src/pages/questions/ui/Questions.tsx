import s from "./questions.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"
import {Dropdown} from "pages/questions/ui/dropdown/Dropdown"

interface QuestionsProps {
    className?: string
}

const questions = [
	{
		title: "На какое кол-во гостей рассчитан дом?",
		description: "Наш комплекс рассчитан на отдых от 3 и более гостей."
	},
	{
		title: "Можно ли перенести дату брони?",
		description: "Перенести даты заезда возможно бесплатно за 14 дней."
	},
	{
		title: "Можно ли приехать с домашними животными?",
		description: "Да, по предварительному запросу. Ограничения действуют по весу домашних питомцев."
	},
	{
		title: "Лучше время посещения вашего комплекса?",
		description: "Мы работаем круглый год.\n" +
			"Летом Вы сможете покупаться и по загорать в Онежском озере, покататься на  катере, поиграть в большой теннис, квадроциклах или велосипедах, сходить на рыбалку или охоту.\n" +
			"Осень прекрасна лесными дарами, которые можно собирать прямо у коттеджей.\n" +
			"Зимой доступны беговые лыжи, коньки работает каток на территории (по погодным условия), горнолыжная трасса \n" +
			"в 7 км от нас, зимняя охота и рыбалка, снегоходы и экскурсии.\n" +
			"У нас всегда есть чем заняться!"
	},
	{
		title: "Что есть в коттедже?",
		description: "Каждый коттедж оборудован всем необходимым, для комфортного проживания."
	},
	{
		title: "Далеко ли до озера? ",
		description: "Наш комплекс находится на берегу Онежского озеро в сосновом бору."
	},
	{
		title: "Что есть на территории?",
		description: "Есть две русские бани, теннисный корт для большого тенниса,  пункт проката, тропа здоровья, которая расположена вдоль берега."
	},
	{
		title: "Во сколько заезд и выезд?",
		description: "Заезд в 14:00, выезд в 12:00"
	},
]

export const Questions: FC<QuestionsProps> = (props) => {
	const {className = ""} = props

	return (
		<Wrapper className = {classNames([s.questions, className])}>
			<h2 className={s.title}>Часто задаваемые вопросы</h2>
			<div className={s.list}>
				{questions.map(({title, description}, index) =>
					<Dropdown key={index} title={title} description={description}/>
				)}
			</div>
		</Wrapper>
	)
}
