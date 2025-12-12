'use client'

import { IHub } from "@/shared/types/types"
import s from './Hub.module.scss'
import HubHero from "./ui/HubHero/HubHero"
import DestinationCard from "./ui/DestinationCard/DestinationCard"
import OrderSteps from "../home/ui/OrderSteps/OrderSteps"
import SeoText from "@/shared/components/ui/SeoText/SeoText"

interface Props {
  hub: IHub
}

const Hub = ({ hub }: Props) => {
  const destinationsList = hub.destinations?.map(d => d.name).join(', ') || ''

  const seoText = `
    <h2>Трансфер ${hub.name}</h2>
    <p>Служба «ВДругойГород» предлагает комфортные трансферы по направлению ${hub.name}.
    ${hub.description || ''}</p>
    ${hub.destinations && hub.destinations.length > 0 ? `
    <h3>Популярные маршруты</h3>
    <p>Мы выполняем трансферы по следующим направлениям: ${destinationsList}.</p>
    ` : ''}
    <h3>Преимущества заказа у нас</h3>
    <ul>
      <li><strong>Фиксированные цены</strong> — стоимость известна заранее, без скрытых доплат</li>
      <li><strong>Комфортные автомобили</strong> — от эконом до бизнес-класса</li>
      <li><strong>Опытные водители</strong> — знают все особенности маршрутов</li>
      <li><strong>Работаем 24/7</strong> — заказ в любое время дня и ночи</li>
    </ul>
    <p>Для заказа трансфера звоните +7 (918) 587-54-54 или оставьте заявку на сайте.</p>
  `

  return (
    <div className={s.hubPage}>
      <HubHero hub={hub} />

      <section className="container" id="destinations">
        <h2 className="title margin-b-32">Популярные направления</h2>

        <div className={s.destinationGrid}>
          {hub.destinations?.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              hubSlug={hub.slug}
            />
          ))}
        </div>
      </section>

      <OrderSteps />
      <SeoText content={seoText} />
    </div>
  )
}

export default Hub
