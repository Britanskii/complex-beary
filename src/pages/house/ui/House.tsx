import s from "./house.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"

import close from "shared/assets/icons/close.svg"
import {Slider, SliderVariants} from "shared/ui/slider/ui/Slider"
import {Button, House as IHouse} from "shared"
import {ImagesList} from "pages/house/ui/imagesList/ImagesList"
import { useNavigate, useParams} from "react-router-dom"

import {COTTAGES} from "shared"

interface HouseProps {
    className?: string
}

export const House: FC<HouseProps> = (props) => {
	const {className = ""} = props

	const params = useParams()

	const {name, images, video, description} = COTTAGES.find(({id}) => id === +params.id!) as IHouse

	const navigate = useNavigate()

	const onBack = () => navigate(-1)

	return (
		<Wrapper className = {classNames([s.house, className])}>
			<div className={s.header}>
				<span onClick={onBack} className={s.back}>{"←"} Назад</span>
				<div className={s.title}>{name}</div>
				<div className={s.close} onClick={onBack}>
					<img src={close}/>
				</div>
			</div>
			<div className={s.main}>
				<Slider images={images} variant={SliderVariants.CLEAR} settings={{dots: false}}/>
				<div className={s.info}>
					{description}
					<Button className={s.book} text={"Бронировать"}/>
				</div>
			</div>
			<ImagesList className={s.list} images={images}/>
			<div className={s.excursion}>
				<div className={s.subtitle}>Видеоэкскурсия по коттеджу</div>
				<iframe className={s.video}  src={video}
					title="Отдых в Карелии. Обзор коттеджа &quot;Алеша Попович&quot; гостевой комплекс Карелия Медвежка"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen/>
			</div>
		</Wrapper>
	)
}
