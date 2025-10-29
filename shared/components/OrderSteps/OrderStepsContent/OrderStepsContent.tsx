"use-client";

import { FC, useEffect, useState } from "react";
import s from './OrderStepsContent.module.scss'
import clsx from "clsx";
import ApplicationIcon from "@/public/icons/ApplicationIcon";
import MobileIcon from "@/public/icons/MobileIcon";
import MessageIcon from "@/public/icons/MessageIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";


import Order1 from "@/public/images/order-1.png"
import Order2 from "@/public/images/order-2.png"
import Order3 from "@/public/images/order-3.png"

interface IProps {
  title?: unknown;
}

const OrderStepsContent: FC<IProps> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const orderContent = [
    {
      id: 1,
      icon: <ApplicationIcon />,
      label: 'Оставить заявку',
      img: Order1
    },
    {
      id: 2,
      icon: <MobileIcon />,
      label: 'Мы уточняем детали',
      img: Order2
    },
    {
      id: 3,
      icon: <MessageIcon />,
      label: 'Мы пришлем информацию для поездки',
      img: Order3
    }
  ]


  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 480)
      }
    }

    checkMobile()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <>
      <div className={clsx(s.title, 'title')}>
        Как забронировать поездку
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={isMobile ? 18 : 48}
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        centeredSlides={false} // важно!
        style={{ overflow: 'hidden', width: 'fit-content' }}
      >
        {orderContent.map(step => (
          <SwiperSlide
            key={step.id}
            style={{
              width: 'fit-content',
            }} >
            <div className={s.card}>
              {isMobile ? <Image
                src={step.img}
                alt={'order-step'}
                fill
              /> : (
                <>
                  <div className={s.number}>{step.id}</div>
                  <button className={s.button}>
                    <span className={s.text}>{step.label}</span>
                    <span className={s.icon}>{step.icon}</span>
                  </button>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper >

    </>
  )
}

export default OrderStepsContent;
