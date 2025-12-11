'use client'

import { IDestination } from "@/shared/types/types"
import s from './DestinationHero.module.scss'
import Button from "@/shared/components/ui/Button/Button"
import Breadcrumbs from "@/shared/components/ui/Breadcrumbs/Breadcrumbs"
import { ButtonTypes } from "@/shared/types/enums"
import { goToBlock } from "@/shared/services/go-to-block"

interface Props {
  destination: IDestination
}

const DestinationHero = ({ destination }: Props) => {
  const formatPrice = (price?: number) => {
    if (!price) return null
    return new Intl.NumberFormat('ru-RU').format(price)
  }

  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    ...(destination.hub ? [{ label: destination.hub.name, href: `/${destination.hub.slug}` }] : []),
    { label: destination.name }
  ]

  return (
    <section className={s.hero}>
      <div className={s.heroOverlay}>
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />

          <div className={s.heroContent}>
            <h1 className={s.heroTitle}>{destination.title}</h1>
            {destination.subtitle && (
              <p className={s.heroSubtitle}>{destination.subtitle}</p>
            )}

            {/* Route Info */}
            <div className={s.routeInfo}>
              {destination.fromCity && destination.toCity && (
                <div className={s.routePath}>
                  <span className={s.cityFrom}>{destination.fromCity}</span>
                  <div className={s.routeLine}>
                    <div className={s.routeDot}></div>
                    <div className={s.routeDash}></div>
                    <div className={s.routeDot}></div>
                  </div>
                  <span className={s.cityTo}>{destination.toCity}</span>
                </div>
              )}

              <div className={s.routeStats}>
                {destination.distance && (
                  <div className={s.routeStat}>
                    <span className={s.routeStatValue}>{destination.distance} км</span>
                    <span className={s.routeStatLabel}>расстояние</span>
                  </div>
                )}
                {destination.duration && (
                  <div className={s.routeStat}>
                    <span className={s.routeStatValue}>{destination.duration}</span>
                    <span className={s.routeStatLabel}>в пути</span>
                  </div>
                )}
                {destination.price && (
                  <div className={s.routeStat}>
                    <span className={s.routeStatValue}>от {formatPrice(destination.price)} ₽</span>
                    <span className={s.routeStatLabel}>
                      {destination.priceNote || 'стоимость'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className={s.heroActions}>
              <Button
                type={ButtonTypes.PRIMARY}
                text="Заказать трансфер"
                handleClick={() => goToBlock('order')}
              />
              <Button
                type={ButtonTypes.SECONDARY}
                text="Позвонить"
                link="tel:+79185875454"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationHero
