
import { Suspense } from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import Search from "./Components/Search/Search";

import Weather, { WeatherSkeleton } from "./Components/Weather/Weather";
import { WeatherData, WeatherSearchParams } from "@/app/util/types";


type MainProps = {
    searchParams: WeatherSearchParams
}

export default function Main({searchParams}:MainProps) {
    
    return(
        <main className="flex flex-col self-center items-center gap-6 w-full max-w-85.75 csm:max-w-200 xl:max-w-300">
            <h1 className="py-10 font-mono font-bold text-center leading-[1.1]">How's the sky looking today?</h1>
            <Search/>
            <Suspense fallback={<WeatherSkeleton/>}>
                <Weather searchParams={searchParams}/>
            </Suspense>
        </main>
    )
}