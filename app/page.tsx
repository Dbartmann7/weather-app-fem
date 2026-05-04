import Main from "./(components)/Main/Main";

import { getWeatherData } from "./util/getWeatherData";
import { WeatherData } from "./util/types";
export default async function Page({
  searchParams,
}: {
  searchParams: { lat?: number; long?: number };
}) {
  let {lat, long} = await searchParams
  let weatherData: WeatherData | null = null;
  
  if(lat && long){
    weatherData = await getWeatherData(lat, long) 
  }
  
   
  return (
    <div className="w-screen h-screen p-5 flex flex-col text-white">
      <Main weatherData={weatherData}/>
    </div>
  );
}
