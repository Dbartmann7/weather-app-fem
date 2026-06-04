"use client"
import Image from "next/image"

import SearchIcon from "@/public/images/icon-search.svg"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { getLocationsData } from "@/app/util/getLocationsData"




export default function Search(){
    
    const [locationResults, setLocationResults] = useState([]);
    const [location, setLocation] = useState<string>("")
    const [showList, setShowList] = useState<boolean>(false)
    const router = useRouter()


    // close search results if user clicks outside
    let searchRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if(searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setShowList(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)


        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    useEffect(() => {
        console.log(locationResults)
    }, [locationResults])
    
    const submitLocation = async () => {
        setShowList(true)
        const data = await getLocationsData(location)
        setLocationResults(data)
    }
    
    const submitLatLong = (locationData:any) => {
        setShowList(false)
        setLocation(`${locationData.name}, ${locationData.admin1}`)
        let params = new URLSearchParams()
        params.set("lat", locationData.latitude)
        params.set("long", locationData.longitude)
        params.set("name", locationData.name)
        params.set("country", locationData.country)
        router.push(`?${params.toString()}`)
    }

    return(
        <div className="flex flex-col justify-center w-full max-w-xl  sm:flex-row gap-3" ref={searchRef}>
                <SearchBar value={location} setValue={setLocation} submitLocation={submitLocation} submitLatLong={submitLatLong} locations={locationResults} showList={showList}/>
                <button className="w-full h-12 px-6 rounded-xl bg-light-blue sm:max-w-fit" onClick={submitLocation}>
                    Search
                </button>
        </div>
    )
}

type SearchBarProps = {
    value:string, 
    setValue:Dispatch<SetStateAction<string>>, 
    submitLocation:() => void, 
    submitLatLong:(locationData:any) => void,
    locations:any[],
    showList:boolean
}

function SearchBar({value, setValue, submitLocation, submitLatLong, locations, showList}:SearchBarProps){
    
    return(
        <div className="flex bg-light-bg rounded-xl w-full h-12 px-6 relative">
            <Image src={SearchIcon} alt="search" className="w-6"/>
            <input
                type="query"
                className="w-full px-4 focus-visible:outline-0"
                placeholder="Search for a place..."
                value={value}
                onInput={(e) => setValue(e.currentTarget.value)}
                onKeyDown={(e) => {if(e.key === 'Enter') submitLocation()}}
            />

            {showList ? <SearchDropdown locations={locations} submitLatLong={submitLatLong}/> : null}
        </div>
    )
}



function SearchDropdown({locations, submitLatLong}: {locations:any[], submitLatLong:(locationData:any) => void}){
    

    return(
        <div className="absolute flex flex-col bg-light-bg rounded-xl w-full h-fit min-h-14 left-0 top-13 z-50">
            <div className="my-2 px-2">
            {
                locations.map((location, i) => {
                    return(
                        <div className="flex w-full h-10 hover:bg-white/10 rounded-md"  key={i} onClick={() => submitLatLong(location)}>
                            <p className="my-auto px-2">{`${location.name}, ${location.admin1}, ${location.country}`}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}


