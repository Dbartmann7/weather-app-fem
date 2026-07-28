import { WeatherSearchParams } from "@/app/util/types";
import DailyForecast, { DailyForecastSkeleton } from "./DailyForecast";
import HourlyForecast, { HourlyForecastSkeleton } from "./HourlyForecast";

import CurrentDisplay, { CurrentDisplaySkeleton } from "./CurrentDisplay";
import { getWeatherData, getWeatherDataLoadingMock } from "@/app/util/getWeatherData";
import { cookies } from "next/headers";

type WeatherProps = {
    searchParams:WeatherSearchParams
}

const Weather = async ({searchParams}:WeatherProps) =>{
    const cookieStore = await cookies()
    const testSetting = cookieStore.get("setting")
    const weatherFetch = testSetting?.value === "Loading" ? getWeatherDataLoadingMock : getWeatherData
    const {lat, long, name, country} = {...searchParams}
    
    if(testSetting?.value === "Error"){
        throw new Error("Error test.")
    }

    const response = await weatherFetch(lat, long, name, country)
    const data = response.data
     
    return(
        <div className="flex flex-col xl:flex-row w-full gap-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col csm:flex-row md:flex-col gap-4">
                    <CurrentDisplay data={data.current}/>
                </div>
                <DailyForecast data={data?.daily}/>
            </div>
            <HourlyForecast data={data?.hourly}/>
        </div>
    )
}

export const WeatherSkeleton = () => {

    return (
        <div className="flex flex-col xl:flex-row w-full gap-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col csm:flex-row md:flex-col gap-4">
                    <CurrentDisplaySkeleton/>
                </div>
                <DailyForecastSkeleton/>
            </div>
            <HourlyForecastSkeleton/>
        
        </div>
    )
}

export default Weather