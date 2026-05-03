import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import InfoCard from "./InfoCard";
import TempDisplay from "./TempDisplay";






export default function Weather(){
    

    return(
        <div className="flex flex-col xl:flex-row w-full gap-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <TempDisplay/>
                    <div className="grid grid-cols-2 gap-4 w-full md:flex md:flex-row">
                        <InfoCard label="Feels Like" value="18°"/>
                        <InfoCard label="Humidity" value="46%"/>
                        <InfoCard label="Wind" value="14 km/h"/>
                        <InfoCard label="Precipitation" value="0 mm"/>
                    </div>
                </div>
                <DailyForecast/>
            </div>
            <HourlyForecast/>
        </div>
    )
}