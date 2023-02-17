import aleha1 from "resources/cottages/alesha/1.jpg"
import aleha2 from "resources/cottages/alesha/2.jpg"
import aleha3 from "resources/cottages/alesha/3.jpg"
import aleha4 from "resources/cottages/alesha/4.jpg"
import aleha5 from "resources/cottages/alesha/5.jpg"
import aleha6 from "resources/cottages/alesha/6.jpg"
import aleha7 from "resources/cottages/alesha/7.jpg"
import aleha8 from "resources/cottages/alesha/8.jpg"
import aleha9 from "resources/cottages/alesha/9.jpg"
import aleha10 from "resources/cottages/alesha/10.jpg"

import berendey1 from "resources/cottages/berendey/1.jpg"
import berendey2 from "resources/cottages/berendey/2.jpg"
import berendey3 from "resources/cottages/berendey/3.jpg"
import berendey4 from "resources/cottages/berendey/4.jpg"
import berendey5 from "resources/cottages/berendey/5.jpg"
import berendey6 from "resources/cottages/berendey/6.jpg"
import berendey7 from "resources/cottages/berendey/7.jpg"
import berendey8 from "resources/cottages/berendey/8.jpg"
import berendey9 from "resources/cottages/berendey/9.jpg"
import berendey10 from "resources/cottages/berendey/10.jpg"
import berendey11 from "resources/cottages/berendey/11.jpg"
import berendey12 from "resources/cottages/berendey/12.jpg"
import berendey13 from "resources/cottages/berendey/13.jpg"
import berendey14 from "resources/cottages/berendey/14.jpg"
import berendey15 from "resources/cottages/berendey/15.jpg"
import berendey16 from "resources/cottages/berendey/16.jpg"
import berendey17 from "resources/cottages/berendey/17.jpg"
import berendey18 from "resources/cottages/berendey/18.jpg"
import berendey19 from "resources/cottages/berendey/19.jpg"

import gorinich1 from "resources/cottages/gorinich/1.jpg"
import gorinich2 from "resources/cottages/gorinich/2.jpg"
import gorinich3 from "resources/cottages/gorinich/3.jpg"
import gorinich4 from "resources/cottages/gorinich/4.jpg"
import gorinich5 from "resources/cottages/gorinich/5.jpg"
import gorinich6 from "resources/cottages/gorinich/6.jpg"
import gorinich7 from "resources/cottages/gorinich/7.jpg"
import gorinich8 from "resources/cottages/gorinich/8.jpg"
import gorinich9 from "resources/cottages/gorinich/9.jpg"
import gorinich10 from "resources/cottages/gorinich/10.jpg"
import gorinich11 from "resources/cottages/gorinich/11.jpg"
import gorinich12 from "resources/cottages/gorinich/12.jpg"
import gorinich13 from "resources/cottages/gorinich/13.jpg"
import gorinich14 from "resources/cottages/gorinich/14.jpg"
import {ApartmentType} from "entities/apartment/ui/Apartment"
import seasons1 from "resources/apartments/seasons/1.jpg"
import seasons2 from "resources/apartments/seasons/2.jpg"
import seasons3 from "resources/apartments/seasons/3.jpg"
import seasons4 from "resources/apartments/seasons/4.jpg"
import seasons5 from "resources/apartments/seasons/5.jpg"
import seasons6 from "resources/apartments/seasons/6.jpg"
import seasons7 from "resources/apartments/seasons/7.jpg"
import seasons8 from "resources/apartments/seasons/8.jpg"
import seasons9 from "resources/apartments/seasons/9.jpg"
import frozen1 from "resources/apartments/frozen/1.jpg"
import frozen2 from "resources/apartments/frozen/2.jpg"
import frozen3 from "resources/apartments/frozen/3.jpg"
import frozen4 from "resources/apartments/frozen/4.jpg"
import frozen5 from "resources/apartments/frozen/5.jpg"
import frozen6 from "resources/apartments/frozen/6.jpg"
import frozen7 from "resources/apartments/frozen/7.jpeg"
import frozen8 from "resources/apartments/frozen/8.jpg"
import frozen9 from "resources/apartments/frozen/9.jpg"
import frozen10 from "resources/apartments/frozen/10.jpg"
import frozen11 from "resources/apartments/frozen/11.jpg"
import frozen12 from "resources/apartments/frozen/12.jpg"
import frozen13 from "resources/apartments/frozen/13.jpg"
import frozen14 from "resources/apartments/frozen/14.jpg"
import frozen15 from "resources/apartments/frozen/15.jpg"
import frozen16 from "resources/apartments/frozen/16.jpg"
import wizard1 from "resources/apartments/wizard/1.jpg"
import wizard2 from "resources/apartments/wizard/2.jpg"
import wizard3 from "resources/apartments/wizard/3.jpg"
import wizard4 from "resources/apartments/wizard/4.jpg"
import wizard5 from "resources/apartments/wizard/5.jpg"
import wizard6 from "resources/apartments/wizard/6.jpg"
import wizard7 from "resources/apartments/wizard/7.jpg"
import wizard8 from "resources/apartments/wizard/8.jpg"
import wizard9 from "resources/apartments/wizard/9.jpg"
import wizard10 from "resources/apartments/wizard/10.jpg"


