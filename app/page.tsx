"use client"
import Main from "./(components)/Main/Main";
import PageHeader from "./(components)/Main/Components/PageHeader"
import { getLocationsData, getWeather } from "./actions";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const test = async () => {
      //const data = await getWeather(55.9521, -3.1965)
      const data = await getLocationsData("Berlin")
    }
    test()
  }, [])
 
  return (
    <div className="w-screen h-screen p-5 flex flex-col text-white">
      <Main/>
    </div>
  );
}
