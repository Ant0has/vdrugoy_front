'use-client'

import { PointsContext } from "@/app/providers";
import { WeatherType } from "@/shared/types/enums";
import clsx from "clsx";
import { FC, useContext, useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WeatherItem from "./WeatherItem/WeatherItem";
import s from './Weather.module.scss';


const Weather: FC = () => {
  const { departurePoint, arrivalPoint } = useContext(PointsContext)

  const [departureWeather, setDepartureWeather] = useState<any>()
  const [arrivalWeather, setArrivalWeather] = useState<any>()

  const getWeather = async () => {
    // const res = await fetch(
    //   `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    // );
    // const data = await res.json();
    // return data.current_weather;

    const accessKey = process.env.NEXT_PUBLIC_YANDEX_WEATHER_API_KEY;

    const headers = {
      'X-Yandex-Weather-Key': accessKey || ''
    };

    const response = await fetch('https://api.weather.yandex.ru/v2/forecast?lat=52.37125&lon=4.89388', { headers });
    const data = await response.json();
    console.log(data,'--data');
    setDepartureWeather(data.fact);
    setArrivalWeather(data.fact);
    // return data.fact;
  };

  useEffect(() => {
    // yandexMapsService.getCoordinates(departurePoint).then((response) => {
    //   if (response)
    //     getWeather(response).then((r) => setDepartureWeather(r))
    // })
    getWeather()

  }, [])

  // useEffect(() => {
  //   yandexMapsService.getCoordinates(arrivalPoint).then((response) => {
  //     if (response)
  //       getWeather(response).then((r) => setArrivalWeather(r))
  //   })

  // }, [arrivalPoint])

  const mapWeatherCodeToType = (condition: string): WeatherType => {
    // if ([0].includes(code)) return WeatherType.SUNNY;
    // if ([1, 2].includes(code)) return WeatherType.PARTLY_CLOUDY;
    // if ([3, 45, 48].includes(code)) return WeatherType.CLOUDY;
    // if ([51, 53, 55, 56, 57, 61].includes(code)) return WeatherType.LITTLE_RAIN;
    // if ([63, 65, 66, 67, 80, 81, 82].includes(code)) return WeatherType.RAINFALL;
    // if ([71, 73, 75, 77, 85, 86].includes(code)) return WeatherType.SNOW;
    // if ([95, 96, 99].includes(code)) return WeatherType.THUNDERSTORM;
    // // if ([windyCodeYouDefine].includes(code)) return WeatherType.WINDY;

    if (condition === 'clear') return WeatherType.SUNNY;
    if (condition === 'partly-cloudy') return WeatherType.PARTLY_CLOUDY;
    if (condition === 'cloudy') return WeatherType.CLOUDY;
    if (condition === 'rain') return WeatherType.LITTLE_RAIN;
    if (condition === 'rain') return WeatherType.RAINFALL;
    if (condition === 'snow') return WeatherType.SNOW;
    if (condition === 'thunderstorm') return WeatherType.THUNDERSTORM;
    if (condition === 'windy') return WeatherType.WINDY;

    return WeatherType.CLOUDY;
  };

  if (!departureWeather || !arrivalWeather) return null;

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
          {departureWeather && (
            <SwiperSlide
              style={{
                width: 'fit-content',
              }}
            >
              <WeatherItem
                city={'Москва'}
                temperature={departureWeather?.temp}
                wind={departureWeather?.wind_speed}
                type={mapWeatherCodeToType(departureWeather?.condition)}
              />
            </SwiperSlide>
          )}

          {arrivalWeather && (
            <SwiperSlide
              style={{
                width: 'fit-content',
              }} >
              <WeatherItem
                city={'Воронеж'}
                temperature={arrivalWeather?.temp}
                wind={arrivalWeather?.wind_speed}
                type={mapWeatherCodeToType(arrivalWeather?.condition)}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div >
  )
}

export default Weather
