import { UnitPreferences, WeatherData } from "@/app/util/types";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import InfoCard from "./InfoCard";
import TempDisplay from "./TempDisplay";
import { cookies } from "next/headers";
import { precip, speed, temp } from "@/app/util/UnitConversions";






export default async function Weather({data}:{data:WeatherData}){
    const cookiesStore = await cookies()
    let unitPreferenceString = cookiesStore.get("units")?.value
    const feelsTemp = data.current.apparent_temperature ?? 0
    const precipMm = data.current.precipitation ?? 0
    const windSpeed = data.current.wind_speed_10m ?? 0

    let unitPrefObj:UnitPreferences
    
    if(!unitPreferenceString){
        unitPrefObj = {
            "overall":null,
            "temp": "c",
            "precip": "mm",
            "speed": "km/h"
        }
    }else{
        unitPrefObj = JSON.parse(unitPreferenceString)
    }
     
    return(
        <div className="flex flex-col xl:flex-row w-full gap-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <TempDisplay data={data.current} preferences={unitPrefObj}/>
                    <div className="grid grid-cols-2 gap-4 w-full md:flex md:flex-row">
                        <InfoCard label="Feels Like" value={Math.floor(temp(feelsTemp, unitPrefObj))} unit="°"/>
                        <InfoCard label="Humidity" value={Math.floor(data?.current.relative_humidity_2m)} unit="%"/>
                        <InfoCard label="Wind" value={Math.floor(speed(windSpeed, unitPrefObj))} unit={" " + unitPrefObj.speed}/>
                        <InfoCard label="Precipitation" value={Math.floor(precip(precipMm, unitPrefObj))} unit={" " + unitPrefObj.precip}/>
                    </div>
                </div>
                <DailyForecast data={data?.daily}/>
            </div>
            <HourlyForecast data={data?.hourly}/>
        </div>
    )
}