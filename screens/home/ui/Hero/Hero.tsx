'use client'

import { IHub } from "@/shared/types/types"
import Link from "next/link"
import s from './Hero.module.scss'
import clsx from "clsx"

interface Props {
  hubs?: IHub[]
}

const Hero = ({ hubs = [] }: Props) => {
  return (
    <section className={s.hero}>
      <div className="container">
        <h1 className={clsx(s.title, 'font-stolzl')}>
          Трансфер и такси межгород
        </h1>
        <p className={s.subtitle}>
          Комфортные поездки по фиксированным ценам. Горнолыжные курорты, море, санатории и деловые поездки.
        </p>

        {hubs.length > 0 && (
          <nav className={s.hubsNav}>
            <span className={s.hubsLabel}>Популярные направления:</span>
            <div className={s.hubsList}>
              {hubs.map(hub => (
                <Link
                  href={`/${hub.slug}`}
                  key={hub.id}
                  className={s.hubLink}
                >
                  {hub.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </section>
  )
}

export default Hero
