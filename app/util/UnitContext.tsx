'use client'
 
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'

import { UnitPreferences } from './types'
 
export type UnitContextType = {
    preferences:UnitPreferences,
    setPreferences: Dispatch<SetStateAction<UnitPreferences>>
}

export const UnitContext = createContext<UnitContextType | undefined>(undefined)
 
export default function UnitProvider({
  children, initialPreferences
}: {
  children: React.ReactNode,
  initialPreferences:UnitPreferences
}) {

    const [preferences, setPreferences] = useState<UnitPreferences>(initialPreferences) 

    useEffect(() => {
      console.log("new preference: " + preferences.temp)
    }, [preferences])
    
     
    const value = {
        preferences:preferences,
        setPreferences:setPreferences 
    }




    return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>
}