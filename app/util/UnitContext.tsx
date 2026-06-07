'use client'
 
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'

import { UnitPreferences } from './types'

export type UnitContextType = {
    preferences:UnitPreferences,
    setPreferences: Dispatch<SetStateAction<UnitPreferences>>
}

export const UnitContext = createContext<UnitContextType | undefined>(undefined)
 
export default function UnitProvider({
  children
}: {
  children: React.ReactNode,

}) {
    const defaultPreferences:UnitPreferences = {
      "temp":"c",
      "precip":"mm",
      "speed":"mph"
    }

    
    const [preferences, setPreferences] = useState<UnitPreferences>(defaultPreferences) 

    useEffect(() => {
      const preferenceString = localStorage.getItem("unitPreferences")
      
      if(preferenceString) setPreferences(JSON.parse(preferenceString))
      
    }, [])

    useEffect(() => {
      localStorage.setItem("unitPreferences", JSON.stringify(preferences))
    }, [preferences])
    
     
    const value = {
        preferences:preferences,
        setPreferences:setPreferences 
    }

    return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>
}