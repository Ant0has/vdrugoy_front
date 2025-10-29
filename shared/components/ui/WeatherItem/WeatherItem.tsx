import { WeatherType } from '@/shared/types/enums'
import React, { FC, ReactElement } from 'react'
import s from './WeatherItem.module.scss'
import SunnyIcon from '@/public/icons/weather/SunnyIcon'
import CloudyIcon from '@/public/icons/weather/CloudyIcon'
import PartlyCloudyIcon from '@/public/icons/weather/PartlyCloudyIcon'
import SnowIcon from '@/public/icons/weather/SnowIcon'
import LittleRainIcon from '@/public/icons/weather/LittleRainIcon'
import RainfallIcon from '@/public/icons/weather/RainfallIcon'
import ThunderstormIcon from '@/public/icons/weather/ThunderstormIcon'
import WindyIcon from '@/public/icons/weather/WindyIcon'

export interface IProps {
  city: string,
  wind: string,
  temperature: string,
  type: WeatherType
}

const WeatherItem: FC<IProps> = (props) => {
  const { city, wind, temperature, type } = props

  const now = new Date();
  const weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(now);
  const dateFormatted = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }).format

  const weatherTypes: { [key in WeatherType]: string } = {
    [WeatherType.SUNNY]: 'Солнечно',
    [WeatherType.CLOUDY]: 'Облачно',
    [WeatherType.PARTLY_CLOUDY]: 'Облачно с прояснениями',
    [WeatherType.SNOW]: 'Снег',
    [WeatherType.LITTLE_RAIN]: 'Маленький дождь',
    [WeatherType.RAINFALL]: 'Ливень',
    [WeatherType.THUNDERSTORM]: 'Гроза',
    [WeatherType.WINDY]: 'Ветренно',
  }

  const weatherIcons: { [key in WeatherType]: ReactElement } = {
    [WeatherType.SUNNY]: <SunnyIcon />,
    [WeatherType.CLOUDY]: <CloudyIcon />,
    [WeatherType.PARTLY_CLOUDY]: <PartlyCloudyIcon />,
    [WeatherType.SNOW]: <SnowIcon />,
    [WeatherType.LITTLE_RAIN]: <LittleRainIcon />,
    [WeatherType.RAINFALL]: <RainfallIcon />,
    [WeatherType.THUNDERSTORM]: <ThunderstormIcon />,
    [WeatherType.WINDY]: <WindyIcon />,
  }

  return (
    <div className={s.container}>
      <div className={s.block}>
        <div className={s.left}>
          <div className={s.city}>{city}</div>

          <div className={s.weekday}>{weekday}</div>
          <div className={s.date}>{dateFormatted()}</div>

          <div className={s.wind}>ветер {wind} км/ч</div>
        </div>
        <div className={s.right}>
          <div className={s.temperature}>{temperature}</div>
          <div className={s.weatherIcon}>{weatherIcons[type]}</div>
        </div>
      </div>


      <div className={s.weather}>{weatherTypes[type]}</div>

    </div>
  )
}

export default WeatherItem