"use client"
import Image from "next/image"

import SearchIcon from "@/public/images/icon-search.svg"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { getLocationsData } from "@/app/actions"


type SearchBarProps = {
    value:string, 
    setValue:Dispatch<SetStateAction<string>>, 
    submitLocation:() => void, 
    locations:any[],
    searchTriggered:boolean
}




function SearchDropdown({locations}: {locations:any[]}){
    

    return(
        <div className="absolute flex flex-col bg-light-bg rounded-xl w-full h-fit min-h-14 left-0 top-13 z-50">
            <div className="my-2 px-2">
            {
                locations.map((location, i) => {
                    return(
                        <div className="flex w-full h-10 hover:bg-white/10 rounded-md"  key={i}>
                            <p className="my-auto px-2">{`${location.name}, ${location.admin1}, ${location.country_code}`}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function SearchBar({value, setValue, submitLocation, locations, searchTriggered}:SearchBarProps){
    
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

            {searchTriggered ? <SearchDropdown locations={locations}/> : null}
        </div>
    )
}


export default function Search(){
    const [locationResults, setLocationResults] = useState([]);
    const [location, setLocation] = useState<string>("")
    const [searchTriggered, setSearchTriggered] = useState<boolean>(false)
    const router = useRouter()

    // close search results if user clicks outside
    let searchRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if(searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setSearchTriggered(false)
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
        setSearchTriggered(true)
        const data = await getLocationsData(location)
        setLocationResults(data)
    }
    


    return(
        <div className="flex flex-col justify-center w-full max-w-xl  sm:flex-row gap-3" ref={searchRef}>
                <SearchBar value={location} setValue={setLocation} submitLocation={submitLocation} locations={locationResults} searchTriggered={searchTriggered}/>
                <button className="w-full h-12 px-6 rounded-xl bg-light-blue sm:max-w-fit" onClick={submitLocation}>
                    Search
                </button>
        </div>
    )
}