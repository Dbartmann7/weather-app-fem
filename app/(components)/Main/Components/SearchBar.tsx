import SearchLogo from "@/public/images/icon-search.svg"
import Image from "next/image"

export default function SearchBar(){

    return(
        <div className="flex bg-light-bg rounded-xl  h-14 px-6 ">
            <Image src={SearchLogo} alt="search"/>
            <input
                className="w-full px-4 focus-visible:outline-0"
                placeholder="Search for a place..."
            />
        </div>
    )
}