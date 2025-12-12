'use client'
import { IRouteData } from "@/shared/types/route.interface"
import { IHub } from "@/shared/types/types"
import { useContext, useEffect, useState } from "react"
import Hero from "./ui/Hero/Hero"
import OrderSteps from "./ui/OrderSteps/OrderSteps"
import Price from "./ui/Price/Price"
import Weather from "./ui/Weather/Weather"
import Cities from "./ui/Cities/Cities"
import RouteDescription from "./ui/RouteDescription/RouteDescription"
import SeoText from "@/shared/components/ui/SeoText/SeoText"
import { RouteContext } from "@/app/providers"

interface Props {
	routeData?: IRouteData
	hubs?: IHub[]
}

const Home = ({ routeData, hubs = [] }: Props) => {
	const { setRoute } = useContext(RouteContext)
	const [isMilitary, setIsMilitary] = useState<boolean>(false)

	useEffect(() => {
		routeData && setRoute(routeData)
		setIsMilitary(!!routeData?.is_military)
	}, [routeData])

	const seoText = `
		<h2>Трансфер и такси межгород по России</h2>
		<p>Служба трансфера «ВДругойГород» предлагает комфортные междугородние перевозки по всей России.
		Мы работаем на популярных направлениях: горнолыжные курорты Красной Поляны, Домбай, Архыз, Эльбрус,
		черноморское побережье — Сочи, Анапа, Геленджик, Крым — Ялта, Севастополь, Евпатория,
		а также Кавказские Минеральные Воды — Кисловодск, Пятигорск, Ессентуки.</p>
		<p>Почему выбирают нас:</p>
		<ul>
			<li><strong>Фиксированные цены</strong> — стоимость поездки известна заранее</li>
			<li><strong>Комфортные автомобили</strong> — от эконом до бизнес-класса</li>
			<li><strong>Опытные водители</strong> — знают маршруты и особенности дорог</li>
			<li><strong>Круглосуточная работа</strong> — заказ в любое время 24/7</li>
		</ul>
		<p>Закажите трансфер онлайн или по телефону +7 (918) 587-54-54.</p>
	`

	return (
		<>
			<Hero hubs={hubs} />
			<Price isMilitary={isMilitary} title={routeData?.city_seo_data} />
			<Weather />
			<OrderSteps />
			<Cities hubs={hubs} />
			{routeData?.content && <RouteDescription
				text={routeData?.content}
			/>}
			<SeoText content={seoText} />
		</>
	)
}

export default Home;