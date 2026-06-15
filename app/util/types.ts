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

export type LocationReturnType = {
  ok:boolean
  error?:string
  data:string[]
}

export type MenuItem = OptionType | SectionType

export type SectionType = {
  type:"section",
  label:string,
  options: OptionType[]
}

export type OptionType = {
  type: "option"
  label:string
  onSelect: (...args:any[]) => void
  value?:string
  selected?:boolean
}

export type UnitPreferences = {
  temp: "c" | "f"
  precip: "mm" | "in"
  speed: "km/h" | "mph"
}