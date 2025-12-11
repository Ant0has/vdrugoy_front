'use client'

import { IDestination } from "@/shared/types/types"
import { useContext, useEffect } from "react"
import { PointsContext } from "@/app/providers"
import Price from "../home/ui/Price/Price"
import OrderSteps from "../home/ui/OrderSteps/OrderSteps"
import Reviews from "../home/ui/Reviews/Reviews"
import DestinationHero from "./ui/DestinationHero/DestinationHero"
import DestinationFeatures from "./ui/DestinationFeatures/DestinationFeatures"
import DestinationDescription from "./ui/DestinationDescription/DestinationDescription"
import s from './Destination.module.scss'

interface Props {
  destination: IDestination
}

const Destination = ({ destination }: Props) => {
  const { setDeparturePoint, setArrivalPoint } = useContext(PointsContext)

  useEffect(() => {
    // Устанавливаем точки отправления и прибытия
    if (destination.fromCity) {
      setDeparturePoint(destination.fromCity)
    }
    if (destination.toCity) {
      setArrivalPoint(destination.toCity)
    }
  }, [destination])

  return (
    <div className={s.destinationPage}>
      <DestinationHero destination={destination} />

      <section className="container" id="order">
        <Price
          title={`${destination.fromCity || ''} — ${destination.toCity || ''}`}
          isMilitary={destination.targetAudience === 'military'}
        />
      </section>

      <DestinationFeatures destination={destination} />
      <OrderSteps />
      <Reviews />

      {destination.description && (
        <DestinationDescription destination={destination} />
      )}
    </div>
  )
}

export default Destination
