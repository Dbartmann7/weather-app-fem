import { NextResponse } from "next/server";
import { WrappedResponse } from "./types";

export const getLocationsData: (location:string) => Promise<WrappedResponse> = async (location:string) => {
        const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        // const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`)
        const res = await fetch(`/api/location?location=${encodeURIComponent(location)}`);
        const data = await res.json()
        await sleep(10000)
        return data
        
  
}   


