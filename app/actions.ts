import { cookies } from "next/headers"
import { UnitPreferences } from "./util/types"

export const setCookie = async (key:string, value:string) => {

    const cookieStore = await cookies()
    cookieStore.set(key, value)
}

export const getUnitPreferences: () => Promise<UnitPreferences> = async () => {
    "use server"
    const preferences = (await cookies()).get("unitPreferences")?.value

    if(!preferences){
        return {
            "overall":null,
            "temp":"c",
            "precip":"mm",
            "speed":"mph"
        }
    }

    return JSON.parse(preferences)

}
