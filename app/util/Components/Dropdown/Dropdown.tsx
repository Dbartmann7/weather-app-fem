"use client"

import { RefObject, useEffect, useRef, useState } from "react"

import Image from "next/image"
import DropdownIcon from "@/public/images/icon-dropdown.svg"
import { DropdownMenu } from "./DropdownMenu"
import { MenuItem, OptionType } from "../../types"

type DropdownProps = {
    title:string
    logo?: string
    options: MenuItem[]
    closeAfterSelect?: boolean

}


export function Dropdown({title, logo, options=[], closeAfterSelect=false}: DropdownProps){
    
    let [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    let menuRef = useRef<HTMLDivElement | null>(null)


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

    let close = () => {
        if(closeAfterSelect){
            setIsMenuVisible(false)
        }
    }

    return (
        <div className="relative">
            <div className="relative flex w-fit gap-2 h-10 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-md" onClick={toggleDropdown}>
                {logo ? <Image src={logo} alt={"logo"}/> : null}
                <p>{title}</p>
                <Image src={DropdownIcon} alt="Drop" className={isMenuVisible ? 'rotate-180' : ""}/>
            </div>
            {
                isMenuVisible ? <DropdownMenu ref={menuRef} options={options} close={close} className="border border-border-color w-52 right-0 top-12"/>
                :
                null

            }
        </div>
    )
}

