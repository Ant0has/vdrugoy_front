'use client'

import { Blocks } from "@/shared/types/enums"
import { IRouteData } from "@/shared/types/route.interface"
import { IMailRequest, IRegion } from "@/shared/types/types"
import { YMaps } from "@pbe/react-yandex-maps"
import { ConfigProvider } from "antd"
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react"
import { tokens } from "../shared/styles/style-tokens"

interface ProvidersProps extends PropsWithChildren {
	regions: IRegion[]
}
interface IQuestionModalData {
	status: boolean,
	blockFrom: Blocks | null
}

export interface IOrderModalData extends IMailRequest {
	status: boolean,
}
interface ModalContextProps {
	questionModalData: IQuestionModalData,
	setQuestionModalData: Dispatch<SetStateAction<IQuestionModalData>>

	orderModalData: IOrderModalData,
	setOrderModalData: Dispatch<SetStateAction<IOrderModalData>>
}

interface RouteContextProps {
	route: IRouteData
	setRoute: Dispatch<SetStateAction<IRouteData>>
}

interface PointsContextProps {
	departurePoint: string,
	setDeparturePoint: Dispatch<SetStateAction<string>>


	arrivalPoint: string,
	setArrivalPoint: Dispatch<SetStateAction<string>>
}



export const RegionsContext = createContext<IRegion[]>([])

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)

export const RouteContext = createContext<RouteContextProps>({} as RouteContextProps)

export const PointsContext = createContext<PointsContextProps>({} as PointsContextProps)

export function Providers({ children, regions }: ProvidersProps) {
	const [questionModalData, setQuestionModalData] = useState<IQuestionModalData>({
		status: false,
		blockFrom: null
	})
	const [orderModalData, setOrderModalData] = useState<IOrderModalData>({ status: false })
	const [route, setRoute] = useState<IRouteData>({} as IRouteData)
	const [departurePoint, setDeparturePoint] = useState<string>('')
	const [arrivalPoint, setArrivalPoint] = useState<string>('')


	return (
		<YMaps query={{
			// apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY
			apikey: '09312112-68cd-488d-afbd-7549b1e6e3df'
		}}>
			<ConfigProvider
				wave={{ disabled: true }}
				theme={{
					components: tokens.components,
					token: tokens.token
				}}
			>
				<RegionsContext.Provider value={regions}>
					<RouteContext.Provider value={{
						route,
						setRoute
					}}>
						<ModalContext.Provider value={{
							questionModalData,
							setQuestionModalData,

							orderModalData,
							setOrderModalData
						}}>
							<PointsContext.Provider value={{
								departurePoint,
								setDeparturePoint,

								arrivalPoint,
								setArrivalPoint
							}}>
								{children}
							</PointsContext.Provider>
						</ModalContext.Provider>
					</RouteContext.Provider>
				</RegionsContext.Provider>
			</ConfigProvider >
		</YMaps>
	)
}
