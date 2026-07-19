'use client'
import { Dropdown } from "@/app/util/Components/Dropdown/Dropdown"
import { MenuItem, UnitPreferences} from "@/app/util/types"
import { UnitContext } from "@/app/util/UnitContext"
import UnitsIcon from "@/public/images/icon-units.svg"
import { use, useEffect, useState } from "react"

export function UnitsDropdown(){
   
    const unitContext = use(UnitContext)
    const [overallLabel, setOverallLabel] = useState<"Switch to Imperial" | "Switch to Metric">("Switch to Imperial")
    const [overallValue, setOverallValue] = useState<"imperial" | "metric">("imperial")
 
    useEffect(() => {
        // switch overall change if user individually sets all units to metric/imperial
        if(unitContext){
            let {temp, precip, speed} = unitContext.preferences
            if(temp === "c" && precip === "mm" && speed === "km/h" && overallValue === "metric"){
                setOverallLabel("Switch to Imperial")
                setOverallValue("imperial")
            }
            if(temp === "f" && precip === "in" && speed === "mph" && overallValue === "imperial"){
                setOverallLabel("Switch to Metric")
                setOverallValue("metric")
            }

        }
        

    }, [unitContext?.preferences])

    const setOverall = (value:"metric" | "imperial") => {
        unitContext?.setPreferences(() => {
            if(value === "metric"){
                setOverallLabel("Switch to Imperial")
                setOverallValue("imperial")
                return {
                    temp:"c",
                    precip:"mm",
                    speed:"km/h"
                }
            }
            setOverallLabel("Switch to Metric")
            setOverallValue("metric")
            return {
                temp:"f",
                precip:"in",
                speed:"mph"
            } 
        })
    }

    const changeTemp = (value:"c" | "f") => {
        if(unitContext?.preferences.temp === value) return

        unitContext?.setPreferences((prev) => {
            let newPref = {...prev}
            newPref.temp = value

            return newPref
        })
    }

    const changePrecip = (value:"mm" | "in") => {
        if(unitContext?.preferences.precip === value) return

        unitContext?.setPreferences((prev) => {
            let newPref = {...prev}
            newPref.precip = value

            return newPref
        })
    }

    const changeSpeed = (value:"km/h" | "mph") => {
        if(unitContext?.preferences.speed === value) return

        unitContext?.setPreferences((prev) => {
            let newPref = {...prev}
            newPref.speed = value

            return newPref
        })
    }

    const isSelected = (value:string) => {
        if(unitContext){
            let {temp, precip, speed} = unitContext.preferences
            if(temp === value || precip === value || speed === value) return true
        }

        return false
    }

    const newOptions: MenuItem[] = [
        {
            label:overallLabel,
            type:"option",
            value:overallValue,
            onSelect:setOverall
        },
        {
            label:"Temperature",
            type:"section",
            selected:unitContext?.preferences.temp,
            options:[
                {
                    label:"Celsius (°C)",
                    type:"option",
                    value:"c",
                    onSelect:changeTemp,
                    
                },
                {
                    label:"Fahrenheit (°F)",
                    type:"option",
                    value:"f",
                    onSelect:changeTemp
                }
            ]
        },
        {
            label:"Wind Speed",
            type:"section",
            selected:unitContext?.preferences.speed,
            options:[
                {
                    label:"km/h",
                    type:"option",
                    value:"km/h",
                    onSelect: changeSpeed
                },
                {
                    label:"mph",
                    type:"option",
                    value:"mph",
                    onSelect: changeSpeed
                }
            ]
        },
        {
            label:"Precipitation",
            type:"section",
            selected:unitContext?.preferences.precip,
            options:[
                {
                    label:"Millimeters (mm)",
                    type:"option",
                    value:"mm",
                    onSelect: changePrecip
                },
                {
                    label:"Inches (in)",
                    type:"option",
                    value:"in",
                    onSelect: changePrecip
                }
            ]
        },
    ]

    return(
        <>
            <Dropdown logo={UnitsIcon} title="Units" options={newOptions}/>
        </>
    )
}

