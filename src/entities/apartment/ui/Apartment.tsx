import s from "./apartment.module.sass"
import "./dots.sass"

import {FC, useRef} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Button} from "shared"
import {Link} from "react-router-dom"
import Slider from "react-slick"
import {Arrow} from "entities/apartment/ui/arrows/Arrow"

import image from "resources/cottages/alesha/1.png"

interface ApartmentProps {
	className?: string
}

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
}

export const Apartment: FC<ApartmentProps> = (props) => {
	const {className = ""} = props

	const refSlider = useRef(null)

	const onNextRight = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		refSlider.current.slickPrev()
	}

	const onNextLeft = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		refSlider.current.slickNext()
	}

	return (
		<div className={classNames([s.apartment, className])}>
			<div className={s.wrapper}>
				<Arrow onClick={onNextRight} left={true}/>
				<Slider ref={refSlider} className={s.slider} {...settings}>
					<img src={image} alt=""/>
					<img src={image} alt=""/>
					<img src={image} alt=""/>
				</Slider>
				<Arrow onClick={onNextLeft} left={false}/>
			</div>
			<div className={s.main}>
				<div className={s.title}>Алёша Попович</div>
				<div className={s.description}>
					Вместимость до 4-х человек.
					Камин, гостиная совмещенная
					с кухней со всем необходимым для приготовления пищи, холодильник, балкон-терраса.
					ЖК телевизор, душевая кабина, стиральная машина.
					До озера 120 м.
					<div className={s.more}>
						Подробнее
						<div className={s.arrow}/>
					</div>
					<div className={s.line}/>
				</div>
				<div className={s.bottom}>
					<div className={s.price}>От 5000р <br/> за ночь</div>
					<Link to={"/1"}>
						<Button text={"Бронировать"}/>
					</Link>
				</div>
			</div>
		</div>
	)
}
