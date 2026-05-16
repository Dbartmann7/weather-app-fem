
import Image from "next/image"
import RainIcon from "@/public/images/icon-rain.webp"
import { DailyWeatherData } from "@/app/util/types"
import { dateToDay } from "@/app/util/DateConversions"


type ForecastCardProps = {
    dayData:DailyWeatherData
}


export default function ForecastCard({dayData}:ForecastCardProps){

    return(
        <div className="flex flex-col justify-around px-3 py-3 bg-light-bg border border-border-color rounded-xl items-center w-25 aspect-2/3">
            <h3>{dateToDay(dayData.time).slice(0, 3)}</h3>
            <Image className="w-2/3" src={RainIcon} alt={"Rain"}/>
            <div className="flex flex-row justify-between w-full">
                <p>{dayData.tempMax}</p>
                <p>{dayData.tempMin}</p>
            </div>
        </div>
    )
}