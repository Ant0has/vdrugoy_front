'use client'

import Link from "next/link"
import s from './Breadcrumbs.module.scss'
import clsx from "clsx"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumbs = ({ items, className }: Props) => {
  return (
    <nav className={clsx(s.breadcrumbs, className)}>
      {items.map((item, index) => (
        <span key={index} className={s.item}>
          {item.href ? (
            <Link href={item.href} className={s.link}>
              {item.label}
            </Link>
          ) : (
            <span className={s.current}>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className={s.separator}>/</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumbs
