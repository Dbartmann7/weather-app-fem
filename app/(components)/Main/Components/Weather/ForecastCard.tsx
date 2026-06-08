"use client"
import Image from "next/image"
import RainIcon from "@/public/images/icon-rain.webp"
import { DailyWeatherData } from "@/app/util/types"
import { dateToDay } from "@/app/util/DateConversions"
import { use } from "react"
import { UnitContext } from "@/app/util/UnitContext"
import { temp } from "@/app/util/UnitConversions"
import { WCtoIcon } from "@/public/images/WeatherCode"


type ForecastCardProps = {
    dayData:DailyWeatherData
}


export default function ForecastCard({dayData}:ForecastCardProps){
    const unitContext = use(UnitContext)
    if(!unitContext){
        throw new Error("Preferences not available")
    }

    return(
        <div className="flex flex-col justify-around px-3 py-3 bg-light-bg border border-border-color rounded-xl items-center w-25 aspect-2/3">
            <h3>{dateToDay(dayData.time).slice(0, 3)}</h3>
            <Image className="w-2/3" src={WCtoIcon(dayData.weatherCode) ?? ""} alt={"Rain"}/>
            <div className="flex flex-row justify-between w-full">
                <p>{Math.floor(temp(dayData.tempMax, unitContext.preferences))}</p>
                <p>{Math.floor(temp(dayData.tempMin, unitContext.preferences))}</p>
            </div>
        </div>
    )
}