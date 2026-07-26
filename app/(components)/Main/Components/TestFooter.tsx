"use client"

import Cookies from "js-cookie"

import { Circle } from "lucide-react"
import { CircleCheckBig } from "lucide-react"
import { useEffect, useState } from "react"

const TestFooter = () => {

    const [state, setState] = useState<string>("")
    const settings:string[] = [
        "Loading", "Error"
    ]

    useEffect(() => {
        let setting = Cookies.get("setting")
        if(setting) setState(setting) 
    }, [])

    useEffect(() => {
        Cookies.set("setting", state || "", {expires:1/24})
    }, [state])

    const handleClick = (value:string) => {
        setState((prev) => {
            let newActive = ""
            if(prev === value) return newActive
            return value
        })
    }


    return (
        <div className="w-full flex gap-10 justify-center pt-10 text-white">
            {
                settings.map((setting) => {
                    return (
                        <div className="flex flex-row gap-2">
                            <p>{setting}</p>
                            {setting === state ? <CircleCheckBig onClick={() => {handleClick(setting)}}/> : <Circle onClick={() => {handleClick(setting)}}/>}
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default TestFooter