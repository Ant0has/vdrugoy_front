'use-client'

import { PointsContext } from "@/app/providers";
import { yandexMapsService } from "@/shared/services/yandex-maps.service";
import { WeatherType } from "@/shared/types/enums";
import clsx from "clsx";
import { FC, useContext, useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WeatherItem from "../ui/WeatherItem/WeatherItem";
import s from './Weather.module.scss';


const Weather: FC = () => {
  const { departurePoint, arrivalPoint } = useContext(PointsContext)

  const [departureWeather, setDepartureWeather] = useState<any>()
  const [arrivalWeather, setArrivalWeather] = useState<any>()

  const getWeather = async ({ lat, lon }: { lat: number; lon: number }) => {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const data = await res.json();
    return data.current_weather;
  };

  useEffect(() => {
    yandexMapsService.getCoordinates(departurePoint).then((response) => {
      if (response)
        getWeather(response).then((r) => setDepartureWeather(r))
    })

  }, [departurePoint])

  useEffect(() => {
    yandexMapsService.getCoordinates(arrivalPoint).then((response) => {
      if (response)
        getWeather(response).then((r) => setArrivalWeather(r))
    })

  }, [arrivalPoint])

  const mapWeatherCodeToType = (code: number): WeatherType => {
    if ([0].includes(code)) return WeatherType.SUNNY;
    if ([1, 2].includes(code)) return WeatherType.PARTLY_CLOUDY;
    if ([3, 45, 48].includes(code)) return WeatherType.CLOUDY;
    if ([51, 53, 55, 56, 57, 61].includes(code)) return WeatherType.LITTLE_RAIN;
    if ([63, 65, 66, 67, 80, 81, 82].includes(code)) return WeatherType.RAINFALL;
    if ([71, 73, 75, 77, 85, 86].includes(code)) return WeatherType.SNOW;
    if ([95, 96, 99].includes(code)) return WeatherType.THUNDERSTORM;
    // if ([windyCodeYouDefine].includes(code)) return WeatherType.WINDY;

    return WeatherType.CLOUDY;
  };

  if (!departurePoint && !arrivalPoint) {
    return <></>
  }

  return (
    <div id="weather" className={s.wrapper}>
      <div className="container container-48">
        <div className={clsx(s.title, 'title white-color')}>Погода</div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          centeredSlides={false} // важно!
          style={{ overflow: 'hidden', width: 'fit-content' }}
        >
          {departurePoint && (
            <SwiperSlide
              style={{
                width: 'fit-content',
              }}
            >
              <WeatherItem
                city={departurePoint}
                temperature={departureWeather?.temperature}
                wind={departureWeather?.windspeed}
                type={mapWeatherCodeToType(departureWeather?.weathercode)}
              />
            </SwiperSlide>
          )}

          {arrivalPoint && (
            <SwiperSlide
              style={{
                width: 'fit-content',
              }} >
              <WeatherItem
                city={arrivalPoint}
                temperature={arrivalWeather?.temperature}
                wind={arrivalWeather?.windspeed}
                type={mapWeatherCodeToType(arrivalWeather?.weathercode)}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div >
  )
}

export default Weather
