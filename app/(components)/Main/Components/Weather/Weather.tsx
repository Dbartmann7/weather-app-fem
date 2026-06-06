import { UnitPreferences, WeatherData } from "@/app/util/types";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

import CurrentDisplay from "./CurrentDisplay";






export default async function Weather({data}:{data:WeatherData}){

    
     
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