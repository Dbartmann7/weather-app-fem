"use client"
import Image from "next/image"

import SearchIcon from "@/public/images/icon-search.svg"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { getLocationsData } from "@/app/util/getLocationsData"
import { OctagonAlert } from "lucide-react"




export default function Search(){
    type DisplayState = "ACTIVE" | "IDLE" | "ERROR" | "LOADING"
    // TODO: look into combining loading, error, active, idle into one state
    const [displayState, setDisplayState] = useState<DisplayState>("IDLE")
    const [locationResults, setLocationResults] = useState<string[]>([]);
    const [location, setLocation] = useState<string>("")
    const [showList, setShowList] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
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

    
    const submitLocation = async () => {
        setShowList(true)
        setLoading(true)
        const res = await getLocationsData(location)
        if(res.error){
            setError(res.error)
        }
        setLoading(false)        
        setLocationResults(res.data)
        
    }

    const submitLatLong = (locationData:any) => {
        setShowList(false)
        setLocation(`${locationData.name}, ${locationData.admin1}`)
        let params = new URLSearchParams()
        params.set("lat", locationData.latitude)
        params.set("long", locationData.longitude)
        params.set("name", locationData.name)
        params.set("country", locationData.country)
        router.replace(`?${params.toString()}`)
    }

    return(
        <div className="flex flex-col justify-center w-full max-w-xl  sm:flex-row gap-3" ref={searchRef}>
            
                <SearchBar error={error} loading={loading} value={location} setValue={setLocation} submitLocation={submitLocation} submitLatLong={submitLatLong} locations={locationResults} showList={showList}/>
                <button className="w-full h-12 px-6 rounded-xl bg-light-blue sm:max-w-fit" onClick={submitLocation}>
                    Search
                </button>
        </div>
    )
}

type SearchBarProps = {
    error: string | undefined
    loading:boolean
    value:string, 
    setValue:Dispatch<SetStateAction<string>>, 
    submitLocation:() => void, 
    submitLatLong:(locationData:any) => void,
    locations:any[],
    showList:boolean
}

function SearchBar({error, loading, value, setValue, submitLocation, submitLatLong, locations, showList}:SearchBarProps){
    
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

            {showList ? <SearchDropdown error={error} loading={loading} locations={locations} submitLatLong={submitLatLong}/> : null}
        </div>
    )
}



function SearchDropdown({error, loading, locations, submitLatLong}: {error:string | undefined, loading:boolean, locations:any[], submitLatLong:(locationData:any) => void}){
    

    return(
        <div className="absolute flex flex-col justify-center bg-light-bg rounded-xl w-full h-fit min-h-14 left-0 top-13 z-50">
            <div className="my-2 px-2 ">
            {   
                loading ? 
                    <div className="px-2">Searching...</div> 
                :

                    error ? <div className="flex flex-row pl-2"><OctagonAlert className=" text-red-600" /><p className="my-auto px-2 text-red-600">{error}</p></div> 
                    :
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


