"use client"
import Image from "next/image"

import SearchIcon from "@/public/images/icon-search.svg"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { getLocationsData } from "@/app/util/getLocationsData"
import { OctagonAlert } from "lucide-react"
import { LocationData } from "@/app/util/types"

type DisplayState = "ACTIVE" | "IDLE" | "ERROR" | "LOADING"

type SearchState = {status:"IDLE"}
                |  {status:"LOADING"}
                |  {status:"ERROR", error:string}
                |  {status:"ACTIVE", locationResults:LocationData[]}
                
let shouldShowList = (displayState:DisplayState) => {
    return ["ACTIVE", "ERROR", "LOADING"].includes(displayState)
}

export default function Search(){
    
    const [searchState, setSearchState] = useState<SearchState>({status:"IDLE"})
    const [location, setLocation] = useState<string>("")
    const router = useRouter()

    // close search results if user clicks outside
    let searchRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if(searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setSearchState({status:"IDLE"})
            }
        }
        document.addEventListener("mousedown", handleClickOutside)


        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    
    const submitLocation = async () => {
        setSearchState({status:"LOADING"})
        const res = await getLocationsData(location)
        if(res.error){
            setSearchState({status:"ERROR", error:res.error})
        }else{
            setSearchState({status:"ACTIVE", locationResults:res.data})
        }
    }

    const submitLatLong = (locationData:LocationData) => {
        setSearchState({status:"IDLE"})
        setLocation(`${locationData.name}, ${locationData.country_code}`)
        let params = new URLSearchParams()
        params.set("lat", locationData.latitude)
        params.set("long", locationData.longitude)
        params.set("name", locationData.name)
        params.set("country", locationData.country)
        router.replace(`?${params.toString()}`)
    }

    return(
        <div className="flex flex-col justify-center w-full max-w-xl  sm:flex-row gap-3" ref={searchRef}>
            
                <SearchBar searchState={searchState} value={location} setValue={setLocation} submitLocation={submitLocation} submitLatLong={submitLatLong}/>
                <button className="w-full h-12 px-6 rounded-xl bg-light-blue sm:max-w-fit" onClick={submitLocation}>
                    Search
                </button>
        </div>
    )
}

type SearchBarProps = {
    searchState:SearchState,
    value:string, 
    setValue:Dispatch<SetStateAction<string>>, 
    submitLocation:() => void, 
    submitLatLong:(locationData:any) => void,
    
}

function SearchBar({searchState, value, setValue, submitLocation, submitLatLong}:SearchBarProps){
    
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

            {shouldShowList(searchState.status) && <SearchDropdown searchState={searchState} submitLatLong={submitLatLong}/>}
        </div>
    )
}



function SearchDropdown({searchState, submitLatLong}: {searchState:SearchState, submitLatLong:(locationData:any) => void}){
    

    return(
        <div className="absolute flex flex-col justify-center bg-light-bg rounded-xl w-full h-fit min-h-14 left-0 top-13 z-50">
            <div className="my-2 px-2 ">
            {   
                searchState.status === "LOADING" ? 
                    <div className="px-2">Search in progress...</div> 
                :

                    searchState.status === "ERROR"  ? <div className="flex flex-row pl-2"><OctagonAlert className=" text-red-600" /><p className="my-auto px-2 text-red-600">{searchState.error}</p></div> 
                    :
                    searchState.status === "ACTIVE" && searchState.locationResults.map((location, i) => {
                        return(
                            <div className="flex w-full h-10 hover:bg-white/10 rounded-md"  key={i} onClick={() => submitLatLong(location)}>
                                <p className="my-auto px-2">{`${location.name}, ${location.admin1}, ${location.country_code}`}</p>
                            </div>
                        )
                    })

            }
            </div>
        </div>
    )
}


