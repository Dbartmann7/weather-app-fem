import { cacheLife } from "next/cache";
import { fetchWeatherApi } from "openmeteo";
import { DailyWeatherData, HourlyWeatherData, UnitPreferences, WeatherData, WrappedResponse } from "./types";

let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const convertDayObjToArr: (data:any, utcOffsetSeconds:number) => DailyWeatherData[] = (data:any, utcOffsetSeconds:number) => {
    let result = []
    let weatherCode:number[] =  data.variables(0)!.valuesArray() ?? []
    let tempMax:number[] = data.variables(1)!.valuesArray() ?? []
    let tempMin:number[] = data.variables(2)!.valuesArray() ?? []
    console.log(utcOffsetSeconds)

    for(let i=0; i<tempMax.length; i++){
        result.push(
            {
                time: new Date((Number(data.time()) + i * data.interval() + utcOffsetSeconds) * 1000),
                tempMax: tempMax[i],
                tempMin: tempMin[i],
                weatherCode: weatherCode[i]
            }
        )
    }

    return result
}

const convertHourObjToArr: (data:any, utcOffsetSeconds:number) => HourlyWeatherData[] = (data:any, utcOffsetSeconds:number) => {
    let result = []
    let temp:number[] = data.variables(0).valuesArray() ?? []
    let weatherCode:number[] = data.variables(1).valuesArray() ?? []

    for(let i=0; i<temp.length; i++){
        result.push(
            {
                time: new Date((Number(data.time()) + i * data.interval() + utcOffsetSeconds) * 1000),
                temp: temp[i],
                weatherCode: weatherCode[i]
            }
        )
    }
    
    return result
}

export const getWeatherData: (lat:number, long:number, name:string, country:string) => Promise<WrappedResponse> = async (lat:number, long:number, name:string, country:string) => {
    "use cache"

    cacheLife({revalidate:15 * 1000})
    // await sleep(5000)
    const params = {
        latitude: lat,
        longitude: long,
        daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
        hourly: ["temperature_2m", "weather_code"],
        current: ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation", "wind_speed_10m", "weather_code"],
        past_days: 0,
        forecast_days: 7,
        timezone: "auto",
        
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const latitude = response.latitude();
    const longitude = response.longitude();
    const elevation = response.elevation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
    );

    const current = response.current()!;
    const hourly = response.hourly()!;
    const daily = response.daily()!;
   
    const dayArr = convertDayObjToArr(daily, utcOffsetSeconds)
    const hourArr = convertHourObjToArr(hourly, utcOffsetSeconds)
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature_2m:current.variables(0)!.value(),
            relative_humidity_2m: current.variables(1)!.value(),
            apparent_temperature: current.variables(2)!.value(),
            precipitation: current.variables(3)!.value(),
            wind_speed_10m: current.variables(4)!.value(),
            weather_code: current.variables(5)!.value(),
            name:name,
            country:country
        },
        hourly: hourArr,
        daily: dayArr
    };

    // // The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
    // console.log(
    //     `\nCurrent time: ${weatherData.current.time}\n`,
    //     `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
    //     `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
    //     `\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
    //     `\nCurrent precipitation: ${weatherData.current.precipitation}`,
    //     `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
    //     `\nCurrent weather_code: ${weatherData.current.weather_code}`,
    // );
    return {
        ok:true,
        data:weatherData
    }
    console.log("\nHourly data:\n", weatherData.hourly)
    // console.log("\nDaily data:\n", weatherData.daily)
}