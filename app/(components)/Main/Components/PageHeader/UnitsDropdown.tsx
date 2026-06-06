'use client'
import { Dropdown } from "@/app/util/Components/Dropdown/Dropdown"
import { MenuItem, OptionType} from "@/app/util/types"
import { UnitContext } from "@/app/util/UnitContext"
import UnitsIcon from "@/public/images/icon-units.svg"
import { use } from "react"

export function UnitsDropdown(){

    const unitContext = use(UnitContext)
    
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

    const newOptions: MenuItem[] = [
        {
            label:"Switch to Imperial",
            type:"option",
            onSelect:() => {}
        },
        {
            label:"Temperature",
            type:"section",
            
            options:[
                {
                    label:"Celsius (°C)",
                    type:"option",
                    value:"c",
                    onSelect:changeTemp
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

