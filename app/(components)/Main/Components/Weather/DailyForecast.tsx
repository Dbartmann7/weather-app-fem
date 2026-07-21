import {  DailyWeatherData } from "@/app/util/types";
import ForecastCard, { ForecastCardSkeleton } from "./ForecastCard";


export default function DailyForecast({data}:{data:DailyWeatherData[]}){

    return(
        <div>
            <h3 className="font-semibold mb-3">Daily forecast</h3>
            <div className="grid grid-cols-3 csm:flex gap-4 w-full">
                {
                    data?.map((day,i) => {
                        return <ForecastCard key={i} dayData={day}/>
                    })
                }
            </div>
        </div>
    )
}

export const DailyForecastSkeleton = () => {

    return (
        <div>
            <h3 className="font-semibold mb-3">Daily forecast</h3>
            <div className="grid grid-cols-3 sm:flex gap-4 w-full">
                <ForecastCardSkeleton/>
                <ForecastCardSkeleton/>
                <ForecastCardSkeleton/>
                <ForecastCardSkeleton/>
                <ForecastCardSkeleton/>
                <ForecastCardSkeleton/>
                <ForecastCardSkeleton/>
            </div>
        </div>
    )
}