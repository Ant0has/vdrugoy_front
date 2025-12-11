'use client'

import { IHub } from "@/shared/types/types"
import Link from "next/link"
import s from './Hub.module.scss'
import HubHero from "./ui/HubHero/HubHero"
import DestinationCard from "./ui/DestinationCard/DestinationCard"
import Reviews from "../home/ui/Reviews/Reviews"
import OrderSteps from "../home/ui/OrderSteps/OrderSteps"

interface Props {
  hub: IHub
}

const Hub = ({ hub }: Props) => {
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
      <Reviews />
    </div>
  )
}

export default Hub
