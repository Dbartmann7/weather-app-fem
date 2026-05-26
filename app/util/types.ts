export type WeatherData = {
  current: CurrentWeatherData 
  hourly: HourlyWeatherData[]
  daily: DailyWeatherData[]
}

export type CurrentWeatherData = {
  time: Date
  temperature_2m: number
  relative_humidity_2m: number
  apparent_temperature: number
  precipitation: number
  wind_speed_10m: number
  weather_code: number
  name:string
  country:string
}

export type HourlyWeatherData = {
  time: Date
  temp: number
  weatherCode: number
}


export type DailyWeatherData = {
  time:Date
  weatherCode: number
  tempMax: number
  tempMin: number
}


export type OptionType = {
  type: "option" | "section"
  label:string
  onSelect?: (...args:any[]) => void
  options?:OptionType[]
}