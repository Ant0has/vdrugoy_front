'use client'

import { IDestination } from "@/shared/types/types"
import { useContext, useEffect } from "react"
import { PointsContext } from "@/app/providers"
import Price from "../home/ui/Price/Price"
import OrderSteps from "../home/ui/OrderSteps/OrderSteps"
import DestinationHero from "./ui/DestinationHero/DestinationHero"
import DestinationFeatures from "./ui/DestinationFeatures/DestinationFeatures"
import DestinationDescription from "./ui/DestinationDescription/DestinationDescription"
import SeoText from "@/shared/components/ui/SeoText/SeoText"
import s from './Destination.module.scss'

interface Props {
  destination: IDestination
}

const Destination = ({ destination }: Props) => {
  const { setDeparturePoint, setArrivalPoint } = useContext(PointsContext)

  useEffect(() => {
    if (destination.fromCity) {
      setDeparturePoint(destination.fromCity)
    }
    if (destination.toCity) {
      setArrivalPoint(destination.toCity)
    }
  }, [destination])

  const routeName = `${destination.fromCity || ''} — ${destination.toCity || ''}`
  const distanceText = destination.distance ? `${destination.distance} км` : ''
  const durationText = destination.duration || ''
  const priceText = destination.price ? `от ${new Intl.NumberFormat('ru-RU').format(destination.price)} ₽` : ''

  const seoText = `
    <h2>Трансфер ${routeName}</h2>
    <p>Закажите комфортный трансфер по маршруту ${routeName} от службы «ВДругойГород».
    ${distanceText ? `Расстояние маршрута — ${distanceText}.` : ''}
    ${durationText ? `Время в пути — ${durationText}.` : ''}
    ${priceText ? `Стоимость поездки — ${priceText}.` : ''}</p>
    <h3>Что входит в стоимость</h3>
    <ul>
      <li>Подача автомобиля по указанному адресу</li>
      <li>Ожидание до 15 минут бесплатно</li>
      <li>Помощь с багажом</li>
      <li>Комфортабельный автомобиль с кондиционером</li>
      <li>Детское кресло по запросу</li>
    </ul>
    <h3>Как заказать трансфер</h3>
    <p>Оставьте заявку на сайте или позвоните по телефону +7 (918) 587-54-54.
    Мы работаем круглосуточно и подберём оптимальный вариант для вашей поездки.</p>
  `

  return (
    <div className={s.destinationPage}>
      <DestinationHero destination={destination} />

      <section className="container" id="order">
        <Price
          title={routeName}
          isMilitary={destination.targetAudience === 'military'}
        />
      </section>

      <DestinationFeatures destination={destination} />
      <OrderSteps />

      {destination.description && (
        <DestinationDescription destination={destination} />
      )}
      <SeoText content={seoText} />
    </div>
  )
}

export default Destination
