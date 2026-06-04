'use client'
import { Dropdown } from "@/app/util/Components/Dropdown/Dropdown"
import { OptionType} from "@/app/util/types"
import UnitsIcon from "@/public/images/icon-units.svg"

const switchUnitSystem = {
    
}
export function UnitsDropdown(){

    const newOptions: OptionType[] = [
        {
            label:"Switch to Imperial",
            type:"option",
            onSelect:() => {}
        },
        {
            label:"Temperature",
            type:"section",
            onSelect:() => {},
            options:[
                {
                    label:"Celsius (°C)",
                    type:"option"
                },
                {
                    label:"Fahrenheit (°F)",
                    type:"option"
                }
            ]
        },
        {
            label:"Wind Speed",
            type:"section",
            onSelect:() => {},
            options:[
                {
                    label:"km/h",
                    type:"option"
                },
                {
                    label:"mph",
                    type:"option"
                }
            ]
        },
        {
            label:"Precipitation",
            type:"section",
            onSelect:() => {},
            options:[
                {
                    label:"Millimeters (mm)",
                    type:"option"
                },
                {
                    label:"Inches (in)",
                    type:"option"
                }
            ]
        },
    ]

    const submitFn = (option:string) => {
        console.log(option)
    }

    return(
        <>
            <Dropdown logo={UnitsIcon} title="Units" options={newOptions} submitFn={submitFn} closeAfterSelect={true}/>
        </>
    )
}

