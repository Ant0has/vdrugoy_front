'use client'

import Cities from "@/shared/components/Cities/Cities"
import OrderSteps from "@/shared/components/OrderSteps/OrderSteps"
import Price from "@/shared/components/Price/Price"
import Reviews from "@/shared/components/Reviews/Reviews"
import RouteDescription from "@/shared/components/RouteDescription/RouteDescription"
import Weather from "@/shared/components/Weather/Weather"
import { IRouteData } from "@/shared/types/route.interface"
import { useContext, useEffect, useState } from "react"
import { RouteContext } from "../providers"

interface Props {
	routeData?: IRouteData
}

export function Home({ routeData }: Props) {
	const { setRoute } = useContext(RouteContext)
	const [isMilitary, setIsMilitary] = useState<boolean>(false)

	useEffect(() => {
		routeData && setRoute(routeData)
		setIsMilitary(!!routeData?.is_military)
	}, [routeData])

	return (
		<>
			<Price isMilitary={isMilitary} title={routeData?.city_seo_data} />
			<Weather />
			<OrderSteps />
			<Cities routes={routeData?.routes} />
			<Reviews />
			{routeData?.content && <RouteDescription
				text={routeData?.content}
			/>}
		</>
	)
}
