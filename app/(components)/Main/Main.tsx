import DailyForecast from "./Components/DailyForecast";
import ForecastCard from "./Components/ForecastCard";
import HourlyForecast from "./Components/HourlyForecast";
import InfoCard from "./Components/InfoCard";
import SearchBar from "./Components/SearchBar";
import TempDisplay from "./Components/TempDisplay";


export default function Main() {


    return(
        <main className="flex flex-col =bg-red-600 gap-6 max-w-96 pb-14 self-center">
            <h1 className="py-12 font-mono font-bold text-center leading-[1.1]">How's the sky looking today?</h1>
            <div className="flex flex-col gap-3">
                <SearchBar/>
                <button className="w-full h-14 rounded-xl bg-light-blue">
                    Search
                </button>
            </div>
            <TempDisplay/>
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
                <InfoCard label="Feels Like" value="18°"/>
                <InfoCard label="Humidity" value="46%"/>
                <InfoCard label="Wind" value="14 km/h"/>
                <InfoCard label="Precipitation" value="0 mm"/>
            </div>
            <DailyForecast/>
            <HourlyForecast/>
        </main>
    )
}