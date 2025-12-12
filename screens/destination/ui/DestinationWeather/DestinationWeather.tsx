'use client'

import { IWeatherData, IDayForecast } from "@/shared/types/types"
import clsx from "clsx"
import s from './DestinationWeather.module.scss'

interface Props {
  weatherDataJson?: string
}

// Иконки погоды по типу
const getWeatherIcon = (icon: string): string => {
  const icons: Record<string, string> = {
    'sunny': '☀️',
    'partly-cloudy': '⛅',
    'cloudy': '☁️',
    'fog': '🌫️',
    'drizzle': '🌦️',
    'rain': '🌧️',
    'rain-heavy': '🌧️',
    'sleet': '🌨️',
    'snow': '❄️',
    'snow-heavy': '❄️',
    'thunderstorm': '⛈️',
    'unknown': '🌡️'
  }
  return icons[icon] || icons['unknown']
}

const WeatherCard = ({ city, forecast }: { city: string; forecast: IDayForecast[] }) => {
  if (!forecast || forecast.length === 0) return null

  const today = forecast[0]
  const nextDays = forecast.slice(1, 5)

  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <h3 className={s.cityName}>{city}</h3>
        <div className={s.todayWeather}>
          <span className={s.todayIcon}>{getWeatherIcon(today.icon)}</span>
          <span className={s.todayTemp}>{today.tempMax > 0 ? '+' : ''}{today.tempMax}°</span>
        </div>
        <p className={s.todayDesc}>{today.description}</p>
      </div>

      <div className={s.forecast}>
        {nextDays.map((day, idx) => (
          <div key={idx} className={s.forecastDay}>
            <span className={s.dayName}>{day.dayOfWeek}</span>
            <span className={s.dayIcon}>{getWeatherIcon(day.icon)}</span>
            <span className={s.dayTemp}>
              {day.tempMax > 0 ? '+' : ''}{day.tempMax}°
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const DestinationWeather = ({ weatherDataJson }: Props) => {
  if (!weatherDataJson) return null

  let weatherData: IWeatherData
  try {
    weatherData = JSON.parse(weatherDataJson)
  } catch {
    return null
  }

  if (!weatherData.from?.forecast?.length && !weatherData.to?.forecast?.length) {
    return null
  }

  return (
    <section id="weather" className={s.weather}>
      <div className="container">
        <h2 className={clsx('title', s.title)}>Погода на маршруте</h2>

        <div className={s.cards}>
          {weatherData.from?.forecast?.length > 0 && (
            <WeatherCard city={weatherData.from.city} forecast={weatherData.from.forecast} />
          )}
          {weatherData.to?.forecast?.length > 0 && (
            <WeatherCard city={weatherData.to.city} forecast={weatherData.to.forecast} />
          )}
        </div>

        {weatherData.updatedAt && (
          <p className={s.updated}>
            Обновлено: {new Date(weatherData.updatedAt).toLocaleString('ru-RU', {
              day: 'numeric',
              month: 'long',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        )}
      </div>
    </section>
  )
}

export default DestinationWeather
