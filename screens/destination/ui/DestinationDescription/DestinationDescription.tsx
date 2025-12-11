'use client'

import { IDestination } from "@/shared/types/types"
import s from './DestinationDescription.module.scss'

interface Props {
  destination: IDestination
}

const DestinationDescription = ({ destination }: Props) => {
  return (
    <section className={s.description} id="description">
      <div className="container">
        <h2 className="title margin-b-24">О маршруте</h2>

        <div className={s.content}>
          {destination.description && (
            <div
              className={s.text}
              dangerouslySetInnerHTML={{ __html: destination.description }}
            />
          )}

          {destination.content && (
            <div
              className={s.text}
              dangerouslySetInnerHTML={{ __html: destination.content }}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default DestinationDescription
