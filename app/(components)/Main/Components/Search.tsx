import Image from "next/image"

import SearchIcon from "@/public/images/icon-search.svg"

function SearchBar(){

    return(
        <div className="flex bg-light-bg rounded-xl w-full h-12 px-6 ">
            <Image src={SearchIcon} alt="search"/>
            <input
                className="w-full px-4 focus-visible:outline-0"
                placeholder="Search for a place..."
            />
        </div>
    )
}


export default function Search(){

    return(
        <div className="flex flex-col justify-center w-full max-w-xl  sm:flex-row gap-3">
                <SearchBar/>
                <button className="w-full h-12 px-6 rounded-xl bg-light-blue sm:max-w-fit">
                    Search
                </button>
        </div>
    )
}