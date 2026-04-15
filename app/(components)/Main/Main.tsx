import Image from "next/image";

import DailyForecast from "./Components/DailyForecast";
import ForecastCard from "./Components/ForecastCard";
import HourlyForecast from "./Components/HourlyForecast";
import InfoCard from "./Components/InfoCard";
// import SearchBar from "./Components/SearchBar";
import TempDisplay from "./Components/TempDisplay";

import SearchLogo from "@/public/images/icon-search.svg"
import Search from "./Components/Search";

export default function Main() {


    return(
        <main className="flex flex-col self-center items-center  gap-6  pb-14 w-full =md:w-full =md:max-w-full">
            <h1 className="py-12 font-mono font-bold text-center leading-[1.1]">How's the sky looking today?</h1>
            <Search/>
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