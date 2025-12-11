'use client'

import { IHub } from "@/shared/types/types"
import s from './HubHero.module.scss'
import Button from "@/shared/components/ui/Button/Button"
import Breadcrumbs from "@/shared/components/ui/Breadcrumbs/Breadcrumbs"
import { ButtonTypes } from "@/shared/types/enums"
import { goToBlock } from "@/shared/services/go-to-block"

interface Props {
  hub: IHub
}

const HubHero = ({ hub }: Props) => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: hub.name }
  ]

  return (
    <section className={s.hero}>
      <div className={s.heroOverlay}>
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className={s.heroContent}>
            <h1 className={s.heroTitle}>{hub.title}</h1>
            {hub.subtitle && (
              <p className={s.heroSubtitle}>{hub.subtitle}</p>
            )}
            {hub.description && (
              <p className={s.heroDescription}>{hub.description}</p>
            )}
            <div className={s.heroActions}>
              <Button
                type={ButtonTypes.PRIMARY}
                text="Выбрать направление"
                handleClick={() => goToBlock('destinations')}
              />
              <Button
                type={ButtonTypes.SECONDARY}
                text="Позвонить"
                link="tel:+79185875454"
              />
            </div>

            <div className={s.stats}>
              <div className={s.statItem}>
                <span className={s.statValue}>{hub._count?.destinations || hub.destinations?.length || 0}</span>
                <span className={s.statLabel}>направлений</span>
              </div>
              <div className={s.statItem}>
                <span className={s.statValue}>24/7</span>
                <span className={s.statLabel}>поддержка</span>
              </div>
              <div className={s.statItem}>
                <span className={s.statValue}>100%</span>
                <span className={s.statLabel}>гарантия цены</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HubHero
