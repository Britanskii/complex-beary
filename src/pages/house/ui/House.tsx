import s from "./house.module.sass"

import {FC} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {Wrapper} from "widgets"

import close from "shared/assets/icons/close.svg"
import {Slider} from "shared/ui/slider/ui/Slider"
import {Button} from "shared"
import {ImagesList} from "pages/house/ui/imagesList/ImagesList"
import { useNavigate } from "react-router-dom"

import image from "resources/cottages/alesha/1.png"

interface HouseProps {
    className?: string
}

export const House: FC<HouseProps> = (props) => {
	const {className = ""} = props

	const navigate = useNavigate()

	const onBack = () => navigate(-1)

	return (
		<Wrapper className = {classNames([s.house, className])}>
			<div className={s.header}>
				<span onClick={onBack} className={s.back}>{"<-"} Назад</span>
				<div className={s.title}>Алёша Попович</div>
				<div className={s.close} onClick={onBack}>
					<img src={close}/>
				</div>
			</div>
			<div className={s.main}>
				<Slider settings={{dots: false}}/>
				<div className={s.info}>
                    Небольшой уютный, экологически чистый коттедж ручной работы из карельской сосны, в сосновом бору на берегу Онежского озера. Вместимость до 4-х человек.
                    В коттедже есть:
                    камин
                    гостиная совмещенная с кухней
                    все необходимое для приготовления пищи
                    холодильник
                    ЖК телевизор
                    душевая кабина
                    стиральная машина
                    балкон-терраса
                    До озера 120 м.
					<Button className={s.book} text={"Бронировать"}/>
				</div>
			</div>
			<ImagesList className={s.list} images={[image,image,image,image,image,image,image,image,image,image,image,image,image,image,]}/>
			<div className={s.excursion}>
				<div className={s.subtitle}>Видеоэкскурсия по коттеджу</div>
				<iframe className={s.video}  src="https://www.youtube.com/embed/wLYCgE-g-Ek"
				        title="React Query. Быстрый старт" frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				        allowFullScreen></iframe>
			</div>
		</Wrapper>
	)
}
