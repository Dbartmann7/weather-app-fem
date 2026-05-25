
import PageHeader from "./Components/PageHeader/PageHeader";
import Search from "./Components/Search/Search";

import Weather from "./Components/Weather/Weather";
import { WeatherData } from "@/app/util/types";


export default async function Main({weatherData}:{weatherData:WeatherData | null}) {

     
    return(
        <main className="flex flex-col self-center items-center  gap-6  pb-14 w-full max-w-85.75 sm:max-w-200 xl:max-w-300">
            <PageHeader/>
            <h1 className="py-12 font-mono font-bold text-center leading-[1.1]">How's the sky looking today?</h1>
            <Search/>
            <Weather data={weatherData}/>
        </main>
    )
}