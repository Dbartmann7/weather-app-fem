
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
  
  // show Edinbugh weather if no lat or log is set
  if(!lat || !long){
    lat = 55.9520
    long = -3.19648
  }
  if(lat && long){
    weatherData = await getWeatherData(lat, long) 
  }else{
    
  }
  
   
  return (
    <div className="w-screen h-screen p-5 flex flex-col text-white">
      <Main weatherData={weatherData}/>
    </div>
  );
}
