import { UnitPreferences, WeatherData } from "@/app/util/types";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import InfoCard from "./InfoCard";
import CurrentDisplay from "./CurrentDisplay";
import { cookies } from "next/headers";
import { precip, speed, temp } from "@/app/util/UnitConversions";
import { getUnitPreferences } from "@/app/util/UnitPreferences";






export default async function Weather({data}:{data:WeatherData}){

    

    let unitPreferences:UnitPreferences = await getUnitPreferences()

     
    return(
        <div className="flex flex-col xl:flex-row w-full gap-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <CurrentDisplay data={data.current}/>
                </div>
                <DailyForecast data={data?.daily}/>
            </div>
            <HourlyForecast data={data?.hourly}/>
        </div>
    )
}