export interface House {
	id: number
	name: string
	description: string
	video: string
	price: string
	images: string[]
	type: ApartmentType
	roomType: string
}

export const COTTAGES: House[] = [
	{
		id: 1,
		name: "Алёша Попович",
		description: "Небольшой уютный, экологически чистый коттедж ручной работы из карельской сосны, в сосновом бору на берегу Онежского озера. Вместимость до 4-х человек. В коттедже есть: камин гостиная совмещенная с кухней все необходимое для приготовления пищи холодильник ЖК телевизор душевая кабина стиральная машина балкон-терраса \n До озера 120 м.",
		video: "https://www.youtube.com/embed/-EqeL0Q4WMM",
		price: "5000",
		type: ApartmentType.COTTAGE,
		roomType: "217729",
		images: [
			aleha1,
			aleha2,
			aleha3,
			aleha4,
			aleha5,
			aleha6,
			aleha7,
			aleha8,
			aleha9,
			aleha10
		]
	},
	{
		id: 2,
		name: "Берендей",
		description: "Эксклюзивный, экологически чистый коттедж ручной работы из сухостойной сосны Kelo, в сосновом бору на берегу Онежского озера \n" +
			"Сауна, камин, гостиная совмещенная с кухней со всем необходимым для приготовления пищи, холодильник, ЖК телевизор, 3 спальни, в одной двуспальная кровать, в двух других-две односпальные кровати, душевая кабина, шикарная терраса. \n" +
			"До Онежского озера 180 м.",
		video: "https://www.youtube.com/embed/-EqeL0Q4WMM",
		price: "5000",
		type: ApartmentType.COTTAGE,
		roomType: "218593",
		images: [
			berendey1,
			berendey2,
			berendey3,
			berendey4,
			berendey5,
			berendey6,
			berendey7,
			berendey8,
			berendey9,
			berendey10,
			berendey11,
			berendey12,
			berendey13,
			berendey14,
			berendey15,
			berendey16,
			berendey17,
			berendey18,
			berendey19
		]
	},
	{
		id: 3,
		name: "Горыныч",
		description: "Эксклюзивный, экологически чистый коттедж на большую компанию из 10 человек ручной работы из сухостойной сосны Kelo, в сосновом бору на берегу Онежского озера \n" +
			"Сауна, камин, большая гостиная совмещенная с кухней со всем необходимым для приготовления пищи, холодильник, ЖК телевизор, душевая кабина, во дворе мангал." +
			"До Онежского озера 180 м.",
		video: "https://www.youtube.com/embed/rm4tlyvGsvU",
		price: "5000",
		type: ApartmentType.COTTAGE,
		roomType: "218594",
		images: [
			gorinich1,
			gorinich2,
			gorinich3,
			gorinich4,
			gorinich5,
			gorinich6,
			gorinich7,
			gorinich8,
			gorinich9,
			gorinich10,
			gorinich11,
			gorinich12,
			gorinich13,
			gorinich14
		]
	},
	{
		id: 4,
		name: "Алёша Попович",
		description: "Небольшой уютный, экологически чистый коттедж ручной работы из карельской сосны, в сосновом бору на берегу Онежского озера. Вместимость до 4-х человек. В коттедже есть: камин гостиная совмещенная с кухней все необходимое для приготовления пищи холодильник ЖК телевизор душевая кабина стиральная машина балкон-терраса \n До озера 120 м.",
		video: "https://www.youtube.com/embed/-EqeL0Q4WMM",
		price: "5000",
		type: ApartmentType.COTTAGE,
		roomType: "217729",
		images: [
			aleha1,
			aleha2,
			aleha3,
			aleha4,
			aleha5,
			aleha6,
			aleha7,
			aleha8,
			aleha9,
			aleha10
		]
	},
	{
		id: 5,
		name: "Берендей",
		description: "Эксклюзивный, экологически чистый коттедж ручной работы из сухостойной сосны Kelo, в сосновом бору на берегу Онежского озера \n" +
			"Сауна, камин, гостиная совмещенная с кухней со всем необходимым для приготовления пищи, холодильник, ЖК телевизор, 3 спальни, в одной двуспальная кровать, в двух других-две односпальные кровати, душевая кабина, шикарная терраса. \n" +
			"До Онежского озера 180 м.",
		video: "https://www.youtube.com/embed/-EqeL0Q4WMM",
		price: "5000",
		type: ApartmentType.COTTAGE,
		roomType: "218593",
		images: [
			berendey1,
			berendey2,
			berendey3,
			berendey4,
			berendey5,
			berendey6,
			berendey7,
			berendey8,
			berendey9,
			berendey10,
			berendey11,
			berendey12,
			berendey13,
			berendey14,
			berendey15,
			berendey16,
			berendey17,
			berendey18,
			berendey19
		]
	},
	{
		id: 6,
		name: "Горыныч",
		description: "Эксклюзивный, экологически чистый коттедж на большую компанию из 10 человек ручной работы из сухостойной сосны Kelo, в сосновом бору на берегу Онежского озера \n" +
			"Сауна, камин, большая гостиная совмещенная с кухней со всем необходимым для приготовления пищи, холодильник, ЖК телевизор, душевая кабина, во дворе мангал." +
			"До Онежского озера 180 м.",
		video: "https://www.youtube.com/embed/rm4tlyvGsvU",
		price: "5000",
		type: ApartmentType.COTTAGE,
		roomType: "218594",
		images: [
			gorinich1,
			gorinich2,
			gorinich3,
			gorinich4,
			gorinich5,
			gorinich6,
			gorinich7,
			gorinich8,
			gorinich9,
			gorinich10,
			gorinich11,
			gorinich12,
			gorinich13,
			gorinich14
		]
	},
	{
		id: 7,
		name: "Времена года",
		description: "Апартаменты \"Времена года\" состоят из 13 номеров по 20 м2. \n" +
			"В каждом номере современная стильная мебель из карельской сосны, раскладной диван может использоваться в качестве дополнительного спального места, шкаф для одежды, письменный стол, ТV, санузел, душевая кабина, зеркало, фен, гигиенический душ, финская сантехника, беспроводной интернет Wi-Fi.\n" +
			"Часть номеров имеет большие панорамные окна и просторный балкон с видом на Онежское озеро.\n" +
			"Уютная холл-гостиная 50 м2, где есть три стола 3х4, кухонный гарнитур, два мягких трехместных дивана, журнальный столик (вся мебель из натуральной сосны) посуда, электрочайник, микроволновая печь, стиральная машина, холодильник, телевизор 43\", цифровое ТВ.\n" +
			"Во дворе две беседки, мангал, парковка. До Онежского озера 60 м.",
		video: "https://www.youtube.com/embed/8vaIjxLdwF0",
		price: "5000",
		type: ApartmentType.APARTMENT,
		roomType: "220139,220136,218617,220135,220141",
		images: [
			seasons1,
			seasons2,
			seasons3,
			seasons4,
			seasons5,
			seasons6,
			seasons7,
			seasons8,
			seasons9
		]
	},
	{
		id: 8,
		name: "Снегурочка",
		description: "Апартаменты \"Снегурочка\" состоят из 10 номеров по 20 м2. \n" +
			"В каждом номере современная стильная мебель из карельской сосны, а раскладной диван может использоваться в качестве третьего спального места, шкаф для одежды, письменный стол, санузел, душевая кабина, зеркало, фен, гигиенический душ, финская сантехника, цифровое ТВ, беспроводной интернет Wi-Fi.\n" +
			"Часть номеров имеет большие панорамные окна и просторный балкон с открывающимся незабываемым видом на Онежское озеро.\n" +
			"Просторная холл-гостиная 50 м2, где есть три стола 3х4, кухонный гарнитур, два мягких трехместных дивана, журнальный столик (вся мебель из натуральной сосны), посуда, электрочайник, микроволновая печь, стиральная машина, холодильник, цифровое ТВ.\n" +
			"Во дворе беседка, детская песочница, мангал, автомобильная парковка. \nДо Онежского озера 130 м.",
		video: "https://www.youtube.com/embed/0ZBUCvElo10",
		price: "5000",
		type: ApartmentType.APARTMENT,
		roomType: "218618,220170,220146,220168,220169",
		images: [
			frozen1,
			frozen2,
			frozen3,
			frozen4,
			frozen5,
			frozen6,
			frozen7,
			frozen8,
			frozen9,
			frozen10,
			frozen11,
			frozen12,
			frozen13,
			frozen14,
			frozen15,
			frozen16
		]
	},
	{
		id: 9,
		name: "Чародей",
		description: "Гостевой дом «Чародеи» находится в 200 метрах от берега Онежского озера.\n" +
			"В каждом номере современная стильная мебель из карельской сосны, раскладной диван может использоваться в качестве третьего спального места, шкаф для одежды, письменный стол, санузел, душевая кабина, зеркало, фен, гигиенический душ, цифровое ТВ, беспроводной интернет Wi-Fi.\n" +
			"Часть номеров имеет большие панорамные окна и просторный балкон с открывающимся незабываемым видом на Онежское озеро.\n" +
			"Уютная просторная холл-гостиная 50 м2, где есть кухонный гарнитур, 3 стола 3х4, два мягких трехместных дивана, журнальный столик (вся мебель из натуральной сосны), посуда, электрочайник, микроволновая печь, стиральная машина, посудомоечная машина, холодильник, цифровое ТВ .\n" +
			"Во дворе беседка, детская песочница, мангал, \nавтомобильная парковка.",
		video: "https://www.youtube.com/embed/GuA_5IVN1kg",
		price: "5000",
		type: ApartmentType.APARTMENT,
		roomType: "218619,220171,220172",
		images: [
			wizard1,
			wizard2,
			wizard3,
			wizard4,
			wizard5,
			wizard6,
			wizard7,
			wizard8,
			wizard9,
			wizard10
		]
	},
]
