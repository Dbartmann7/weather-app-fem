import { WeatherData } from "@/app/util/types";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import InfoCard from "./InfoCard";
import TempDisplay from "./TempDisplay";






export default function Weather({data}:{data:WeatherData}){
    

    return(
        <div className="flex flex-col xl:flex-row w-full gap-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <TempDisplay/>
                    <div className="grid grid-cols-2 gap-4 w-full md:flex md:flex-row">
                        <InfoCard label="Feels Like" value={Math.round(data?.current.apparent_temperature) + "°"}/>
                        <InfoCard label="Humidity" value={Math.round(data?.current.relative_humidity_2m) + "%"}/>
                        <InfoCard label="Wind" value={Math.round(data?.current.wind_speed_10m) + " km/h"}/>
                        <InfoCard label="Precipitation" value={data?.current.precipitation + " mm"}/>
                    </div>
                </div>
                <DailyForecast data={data?.daily}/>
            </div>
            <HourlyForecast data={data?.hourly}/>
        </div>
    )
}