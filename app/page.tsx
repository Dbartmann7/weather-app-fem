import Main from "./(components)/Main/Main";
import { getWeatherData } from "./util/getWeatherData";
import { WeatherData } from "./util/types";

export default async function Page({
  searchParams,
}: {
  searchParams: { lat?: number; long?: number; name?:string; country?:string };
}) {
 
  let {lat, long, name, country} = await searchParams
  let weatherData: WeatherData | null = null;
  
  // show Edinbugh weather if no lat or log is set
  if(!lat || !long || !name || !country){
    lat = 55.9520
    long = -3.19648
    name = "Edinburgh"
    country = "United Kingdom"
  }

  
    weatherData = await getWeatherData(lat, long, name, country) 
  
  

  return (

    <div className="flex flex-col text-white">
      <Main weatherData={weatherData}/>
    </div>
    
  );
}
