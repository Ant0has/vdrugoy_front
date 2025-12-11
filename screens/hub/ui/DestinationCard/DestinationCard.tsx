'use client'

import { IDestination } from "@/shared/types/types"
import Link from "next/link"
import s from './DestinationCard.module.scss'

interface Props {
  destination: IDestination
  hubSlug: string
}

const DestinationCard = ({ destination, hubSlug }: Props) => {
  const formatPrice = (price?: number) => {
    if (!price) return null
    return new Intl.NumberFormat('ru-RU').format(price)
  }

  return (
    <Link href={`/${hubSlug}/${destination.slug}`} className={s.card}>
      <div className={s.cardHeader}>
        <h3 className={s.cardTitle}>{destination.name}</h3>
        {destination.isFeatured && (
          <span className={s.featuredBadge}>Популярное</span>
        )}
      </div>

      <div className={s.cardBody}>
        {destination.fromCity && destination.toCity && (
          <div className={s.route}>
            <span className={s.routeFrom}>{destination.fromCity}</span>
            <span className={s.routeArrow}>→</span>
            <span className={s.routeTo}>{destination.toCity}</span>
          </div>
        )}

        <div className={s.details}>
          {destination.distance && (
            <div className={s.detailItem}>
              <span className={s.detailLabel}>Расстояние</span>
              <span className={s.detailValue}>{destination.distance} км</span>
            </div>
          )}
          {destination.duration && (
            <div className={s.detailItem}>
              <span className={s.detailLabel}>В пути</span>
              <span className={s.detailValue}>{destination.duration}</span>
            </div>
          )}
        </div>
      </div>

      <div className={s.cardFooter}>
        {destination.price && (
          <div className={s.price}>
            <span className={s.priceLabel}>от</span>
            <span className={s.priceValue}>{formatPrice(destination.price)} ₽</span>
          </div>
        )}
        <span className={s.orderBtn}>Заказать →</span>
      </div>
    </Link>
  )
}

export default DestinationCard
