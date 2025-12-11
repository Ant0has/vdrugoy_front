'use client'
import { IRouteData } from "@/shared/types/route.interface"
import { IHub } from "@/shared/types/types"
import { useContext, useEffect, useState } from "react"
import Hero from "./ui/Hero/Hero"
import OrderSteps from "./ui/OrderSteps/OrderSteps"
import Price from "./ui/Price/Price"
import Weather from "./ui/Weather/Weather"
import Cities from "./ui/Cities/Cities"
import Reviews from "./ui/Reviews/Reviews"
import RouteDescription from "./ui/RouteDescription/RouteDescription"
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

	return (
		<>
			<Hero hubs={hubs} />
			<Price isMilitary={isMilitary} title={routeData?.city_seo_data} />
			<Weather />
			<OrderSteps />
			<Cities hubs={hubs} />
			<Reviews />
			{routeData?.content && <RouteDescription
				text={routeData?.content}
			/>}
		</>
	)
}

export default Home;