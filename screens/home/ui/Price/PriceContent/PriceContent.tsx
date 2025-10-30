"use client";

import { Prices } from "@/shared/types/enums";
import { IPriceOptions } from "@/shared/types/types";
import { Collapse, CollapseProps, Tooltip } from "antd";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AdditionalServices from "../AdditionalServices/AdditionalServices";
import {
  additionalServices,
  businessOptions,
  comfortOptions,
  comfortPlusOptions,
  deliveryOptions,
  minivanOptions,
  standardOptions,
} from "../data";
import PriceOptions from "../PriceOptions/PriceOptions";

import standard1 from "@/public/images/cars/standard-1.png";

import comfort1 from "@/public/images/cars/comfort-1.png";
import comfort2 from "@/public/images/cars/comfort-2.png";
import comfort3 from "@/public/images/cars/comfort-3.png";

import comfortPlus1 from "@/public/images/cars/comfort-plus-1.png";
import comfortPlus2 from "@/public/images/cars/comfort-plus-2.png";
import comfortPlus3 from "@/public/images/cars/comfort-plus-3.png";
import comfortPlus4 from "@/public/images/cars/comfort-plus-4.png";

import business1 from "@/public/images/cars/business-1.png";
import business2 from "@/public/images/cars/business-2.png";
import business3 from "@/public/images/cars/business-3.png";

import minivan1 from "@/public/images/cars/minivan-1.png";
import minivan2 from "@/public/images/cars/minivan-2.png";
import minivan3 from "@/public/images/cars/minivan-3.png";

import delivery1 from "@/public/images/cars/delivery-1.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./PriceContent.module.scss";
import ChildIcon from "@/public/icons/options/ChildIcon";
import MeetingIcon from "@/public/icons/options/MeetingIcon";
import AirportTableIcon from "@/public/icons/options/AirportTableIcon";
import BaggageIcon from "@/public/icons/options/BaggageIcon";
import PetIcon from "@/public/icons/options/PetIcon";

interface IProps {
  type: Prices;
  isMilitary?: boolean;
}

const PriceContent: FC<IProps> = ({ type, isMilitary }) => {
  const contentByType: {
    [key in Prices]: {
      title: string;
      options: IPriceOptions[];
      carsImages: StaticImageData[];
    };
  } = {
    [Prices.STANDARD]: {
      title: "Тариф Стандарт",
      options: standardOptions,
      carsImages: [standard1]
    },

    [Prices.COMFORT]: {
      title: "Тариф Комфорт",
      options: comfortOptions,
      carsImages: [comfort1, comfort2, comfort3]
    },

    [Prices.COMFORT_PLUS]: {
      title: "Тариф Комфорт+",
      options: comfortPlusOptions,
      carsImages: [comfortPlus1, comfortPlus2, comfortPlus3, comfortPlus4]
    },

    [Prices.BUSINESS]: {
      title: "Тариф Бизнес",
      options: businessOptions,
      carsImages: [business1, business2, business3]
    },

    [Prices.MINIVAN]: {
      title: "Тариф Минивэн",
      options: minivanOptions,
      carsImages: [minivan1, minivan2, minivan3]
    },

    [Prices.DELIVERY]: {
      title: "Тариф Доставка",
      options: deliveryOptions,
      carsImages: [delivery1]
    },
  };

  const additionalServices = [
    {
      id: 1,
      icon: <ChildIcon />,
      description: 'Детское кресло'
    },
    {
      id: 2,
      icon: <MeetingIcon />,
      description: 'Встреча у поезда'
    },
    {
      id: 3,
      icon: <AirportTableIcon />,
      description: 'Встреча с табличкой в аэропорту'
    },
    {
      id: 4,
      icon: <BaggageIcon />,
      description: 'Вместительный багажник'
    },
    {
      id: 5,
      icon: <PetIcon />,
      description: 'Перевозка животных'
    }
  ]

  return (
    <div className={clsx(s.content, { [s.military]: isMilitary })}>
      <div className={s.top}>
        <div className={s.options}>
          <PriceOptions
            isMilitary={isMilitary}
            title={contentByType[type].title}
            options={contentByType[type].options}
          />
        </div>

        <div className={s.additionalServicesBlock}>
          <p className="font-stolzl font-16-normal" >Дополнительные услуги</p>
          <div className={s.additionalServices}>
            {additionalServices.map(service => (
              <Tooltip placement="bottom" key={service.id.toString()} title={service.description}>
                <div key={service.id.toString()} className={s.additionalServicesItem}>{service.icon}</div>
              </Tooltip>

            ))}
          </div>
        </div>


        <div className={s.swiper}>
          <Swiper
            grabCursor={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={48}
          >
            {contentByType[type].carsImages.map(
              (image: StaticImageData, id: number) => (
                <SwiperSlide
                  key={id}
                  style={{ position: "relative", aspectRatio: "400/220" }}
                >
                  <Image
                    src={image}
                    alt="car-example"
                    fill
                    sizes="(max-width: 480px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 567px"
                    quality={85}
                    className={s.image}
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PriceContent;
