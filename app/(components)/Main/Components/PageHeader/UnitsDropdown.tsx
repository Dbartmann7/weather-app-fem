'use client'
import { Dropdown } from "@/app/util/Components/Dropdown/Dropdown"
import { MenuItem} from "@/app/util/types"
import { UnitContext } from "@/app/util/UnitContext"
import UnitsIcon from "@/public/images/icon-units.svg"
import { use, useEffect, useState } from "react"

export function UnitsDropdown(){
    
    type OverallState = {
        label:"Switch to Imperial" | "Switch to Metric",
        value: "imperial" | "metric"
    }

    const unitContext = use(UnitContext)

    const [overallState, setOverallState] = useState<OverallState>({
        label:"Switch to Imperial",
        value:"imperial"
    })
 
    useEffect(() => {
        // switch overall change if user individually sets all units to metric/imperial
        if(unitContext){
            let {temp, precip, speed} = unitContext.preferences
            if(temp === "c" && precip === "mm" && speed === "km/h" && overallState.value === "metric"){
                setOverallState({
                    label:"Switch to Imperial",
                    value:"imperial"
                })
            }
            if(temp === "f" && precip === "in" && speed === "mph" && overallState.value === "imperial"){
                setOverallState({
                    label:"Switch to Metric",
                    value:"metric"
                })
            }

        }
        

    }, [unitContext?.preferences])

    const setOverall = (value:"metric" | "imperial") => {
        if(value === "metric"){
           
            unitContext?.setPreferences(() => {
                return {
                    temp:"c",
                    precip:"mm",
                    speed:"km/h"
                } 
            })
        }

        if(value === "imperial"){
            unitContext?.setPreferences(() => {
                return {
                    temp:"f",
                    precip:"in",
                    speed:"mph"
                } 
            })
        }
        
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

    const options: MenuItem[] = [
        {
            label:overallState.label,
            type:"option",
            value:overallState.value,
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
            <Dropdown logo={UnitsIcon} title="Units" options={options}/>
        </>
    )
}

