"use client"

import { precip, speed, temp } from "@/app/util/UnitConversions"
import InfoCard from "./InfoCard"
import { CurrentWeatherData } from "@/app/util/types"
import { use } from "react"
import { UnitContext } from "@/app/util/UnitContext"

type CurrentInfoCardsProps = {
    data:CurrentWeatherData
}

export const CurrentInfoCards = ({data}:CurrentInfoCardsProps) => {
    
    const unitContext = use(UnitContext)
    if(!unitContext){
        throw new Error("Preferences not available")
    }
    const feelsTemp = data.apparent_temperature ?? 0
    const precipMm = data.precipitation ?? 0
    const windSpeed = data.wind_speed_10m ?? 0

    return (
        <div className="grid grid-cols-2 gap-4 w-full md:flex md:flex-row">
            <InfoCard label="Feels Like" value={Math.floor(temp(feelsTemp, unitContext.preferences))} unit="°"/>
            <InfoCard label="Humidity" value={Math.floor(data.relative_humidity_2m)} unit="%"/>
            <InfoCard label="Wind" value={Math.floor(speed(windSpeed, unitContext.preferences))} unit={" " + unitContext.preferences.speed}/>
            <InfoCard label="Precipitation" value={Math.floor(precip(precipMm, unitContext.preferences))} unit={" " + unitContext.preferences.precip}/>
        </div>
    )
}