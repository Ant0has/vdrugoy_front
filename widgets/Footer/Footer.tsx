'use client'

import { ModalContext, PointsContext, RouteContext } from '@/app/providers';
import LogoIcon from '@/public/icons/LogoIcon';
import TelegramIcon from '@/public/icons/TelegramIcon';
import WhatsUpIcon from '@/public/icons/WhatsUpIcon';
import { PHONE_NUMBER_FIRST, TELEGRAM_LINK, WHATS_UP_LINK } from '@/shared/constants';
import { formatPhoneNumber } from '@/shared/services/formate-phone-number';
import { getSelectedRegion } from '@/shared/services/get-selected-region';
import { ButtonTypes } from '@/shared/types/enums';
import clsx from 'clsx';
import { useContext } from 'react';
import Button from '../../shared/components/ui/Button/Button';
import s from './Footer.module.scss';
import { goToBlock } from '@/shared/services/go-to-block';

const Footer = () => {
  const { route } = useContext(RouteContext)
  const { setQuestionModalData } = useContext(ModalContext)
  const { arrivalPoint, departurePoint } = useContext(PointsContext)

  const regionData = getSelectedRegion(route)

  const navList = [
    // {
    //   id: 1,
    //   label: 'Главная',
    //   // route: 'contacts'
    // },
    {
      id: 2,
      label: 'Заказать такси',
      handleClick: () => goToBlock('order')
    },
    {
      id: 3,
      label: 'Погода',
      isHidden: !departurePoint && !arrivalPoint,
      handleClick: () => goToBlock('weather')
      // handleClick: () => setQuestionModalData({ status: true, blockFrom: Blocks.FOOTER })
    },
    {
      id: 4,
      label: 'Другие маршруты',
      handleClick: () => goToBlock('cities')
    },
    {
      id: 5,
      label: 'Отзывы',
      route: 'oferta',
      handleClick: () => goToBlock('reviews')
    },
    {
      id: 6,
      label: 'Описание маршрута',
      isHidden: !route?.content,
      handleClick: () => goToBlock('routeDescription')
    },
    {
      id: 7,
      label: 'Контакты',
    },
  ].filter(el => !el.isHidden)

  const currentYear = new Date().getFullYear();
  const { markedPhone: markedPhoneFirst, phone: phoneFirst } = formatPhoneNumber(PHONE_NUMBER_FIRST)
  const { markedPhone: markedRegionPhone, phone: regionPhone } = regionData?.phoneNumber ? formatPhoneNumber(regionData?.phoneNumber) : { markedPhone: '', phone: '' }

  return (
    <footer className={clsx(s.footer)}>
      <div className={s.container}>
        <div className={s.top}>

          <div className={s.description}>
            <div className={s.descriptionTop}>
              <LogoIcon />
              <p className='font-16-normal white-color font-stolzl'>Добро пожаловать на наш сайт такси! Мы рады предложить вам быстрые и удобные поездки по городу.  Заказывайте такси всего в несколько кликов и наслаждайтесь поездкой! </p>
            </div>

            <div className={s.descriptionBottom}>
              <div className='font-18-normal white-color font-stolzl'>Политика конфиденциальности</div>
              <p className='font-18-normal white-color font-stolzl'>© {currentYear} Все права защищены  </p>
            </div>
          </div>

          <div className={s.navigationBlock}>
            <div className={s.navigation}>
              {navList.map(link => (
                <a key={link.id} onClick={link.handleClick} className='white-color font-20-normal cursor-pointer font-stolzl'>{link.label}</a>
              ))}
            </div>
            {regionData?.address && <p className='white-color'>{regionData?.address}</p>}
          </div>

          <div className={s.contacts}>
            {regionData?.phoneNumber && <a href={`tel:+${regionPhone}`} className='font-32-normal white-color font-stolzl'>
              {markedRegionPhone}
            </a>}
            <a href={`tel:+${phoneFirst}`} className='font-32-normal white-color font-stolzl'>
              {markedPhoneFirst}
            </a>

            <p className='font-18-normal white-color font-stolzl'>Москва,Тверская ул.,20, оф.100</p>

            {/* <a href={`mailto:${EMAIL_ADDRESS}`} className='font-32-semibold white-color'>{EMAIL_ADDRESS}</a> */}

            <div className={clsx(s.social, 'row-flex-8')}>
              <Button
                type={ButtonTypes.LINK}
                link={WHATS_UP_LINK}
                icon={<WhatsUpIcon />}
                className={s.roundLink}
              />
              <Button
                type={ButtonTypes.LINK}
                link={TELEGRAM_LINK}
                icon={<TelegramIcon fill='var(--blue)' />}
                className={s.roundLink}
              />
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
