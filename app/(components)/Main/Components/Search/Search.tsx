"use client"
import Image from "next/image"

import SearchIcon from "@/public/images/icon-search.svg"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getLocationsData } from "@/app/actions"
import { InputEvent } from "react"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

// TODO: implement search dropdown to display locations

function SearchBar({value, setValue, submitLocation}:{value:string, setValue:Dispatch<SetStateAction<string>>, submitLocation:() => void}){

    return(
        <div className="flex bg-light-bg rounded-xl w-full h-12 px-6 ">
            <Image src={SearchIcon} alt="search" className="w-6"/>
            <input
                type="query"
                className="w-full px-4 focus-visible:outline-0"
                placeholder="Search for a place..."
                value={value}
                onInput={(e) => setValue(e.currentTarget.value)}
                onKeyDown={(e) => {if(e.key === 'Enter') submitLocation()}}
            />
        </div>
    )
}


export default function Search(){
    const [locationResults, setLocationResults] = useState();
    const [location, setLocation] = useState<string>("")
    
    const router = useRouter()
    const submitLocation = async () => {
        const data = await getLocationsData(location)
        setLocationResults(data)
    }

    

    return(
        <div className="flex flex-col justify-center w-full max-w-xl  sm:flex-row gap-3" >
                <SearchBar value={location} setValue={setLocation} submitLocation={submitLocation}/>
                <button className="w-full h-12 px-6 rounded-xl bg-light-blue sm:max-w-fit" onClick={submitLocation}>
                    Search
                </button>
        </div>
    )
}