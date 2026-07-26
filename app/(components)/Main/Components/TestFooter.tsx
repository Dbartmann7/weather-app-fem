"use client"

import { TestState, useGetTest } from "@/app/util/TestContext"
import { Circle } from "lucide-react"
import { CircleCheckBig } from "lucide-react"

const TestFooter = () => {

    const {testState, toggleTestValue} = useGetTest()
    const settings:TestState[] = [
        "Loading", "Error"
    ]


    return (
        <div className="w-full flex gap-10 justify-center pt-10 text-white">
            {
                settings.map((setting) => {
                    return (
                        <div className="flex flex-row gap-2">
                            <p>{setting}</p>
                            {setting === testState ? <CircleCheckBig onClick={() => {toggleTestValue(setting)}}/> : <Circle onClick={() => {toggleTestValue(setting)}}/>}
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default TestFooter