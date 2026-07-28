"use client"

import Cookies from "js-cookie"

import { Circle, X } from "lucide-react"
import { CircleCheckBig } from "lucide-react"
import { useEffect, useState } from "react"

const DemoFooter = () => {

    const [state, setState] = useState<string>("")
    const [showPopUp, setShowPopup] = useState<boolean>(false)
    const [lastPopup, setLastPopup] = useState<number>(0)
    const popupTimeout = 1000  * 60 * 1

 
    const settings:string[] = [
        "Loading", "Error"
    ]

    useEffect(() => {
        let setting = Cookies.get("setting")
        if(setting) setState(setting) 
    }, [])

    useEffect(() => {
        // 1/24 -> 1 hour
        Cookies.set("setting", state || "", {expires:1/24})
    }, [state])

    const handleClick = (value:string) => {
        if(Date.now() > lastPopup + popupTimeout){
            setShowPopup(true)
        }
        setLastPopup(Date.now)
        setState((prev) => {
            let newActive = ""
            if(prev === value) return newActive
            return value
        })
    }


    return (
        <div>
            <div className="w-full flex gap-10 justify-center pt-10 text-white">
                {
                    settings.map((setting, i) => {
                        return (
                            <div className="flex flex-row gap-2" key={i}>
                                <p>{setting}</p>
                                {setting === state ? <CircleCheckBig onClick={() => {handleClick(setting)}}/> : <Circle onClick={() => {handleClick(setting)}}/>}
                            </div> 
                        )
                    })
                }
            </div>
            { showPopUp &&
                <div className="fixed top-6 left-1/2 -translate-x-1/2 w-100 h-20 p-5 bg-light-bg border border-border-color text-white opacity-85 flex items-center">
                    <p>Demo states require a refresh to take effect</p>
                    <X className="absolute top-3 right-3 scale-125 hover:text-white/60" onClick={() => setShowPopup(false)}/>
                </div>
            }
        </div>
    )
}

export default DemoFooter