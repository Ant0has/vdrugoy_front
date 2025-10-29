'use client'

import { PointsContext, RouteContext } from '@/app/providers';
import LogoIcon from '@/public/icons/LogoIcon';
import PhoneIcon from '@/public/icons/PhoneIcon';
import TelegramIcon from '@/public/icons/TelegramIcon';
import WhatsUpIcon from '@/public/icons/WhatsUpIcon';
import { EMAIL_ADDRESS, PHONE_NUMBER_FIRST, TELEGRAM_LINK, WHATS_UP_LINK } from '@/shared/constants';
import { formatPhoneNumber } from '@/shared/services/formate-phone-number';
import { getSelectedRegion } from '@/shared/services/get-selected-region';
import { ButtonTypes } from '@/shared/types/enums';
import { Popover } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { FC, useContext, useState } from 'react';
import MenuContent from '../MenuContent/MenuContent';
import Button from '../ui/Button/Button';
import s from './Header.module.scss';
import LogoSmallIcon from '@/public/icons/LogoSmallIcon';
import { goToBlock } from '@/shared/services/go-to-block';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {
  const { route } = useContext(RouteContext)
  const { departurePoint, arrivalPoint } = useContext(PointsContext)
  const [isOpenPhone, setIsOpenPhone] = useState<boolean>(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

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
              {regionData?.phoneNumber && <a href={`tel:+${regionData?.phoneNumber}`} className='text-color font-stolzl font-32-normal'>
                {formatPhoneNumber(regionData?.phoneNumber)}
              </a>}

              <a href={`tel:+${PHONE_NUMBER_FIRST}`} className='text-color font-stolzl font-32-semibold'>
                {formatPhoneNumber(PHONE_NUMBER_FIRST)}
              </a>

              {regionData?.address && <p className='text-color font-stolzl font-14-normal'>{regionData?.address}</p>}
            </div>
          </address>

          <Popover
            content={
              <div className={s.navList}>
                {regionData?.phoneNumber && <a href={`tel:+${regionData?.phoneNumber}`} className='font-16-normal font-stolzl text-color'>
                  {formatPhoneNumber(regionData?.phoneNumber)}
                </a>}
                <a href={`tel:+${PHONE_NUMBER_FIRST}`} className='font-16-normal font-stolzl text-color'>
                  {formatPhoneNumber(PHONE_NUMBER_FIRST)}
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
