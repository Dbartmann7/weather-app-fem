"use client"

import Image from "next/image"

import DropdownIcon from "@/public/images/icon-dropdown.svg"
import RainIcon from "@/public/images/icon-rain.webp"
import { HourlyWeatherData } from "@/app/util/types"
import { dateToDay, dateToHour, getDayNum } from "@/app/util/DateConversions"
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react"
import { DropdownMenu } from "@/app/util/Components/DropdownMenu"

type DayDropdownProps = {
    day:number, 
    setDay: (option: string) => void, 
    isFocused:boolean, 
    onClick?: () => void
    menuRef?: RefObject<HTMLDivElement | null>
}

function DayDropdown({day, setDay, isFocused, onClick, menuRef}: DayDropdownProps){
    const options = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const [iconClass, setIconClass] = useState<string>("")

    useEffect(() => {
        if(isFocused){
            setIconClass('rotate-180')
        }else{
            setIconClass("")
        }
    }, [isFocused])

    return (
        <div className="relative">
            <div className="relative flex w-fit gap-2 h-10 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-md" onClick={onClick}>
                <p>{dateToDay(day)}</p>
                <Image src={DropdownIcon} alt="Drop" className={iconClass}/>
                <button className="absolute w-full h-full top-0 left-0" onClick={() => console.log("hello")}/>
            </div>
            {
                isFocused ? <DropdownMenu ref={menuRef} options={options} submitFn={setDay} className="border border-border-color w-52 right-0 top-12"/>
                :
                null

            }
        </div>
    )
}

function HourInfoCard({data}:{data:HourlyWeatherData}){

    return(
        <div className="flex w-full gap-2 h-14 py-2 px-4 items-center bg-white/5 rounded-md border border-border-color">
            <Image className="max-h-full w-auto" src={RainIcon} alt={"Rain"}/>
            <p className="mr-auto">{dateToHour(data.time)}</p>
            <p>{data.temp}</p>
        </div>
    )
}

export default function HourlyForecast({data}:{data:HourlyWeatherData[]}){ 
    const currentDay:number = data[0].time.getDay()
    const [selectedDay, setSelectedDay] = useState<number>(currentDay)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [dayOffset, setDayOffset] = useState<number>(0)
    
    // close search results if user clicks outside
    let dropdownRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsFocused(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleSelect = (option:string) => {
        setSelectedDay(getDayNum(option))
        setIsFocused(false)
    }
    
    const toggleDropdown = () => {
        setIsFocused((prev) => {
            return !prev
        })
    }
    useEffect(() => {
        if(currentDay > selectedDay){
            setDayOffset(7 - (currentDay - selectedDay))
        }else{
            setDayOffset(selectedDay - currentDay)
        }
    }, [selectedDay])

    useEffect(() => {
        console.log(isFocused)
    }, [isFocused])
    return( 
        <div className="flex flex-col w-full max-w-200 xl:max-w-93 p-6 max-h-167 bg-light-bg rounded-2xl border border-border-color relative ">
            <div className="flex flex-row items-center pb-4">
                <h3 className="mr-auto">Hourly Forecast</h3>
                <DayDropdown day={selectedDay} setDay={handleSelect} isFocused={isFocused} onClick={toggleDropdown} menuRef={dropdownRef}/>
            </div>
            <div className="flex flex-col  gap-4 overflow-y-scroll h-full">
                {
                    data?.slice(0 + 24*dayOffset, 24 + 24*dayOffset).map((hour, i) => {
                        
                        return <HourInfoCard key={i} data={hour}/>
                    })
                }
            </div>
        </div>
    )
}