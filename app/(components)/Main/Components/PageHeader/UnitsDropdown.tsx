'use client'
import { Dropdown } from "@/app/util/Components/Dropdown/Dropdown"
import UnitsIcon from "@/public/images/icon-units.svg"


type OptionType = {
    name:string
    options:string[]
    selected:number
} 

export function UnitsDropdown(){
    const options = ["Switch to Imperial", 
                        "/Temperature", 
                            "Celsius (°C)", 
                            "Fahrenheit (°F)",
                        "/Wind Speed",
                            "km/h",
                            "mph",
                        "/Precipitation",
                            "Millimeters (mm)",
                            "Inches (in)" 
                        ] 


    const newOptions = [
        "Switch to Imperial",
        {
            name:"Temperature",
            options: [
                "Celsius (°C)", 
                "Fahrenheit (°F)",
            ],
            selected:0
        },
        {
            name:"Wind Speed",
            options: [
                "km/h", 
                "mph",
            ],
            selected:0
        },
        {
            name:"Precipitation",
            options: [
                "Millimeters (mm)", 
                "Inches (in)",
            ],
            selected:0
        }
        
    ]

    const submitFn = (option:string) => {
        console.log(option)
    }

    return(
        <>
            <Dropdown logo={UnitsIcon} title="Units" options={options} submitFn={submitFn}/>
        </>
    )
}

