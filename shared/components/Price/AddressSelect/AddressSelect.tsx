"use client"

import { ModalContext, PointsContext } from "@/app/providers";
import RoadIcon from "@/public/icons/RoadIcon";
import SwapIcon from "@/public/icons/SwapIcon";
import TimeIcon from "@/public/icons/TimeIcon";
import WalletIcon from "@/public/icons/WalletIcon";
import { COEFFICIENT_100, COEFFICIENT_100_150, COEFFICIENT_150_200, COEFFICIENT_200, prices, SPEED } from "@/shared/constants";
import { yandexMapsService } from "@/shared/services/yandex-maps.service";
import { Blocks, ButtonTypes, Prices } from "@/shared/types/enums";
import { Map, RoutePanel } from "@pbe/react-yandex-maps";
import clsx from "clsx";
import Link from "next/link";
import { FC, useContext, useEffect, useRef, useState } from "react";
import Button from "../../ui/Button/Button";
import SearchInput from "../../ui/SearchInput/SearchInput";
import s from './AddressSelect.module.scss';
import AppContext from "antd/es/app/context";

interface IProps {
  selectedPlan: Prices
  isMilitary?: boolean
}

const AddressSelect: FC<IProps> = ({ selectedPlan, isMilitary }) => {
  const map = useRef<any>()
  const { departurePoint, setDeparturePoint, arrivalPoint, setArrivalPoint } = useContext(PointsContext)

  // const [departurePoint, setDeparturePoint] = useState<string>()
  const [departurePointData, setDeparturePointData] = useState<string[]>([])
  // const [arrivalPoint, setArrivalPoint] = useState<string>()
  const [arrivalPointData, setArrivalPointData] = useState<string[]>([])
  const [distance, setDistance] = useState<string>('от 10 км')
  const [time, setTime] = useState<string>('- ч')
  const [price, setPrice] = useState<string>('от — руб.')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { setOrderModalData } = useContext(ModalContext)

  const handleClickSwapAddress = () => {
    setDeparturePoint(arrivalPoint)
    setArrivalPoint(departurePoint)
    setDeparturePointData(arrivalPointData)
    setArrivalPointData(departurePointData)
  }

  const handleChangeDeparturePoint = (value: string) => {
    setDeparturePoint(value)
  }

  const handleSearchDeparturePoint = async (value: string) => {
    const response = await yandexMapsService.getSuggestions(value)
    const uniqueData = [...new Set(response)];
    setDeparturePointData(uniqueData)
  }

  //-----

  const handleChangeArrivalPoint = (value: string) => {
    setArrivalPoint(value)
  }

  const handleSearchArrivalPoint = async (value: string) => {
    const response = await yandexMapsService.getSuggestions(value)
    const uniqueData = [...new Set(response)];
    setArrivalPointData(uniqueData)
  }


  const handleCalculate = async () => {
    setIsLoading(true)
    if (map?.current) {

      const control = await map.current.routePanel.getRouteAsync();
      const activeRoute = control.getActiveRoute();

      if (activeRoute) {
        const distance = activeRoute.properties.get("distance")
        if (distance?.value) {
          const distanceValue = Math.ceil((distance?.value / 1000) / 10) * 10;

          const convertHoursToRoundedTime = (hours: number): string => {
            let totalMinutes = Math.ceil(hours * 60 / 30) * 30;

            let totalHours = Math.floor(totalMinutes / 60);
            let weeks = Math.floor(totalHours / (24 * 7));
            let remainingHoursAfterWeeks = totalHours % (24 * 7);
            let days = Math.floor(remainingHoursAfterWeeks / 24);
            let roundedHours = remainingHoursAfterWeeks % 24;
            let roundedMinutes = totalMinutes % 60;

            let result = [];
            if (weeks > 0) result.push(`${weeks} нед`);
            if (days > 0) result.push(`${days} дн`);
            if (roundedHours > 0) result.push(`${roundedHours} ч`);
            if (roundedMinutes > 0) result.push(`${roundedMinutes} мин`);

            return result.join(" ");
          };

          const getCoefficient = (distance: number) => {
            if (distance < 100) return COEFFICIENT_100
            if (distance >= 100 && distance < 150) return COEFFICIENT_100_150
            if (distance >= 150 && distance < 200) return COEFFICIENT_150_200
            return COEFFICIENT_200
          }

          const getPrice = () => {
            const initialPrice = distanceValue * prices[selectedPlan] * getCoefficient(distanceValue)
            return Math.ceil(initialPrice / 500) * 500;
          }

          const timeValue = convertHoursToRoundedTime(distanceValue / SPEED)

          setDistance(`${distanceValue} км`)
          setTime(timeValue)
          setPrice(`от ${getPrice()}р`)
        }
      }
    }
    setIsLoading(false)
    if (!departurePoint || !arrivalPoint) return;
  };

  useEffect(() => {
    handleCalculate()
  }, [selectedPlan])

  const infoData = [
    {
      id: 1,
      icon: <RoadIcon />,
      value: distance,
      description: 'Расстояние'
    },
    {
      id: 2,
      icon: <TimeIcon />,
      value: time,
      description: 'В пути'
    },
    {
      id: 3,
      icon: <WalletIcon />,
      value: price,
      description: 'Стоимость'
    }
  ]

  return (
    <div id="order" className={clsx(s.wrapper, { [s.military]: isMilitary })}>
      <div className={clsx(s.title, 'font-stolzl')}>Укажите куда вам надо</div>

      <div className={s.selection}>
        <div className={s.part}>
          <div className={clsx(s.label, 'font-16-normal')}>Точка отправления*</div>
          <SearchInput
            className='address-select'
            value={departurePoint}
            placeholder="Санкт-Петербург"
            data={departurePointData}
            handleChange={handleChangeDeparturePoint}
            handleSearch={handleSearchDeparturePoint}
          />
        </div>

        <div className={s.swapButtonWrapper}>
          <div
            onClick={handleClickSwapAddress}
            className={s.swapButton}>
            <SwapIcon />
          </div>
        </div>


        <div className={s.part}>
          <div className={clsx(s.label, 'font-16-normal')}>Точка прибытия*</div>
          <SearchInput
            className='address-select'
            value={arrivalPoint}
            placeholder="Пенза"
            data={arrivalPointData}
            handleChange={handleChangeArrivalPoint}
            handleSearch={handleSearchArrivalPoint}
          />
        </div>
      </div>

      <div className={s.info}>
        {infoData.map(info => (
          <div key={info.id} className={s.card}>
            <div className={s.icon}>{info.icon}</div>
            <div className={s.content}>
              <div className={clsx(s.bottom, 'font-14-normal')}>{info.description}</div>
              <div className={clsx(s.top, 'font-16-bold')}>{info.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={s.order}>
        <div className={s.buttons}>
          <Button
            disabled={!departurePoint || !arrivalPoint || isLoading}
            type={ButtonTypes.SECONDARY}
            text="Рассчитать поездку"
            handleClick={handleCalculate} />
          <Button type={ButtonTypes.PRIMARY} text="Заказать поездку" handleClick={() => setOrderModalData({
            status: true,
            auto_class: selectedPlan,
            order_from: departurePoint,
            order_to: arrivalPoint,
            trip_price_from: price,
            block: Blocks.CALCULATOR
          })} />
        </div>

        <div className={clsx(s.warning, 'font-14-normal')}>
          Расчеты носят информационно-справочный характер, нажмите Заказать, чтобы узнать точную стоимость. Нажимая на кнопку, вы соглашаетесь на <Link href='privacy-policy' className={clsx(s.policy, 'font-14-normal orange-color')}>обработку персональных данных</Link>.
        </div>
      </div>

      <Map style={{
        display: 'none'
      }} width={1000} height={0} defaultState={{
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: [],
      }}>
        <RoutePanel
          options={{ float: "right" }}
          instanceRef={(ref: any) => {
            map.current = ref
            if (ref) {
              ref.routePanel.state.set({
                from: departurePoint || '',
                to: arrivalPoint || ''
              });

              ref.routePanel.options.set({
                autoSelect: true,

              });
            }
          }}
        />
      </Map>

    </div>
  )
}

export default AddressSelect;