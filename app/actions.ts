import { fetchWeatherApi } from "openmeteo"

export const getLocationsData = async (location:string) => {

    let res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`)
    let data = await res.json()

    
    return data.results || []
}   


