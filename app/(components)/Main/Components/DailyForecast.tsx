import ForecastCard from "./ForecastCard";


export default function DailyForecast(){

    return(
        <div>
            <h3 className="font-semibold mb-3">Daily forecast</h3>
            <div className="grid grid-rows-3 grid-cols-3 gap-4">
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
            </div>
        </div>
    )
}