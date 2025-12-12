'use client'

import Breadcrumbs from "@/shared/components/ui/Breadcrumbs/Breadcrumbs"
import Button from "@/shared/components/ui/Button/Button"
import { PHONE_NUMBER_FIRST, TELEGRAM_LINK, WHATS_UP_LINK } from "@/shared/constants"
import { formatPhoneNumber } from "@/shared/services/formate-phone-number"
import { ButtonTypes } from "@/shared/types/enums"
import TelegramIcon from "@/public/icons/TelegramIcon"
import WhatsUpIcon from "@/public/icons/WhatsUpIcon"
import s from './Contacts.module.scss'
import clsx from "clsx"

const Contacts = () => {
  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Контакты' }
  ]

  const { markedPhone, phone } = formatPhoneNumber(PHONE_NUMBER_FIRST)

  return (
    <div className={clsx("container", s.contacts)}>
      <Breadcrumbs items={breadcrumbItems} className="margin-t-40 margin-b-20" />

      <h1 className={clsx(s.title, 'font-stolzl')}>Контакты</h1>

      <div className={s.grid}>
        <div className={s.card}>
          <h2 className={s.cardTitle}>Телефон</h2>
          <a href={`tel:+${phone}`} className={s.phone}>
            {markedPhone}
          </a>
          <p className={s.description}>
            Звоните круглосуточно для заказа трансфера или консультации
          </p>
        </div>

        <div className={s.card}>
          <h2 className={s.cardTitle}>Мессенджеры</h2>
          <div className={s.messengers}>
            <Button
              type={ButtonTypes.LINK}
              link={WHATS_UP_LINK}
              icon={<WhatsUpIcon />}
              text="WhatsApp"
              className={s.messengerBtn}
            />
            <Button
              type={ButtonTypes.LINK}
              link={TELEGRAM_LINK}
              icon={<TelegramIcon fill='var(--blue)' />}
              text="Telegram"
              className={s.messengerBtn}
            />
          </div>
          <p className={s.description}>
            Напишите нам в удобном мессенджере
          </p>
        </div>

        <div className={s.card}>
          <h2 className={s.cardTitle}>Email</h2>
          <a href="mailto:info@vdrugoygorod.ru" className={s.email}>
            info@vdrugoygorod.ru
          </a>
          <p className={s.description}>
            Для деловых предложений и сотрудничества
          </p>
        </div>

        <div className={s.card}>
          <h2 className={s.cardTitle}>Юридическая информация</h2>
          <div className={s.legalInfo}>
            <p><strong>ИП Фурсенко Катерина Валерьевна</strong></p>
            <p>ИНН: 616606322786</p>
            <p>ОГРНИП: 324619600058583</p>
          </div>
        </div>

        <div className={s.card}>
          <h2 className={s.cardTitle}>Режим работы</h2>
          <p className={s.workTime}>Круглосуточно, 24/7</p>
          <p className={s.description}>
            Принимаем заказы в любое время дня и ночи
          </p>
        </div>

        <div className={s.card}>
          <h2 className={s.cardTitle}>География</h2>
          <p className={s.description}>
            Работаем по всей России: горнолыжные курорты, черноморское побережье,
            Крым, Кавказские Минеральные Воды, Байкал и другие направления.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contacts
