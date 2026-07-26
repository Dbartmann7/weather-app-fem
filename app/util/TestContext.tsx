'use client'
 
import { createContext, useContext, useState } from 'react'

export type TestState = "Loading" | "Error" | null


export type TestContextType = {
    testState:TestState,
    toggleTestValue:(value:TestState) => void
}

const TestContext = createContext<TestContextType | undefined>(undefined)
 
export const useGetTest = () => {
    const value = useContext(TestContext)
    if(!value) throw new Error("useGetTest must be used within a Provider")
    return value
}

export default function TestProvider({
  children
}: {
  children: React.ReactNode,

}) {
    const [testState, setTestState] = useState<TestState>(null)

    const toggleTestValue = (value:TestState) => {
        setTestState((prev) => {
            let newActive = null
            if(prev === value) return newActive
            return value
        })
    }

     
    const value = {
        testState:testState,
        toggleTestValue:toggleTestValue
    }

    return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}