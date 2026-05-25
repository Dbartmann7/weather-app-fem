"use client"

import { RefObject, useEffect, useRef, useState } from "react"

import Image from "next/image"
import DropdownIcon from "@/public/images/icon-dropdown.svg"
import { DropdownMenu } from "./DropdownMenu"

type DropdownProps = {
    title:string
    logo?: string
    options: string[]
    submitFn: (...args: any[]) => any 
    closeAfterSelect?: boolean

}


export function Dropdown({title, logo, options=[], submitFn, closeAfterSelect}: DropdownProps){
    
   
    const [iconClass, setIconClass] = useState<string>("")

    let [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    let menuRef = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        setIconClass(() => {
            return isMenuVisible ? 'rotate-180' : ""
        })
        
    }, [isMenuVisible])

    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsMenuVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleDropdown = () => {
        setIsMenuVisible((prev) => {
            return !prev
        })
    }

    const newSubmitFn = (option:string) =>{
        if(closeAfterSelect) setIsMenuVisible(false)
        submitFn(option)
    }

    return (
        <div className="relative">
            <div className="relative flex w-fit gap-2 h-10 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-md" onClick={toggleDropdown}>
                {logo ? <Image src={logo} alt={"logo"}/> : null}
                <p>{title}</p>
                <Image src={DropdownIcon} alt="Drop" className={iconClass}/>
            </div>
            {
                isMenuVisible ? <DropdownMenu ref={menuRef} options={options} submitFn={newSubmitFn} className="border border-border-color w-52 right-0 top-12"/>
                :
                null

            }
        </div>
    )
}

