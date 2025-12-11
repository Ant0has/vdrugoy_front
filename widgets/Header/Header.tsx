'use client'

import { PointsContext, RouteContext } from '@/app/providers';
import LogoIcon from '@/public/icons/LogoIcon';
import LogoSmallIcon from '@/public/icons/LogoSmallIcon';
import PhoneIcon from '@/public/icons/PhoneIcon';
import TelegramIcon from '@/public/icons/TelegramIcon';
import WhatsUpIcon from '@/public/icons/WhatsUpIcon';
import Button from '@/shared/components/ui/Button/Button';
import { EMAIL_ADDRESS, PHONE_NUMBER_FIRST, TELEGRAM_LINK, WHATS_UP_LINK } from '@/shared/constants';
import { formatPhoneNumber } from '@/shared/services/formate-phone-number';
import { getSelectedRegion } from '@/shared/services/get-selected-region';
import { goToBlock } from '@/shared/services/go-to-block';
import { ButtonTypes } from '@/shared/types/enums';
import { IHub } from '@/shared/types/types';
import { Popover } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import s from './Header.module.scss';

const Header = () => {
  const { route } = useContext(RouteContext)
  const { departurePoint, arrivalPoint } = useContext(PointsContext)
  const [isOpenPhone, setIsOpenPhone] = useState<boolean>(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [isOpenDirections, setIsOpenDirections] = useState<boolean>(false)
  const [hubs, setHubs] = useState<IHub[]>([])

  useEffect(() => {
    fetch('/api/hubs')
      .then(res => res.json())
      .then(data => setHubs(data))
      .catch(err => console.error('Failed to fetch hubs:', err))
  }, [])

  const regionData = getSelectedRegion(route)

  const { markedPhone: markedPhoneFirst, phone: phoneFirst } = formatPhoneNumber(PHONE_NUMBER_FIRST)
  const { markedPhone: markedRegionPhone, phone: regionPhone } = regionData?.phoneNumber ? formatPhoneNumber(regionData?.phoneNumber) : { markedPhone: '', phone: '' }



  const navList = [
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
    },
    {
      id: 4,
      label: 'Направления',
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


  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.left}>
          <div className={s.logo}>
            <Link href='/'>
              <LogoIcon />
            </Link>
          </div>

          <div className={s.logoSmall}>
            <Link href='/'>
              <LogoSmallIcon />
            </Link>
          </div>
        </div>
        <div className={s.right}>

          <div className={clsx(s.social, 'row-flex-24 margin-r-32')}>
            <Button
              type={ButtonTypes.LINK}
              text='написать'
              link={TELEGRAM_LINK}
              icon={<TelegramIcon />}
            />
            <Button
              type={ButtonTypes.LINK}
              text='написать'
              link={WHATS_UP_LINK}
              icon={<WhatsUpIcon />}
            />
          </div>

          <address className={s.phone}>
            {regionData?.address && <p>{regionData?.address}</p>}

            <div className={s.block}>
              {regionData?.phoneNumber && <a href={`tel:+${regionPhone}`} className='text-color font-stolzl font-32-normal'>
                {markedRegionPhone}
              </a>}

              <a href={`tel:+${phoneFirst}`} className='text-color font-stolzl font-32-semibold'>
                {markedPhoneFirst}
              </a>

              {regionData?.address && <p className='text-color font-stolzl font-14-normal'>{regionData?.address}</p>}
            </div>
          </address>

          <Popover
            content={
              <div className={s.navList}>
                {regionData?.phoneNumber && <a href={`tel:+${regionPhone}`} className='font-16-normal font-stolzl text-color'>
                  {markedRegionPhone}
                </a>}
                <a href={`tel:+${phoneFirst}`} className='font-16-normal font-stolzl text-color'>
                  {markedPhoneFirst}
                </a>
                <a href={`mailto:${EMAIL_ADDRESS}`} className='font-16-normal font-stolzl text-color'>{EMAIL_ADDRESS}</a>
              </div>
            }
            trigger="click"
            arrow={false}
            open={isOpenPhone}
            onOpenChange={(value) => setIsOpenPhone(value)}
            placement="bottomLeft"
            className={s.icon}
          >
            <div>
              <PhoneIcon />
            </div>
          </Popover>

          <Popover
            content={
              <div className={s.navList}>
                {/* Направления */}
                {hubs.length > 0 && (
                  <div className={s.hubsSection}>
                    <div className={clsx(s.hubsTitle, 'font-14-normal')}>Направления:</div>
                    {hubs.map(hub => (
                      <Link
                        key={hub.id}
                        href={`/${hub.slug}`}
                        className='font-16-normal font-stolzl text-color'
                        onClick={() => setIsOpenMenu(false)}
                      >
                        {hub.name}
                      </Link>
                    ))}
                    <div className={s.divider} />
                  </div>
                )}
                {navList.map((item, id) => {
                  return (
                    <div key={id} onClick={() => {
                      setIsOpenMenu(false)
                      item?.handleClick?.()
                    }} className='font-16-normal font-stolzl'>{item.label}</div>
                  )
                })}
              </div>
            }
            trigger="click"
            arrow={false}
            open={isOpenMenu}
            onOpenChange={(value) => setIsOpenMenu(value)}
            placement="bottomLeft"
          >
            <div>
              <div className={s.burgerMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Header;
