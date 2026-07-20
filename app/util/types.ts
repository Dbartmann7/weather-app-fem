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

export type WrappedResponse = {
  ok:boolean
  error?:string
  data:any
}

export type MenuItem = OptionType | SectionType

export type SectionType = {
  type:"section",
  label:string,
  options: OptionType[]
  selected?:string
}

export type OptionType = {
  type: "option"
  label:string
  onSelect: (...args:any[]) => void
  value?:string
}

export type UnitPreferences = {
  temp: "c" | "f"
  precip: "mm" | "in"
  speed: "km/h" | "mph"
}

export type WeatherSearchParams = {
  lat: number; 
  long: number; 
  name:string; 
  country:string 
}

export type LocationData = {
  name:string,
  latitude:string,
  longitude:string,
  country_code:string,
  country:string,
  admin1?:string,
  admin2?:string
}

// let test = {
//     id: 5722064,
//     name: 'Dallas',
//     latitude: 44.91928,
//     longitude: -123.31705,
//     elevation: 99,
//     feature_code: 'PPLA2',
//     country_code: 'US',
//     admin1_id: 5744337,
//     admin2_id: 5746351,
//     timezone: 'America/Los_Angeles',
//     population: 15277,
//     postcodes: [ '97338' ],
//     country_id: 6252001,
//     country: 'United States',
//     admin1: 'Oregon',
//     admin2: 'Polk'
//   }
